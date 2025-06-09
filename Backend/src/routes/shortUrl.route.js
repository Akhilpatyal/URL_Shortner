import express from 'express';
const router=express.Router();
import { createShortUrl} from '../controller/shortUrlController.js';

router.post("/",createShortUrl);

 export default router;