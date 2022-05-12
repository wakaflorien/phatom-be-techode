import express from 'express'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router()

router.get('/welcome', (req,res) => {
    res.status(200).json({ "status": `${req.t('success')}`, "data": `${req.t('welcome')}`})
})

export default router;

