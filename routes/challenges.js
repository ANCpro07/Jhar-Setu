const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/challenges - Create a new challenge
router.post('/', async (req, res, next) => {
  try {
    const { name, email, title, description, district, block, village, affected_population, telegram_chat_id } = req.body;
    
    // Mock AI category assignment
    const categories = ['Agriculture', 'Water', 'Healthcare'];
    const ai_category = categories[Math.floor(Math.random() * categories.length)];
    
    // Forward to the external webhook
    try {
      await fetch('https://outrank-unselfish-payphone.ngrok-free.dev/webhook/civic/complaint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
    } catch (webhookErr) {
      console.error('Failed to notify webhook', webhookErr);
    }
    
    const [result] = await pool.execute(
      'INSERT INTO challenges (title, description, citizen_id, location_district, image_url, ai_category, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title || ('Challenge from ' + name), description, null, district, null, ai_category, 'pending']
    );
    
    res.status(201).json({ id: result.insertId, message: 'Challenge created successfully', ai_category });
  } catch (err) {
    next(err);
  }
});

// GET /api/challenges - Fetch all challenges (Support filtering by status or ai_category)
router.get('/', async (req, res, next) => {
  try {
    const { status, ai_category } = req.query;
    
    let query = 'SELECT * FROM challenges';
    const queryParams = [];
    
    const conditions = [];
    if (status) {
      conditions.push('status = ?');
      queryParams.push(status);
    }
    if (ai_category) {
      conditions.push('ai_category = ?');
      queryParams.push(ai_category);
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY created_at DESC';
    
    const [rows] = await pool.execute(query, queryParams);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// PUT /api/challenges/:id/assign - Update assigned_university_id and status
router.put('/:id/assign', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { university_id } = req.body;
    
    if (!university_id) {
      return res.status(400).json({ error: 'university_id is required' });
    }
    
    const [result] = await pool.execute(
      'UPDATE challenges SET assigned_university_id = ?, status = ? WHERE id = ?',
      [university_id, 'routed', id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    
    res.json({ message: 'Challenge routed to university successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
