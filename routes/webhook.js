const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/webhook/telegram - The Citizen Interface
router.post('/telegram', async (req, res, next) => {
  try {
    // Example Telegram Webhook Payload
    // {
    //   "update_id": 123456,
    //   "message": {
    //     "message_id": 1,
    //     "from": { "id": 987654321, "first_name": "Citizen" },
    //     "text": "The local bridge is broken."
    //   }
    // }
    
    if (req.body && req.body.message && req.body.message.text) {
      const text = req.body.message.text;
      const senderId = req.body.message.from.id;
      
      // We will create a generic title and use the text as description.
      const title = `Telegram Submission from ${senderId}`;
      
      // Mock AI category assignment
      const categories = ['Agriculture', 'Water', 'Healthcare'];
      const ai_category = categories[Math.floor(Math.random() * categories.length)];
      
      // Insert into challenges table
      await pool.execute(
        'INSERT INTO challenges (title, description, ai_category, status) VALUES (?, ?, ?, ?)',
        [title, text, ai_category, 'pending']
      );
    }
    
    // Always return a success response to Telegram to acknowledge receipt
    res.status(200).json({ ok: true });
  } catch (err) {
    // Log error but still send 200 OK so Telegram stops retrying
    console.error('Telegram Webhook Error:', err);
    res.status(200).json({ ok: true });
  }
});

module.exports = router;
