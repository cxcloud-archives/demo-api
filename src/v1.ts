import { Router } from 'express';
import { Categories, Products } from '@cxcloud/facade/dist/commerce';

export const router = Router();

router.get('/categories', (req, res) => {
  Categories.fetchAll().then(cats => res.json(cats));
});

router.get('/products/:categoryId', (req, res, next) => {
  Products.findByCategoryId(req.params.categoryId)
    .then(result => res.json(result))
    .catch(next);
});
