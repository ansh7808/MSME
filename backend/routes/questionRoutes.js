import express from 'express';
import { getAllQuestions, addQuestion, deleteQuestion } from '../controllers/questionController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllQuestions);
router.post('/', auth, addQuestion);
router.delete('/:id', auth, deleteQuestion);

export default router;