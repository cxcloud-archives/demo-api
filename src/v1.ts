import { Router } from 'express';
import { Commerce } from '@cxcloud/facade';

export const router = Router();

router.get('/categories', (req, res) => {
  Commerce.Categories.fetchAll().then(cats => res.json(cats));
});
