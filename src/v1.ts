import { Router } from 'express';
import { Categories } from '@cxcloud/facade';

export const router = Router();

router.get('/categories', (req, res) => {
  Categories.fetchAll().then(cats => res.json(cats));
});
