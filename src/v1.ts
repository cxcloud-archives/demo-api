import { Router } from 'express';
import {
  Categories,
  Products,
  Customers,
  Carts,
  Shipping,
  Orders
} from '@cxcloud/facade/dist/commerce';

export const router = Router();

// ==========================================
// Products And Categories
// ==========================================

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

// ==========================================
// Authentication
// ==========================================

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

// ==========================================
// Orders & Shipping
// ==========================================

router.get('/shippingMethods', (req, res, next) => {
  Shipping.fetchMethods()
    .then(result => res.json(result))
    .catch(next);
});

router.get('/orders', (req, res, next) => {
  Orders.fetchAll(res.locals.authToken)
    .then(result => res.json(result))
    .catch(next);
});

router.get('/orders/:orderId', (req, res, next) => {
  Orders.findById(req.params.orderId, res.locals.authToken)
    .then(result => res.json(result))
    .catch(next);
});

router.post('/orders', (req, res, next) => {
  const { cartId, cartVersion } = req.body;
  Orders.create(cartId, cartVersion, res.locals.authToken)
    .then(result => res.json(result))
    .catch(next);
});
