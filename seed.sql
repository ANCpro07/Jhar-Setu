-- Insert Dummy Users
INSERT INTO users (name, role, phone_number) VALUES 
('Rahul Kumar', 'citizen', '+919876543210'),
('BIT Mesra', 'university', '+918765432109'),
('Tata Steel CSR', 'industry', '+917654321098'),
('Jharkhand Govt Admin', 'gov', '+916543210987'),
('Ranchi Farmer Union', 'citizen', '+915432109876');

-- Insert Dummy Challenges
INSERT INTO challenges (title, description, citizen_id, location_district, image_url, ai_category, status, assigned_university_id) VALUES 
('Water Scarcity in Village', 'Drinking water dries up during summer.', 1, 'Ranchi', 'http://example.com/water.jpg', 'Water', 'pending', NULL),
('Crop Disease Alert', 'Leaves turning yellow in tomato crops.', 5, 'Hazaribagh', 'http://example.com/crop.jpg', 'Agriculture', 'routed', 2),
('Lack of Medical Facilities', 'No doctor available in the nearest PHC.', 1, 'Dumka', NULL, 'Healthcare', 'pending', NULL),
('Irrigation Canal Blocked', 'Canal needs cleaning to resume irrigation.', 5, 'Gumla', NULL, 'Agriculture', 'in_progress', 2),
('Arsenic Contamination', 'Water from handpump has high arsenic levels.', 1, 'Sahebganj', NULL, 'Water', 'solved', 2);

-- Insert Dummy Solutions
INSERT INTO solutions (challenge_id, university_id, proposal_text, required_funding, status) VALUES 
(2, 2, 'Deploy drones to spray organic fungicide.', 50000.00, 'proposed'),
(4, 2, 'Community-driven desilting plan with bio-degradable nets.', 20000.00, 'approved'),
(5, 2, 'Installed low-cost arsenic filters.', 75000.00, 'deployed');
