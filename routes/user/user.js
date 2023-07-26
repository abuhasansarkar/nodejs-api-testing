import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(' User router is OK');
});

// export default router
export default router;
