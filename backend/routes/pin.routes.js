import express from 'express';
import { createPin, getAllPins } from '../controllers/pin.controllers.js';

const router = express.Router();

router.post('/', createPin);
router.get('/', getAllPins);

export default router;
