import express from 'express';

import { getDatas, createData } from '../controllers/datas.js';

const router = express.Router();

router.get('/', getDatas);
router.post('/', createData);
// 待加入user_id
// router.put('/', );
// router.delete('/', );

export default router;