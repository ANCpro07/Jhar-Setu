const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /api/dashboard/stats - Return JSON object with counts
router.get('/stats', async (req, res, next) => {
  try {
    const [totalChallenges] = await pool.execute('SELECT COUNT(*) as count FROM challenges');
    const [solvedChallenges] = await pool.execute('SELECT COUNT(*) as count FROM challenges WHERE status = ?', ['solved']);
    const [challengesByCategory] = await pool.execute('SELECT ai_category, COUNT(*) as count FROM challenges GROUP BY ai_category');
    const [challengesByStatus] = await pool.execute('SELECT status, COUNT(*) as count FROM challenges GROUP BY status');
    const [totalSolutions] = await pool.execute('SELECT COUNT(*) as count FROM solutions');

    res.json({
      total_challenges: totalChallenges[0].count,
      total_solved: solvedChallenges[0].count,
      total_solutions_proposed: totalSolutions[0].count,
      by_category: challengesByCategory.reduce((acc, curr) => {
        if(curr.ai_category) acc[curr.ai_category] = curr.count;
        return acc;
      }, {}),
      by_status: challengesByStatus.reduce((acc, curr) => {
        if(curr.status) acc[curr.status] = curr.count;
        return acc;
      }, {})
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
