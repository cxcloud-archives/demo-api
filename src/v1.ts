import { Router } from 'express';
import { Categories, Products, Customers } from '@cxcloud/facade/dist/commerce';

export const router = Router();

router.get('/categories', (req, res) => {
  Categories.fetchAll().then(cats => res.json(cats));
});

router.get('/products/byCategory/:categoryId', (req, res, next) => {
  Products.findByCategoryId(req.params.categoryId)
    .then(result => res.json(result))
    .catch(next);
});

router.get('/products/:productId', (req, res, next) => {
  Products.findById(req.params.productId)
    .then(result => res.json(result))
    .catch(next);
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  Customers.login(username, password)
    .then(result => res.json(result))
    .catch(next);
});
