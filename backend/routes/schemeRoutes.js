import express from 'express';
import { checkEligibility } from '../controllers/schemeController.js';

const router = express.Router();

router.post('/eligibility', checkEligibility);

export default router;
