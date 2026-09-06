CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role ENUM('citizen', 'university', 'industry', 'gov') NOT NULL,
  phone_number VARCHAR(20) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS challenges (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  citizen_id INT,
  location_district VARCHAR(100),
  image_url VARCHAR(500),
  ai_category VARCHAR(100),
  status ENUM('pending', 'routed', 'in_progress', 'solved') DEFAULT 'pending',
  assigned_university_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (citizen_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (assigned_university_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS solutions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  challenge_id INT,
  university_id INT,
  proposal_text TEXT NOT NULL,
  required_funding DECIMAL(10,2),
  status ENUM('proposed', 'approved', 'deployed') DEFAULT 'proposed',
  FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
  FOREIGN KEY (university_id) REFERENCES users(id) ON DELETE CASCADE
);
