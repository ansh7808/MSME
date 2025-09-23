import express from 'express';
import { loginAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Sirf login route bachega
router.post('/login', loginAdmin);

export default router;