import { Router } from 'express';
import {
  Categories,
  Products,
  Customers,
  Carts,
  Shipping
} from '@cxcloud/facade/dist/commerce';
import { router as cartRouter } from './cart';

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

router.post('/auth/user', (req, res, next) => {
  const { username, password } = req.body;
  Customers.login(username, password, res.locals.authToken)
    .then(result => res.json(result))
    .catch(next);
});

router.post('/auth/anonymous', (req, res, next) => {
  Customers.loginAnonymously()
    .then(result => res.json(result))
    .catch(next);
});

router.get('/shippingMethods', (req, res, next) => {
  Shipping.fetchMethods()
    .then(result => res.json(result))
    .catch(next);
});

router.post('/carts', (req, res, next) => {
  Carts.create(res.locals.authToken)
    .then(result => res.json(result))
    .catch(next);
});

router.get('/carts/:cartId', (req, res, next) => {
  Carts.findById(req.params.cartId, res.locals.authToken)
    .then(result => res.json(result))
    .catch(next);
});

router.use('/carts/:cartId/:cartVersion', cartRouter);
