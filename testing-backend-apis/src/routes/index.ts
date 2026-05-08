import { Router } from 'express';

import {
  createShortUrl,
  getLongUrl,
  getVisitCount
} from '../controllers/index.js';

const router = Router();

// POST /shorten
router.post('/shorten/:longUrl', createShortUrl);

// GET /stats/:code
router.get('/stats/:shortUrl', getVisitCount);

// GET /:code
router.get('/:shortUrl', getLongUrl);

export default router;
