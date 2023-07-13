const express = require('express');
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/getGoalController');

// @desc Get Goals
// @route GET /api/goals
// @access Private
router.get('/', getGoals);

// @desc Set Goals
// @route POST /api/goals
// @access Private
router.post('/', setGoal)

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
router.put('/:id', updateGoal)

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
router.delete('/:id', deleteGoal)


module.exports = router