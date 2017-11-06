import { Carts } from '@cxcloud/facade/dist/commerce';
import { Router } from 'express';

export const router = Router({
  mergeParams: true
});

/**
 * {
 *   productId: string,
 *   variantId: number,
 *   quantity: number
 * }
 * or array of these
 */
router.post('/lineItems', (req, res, next) => {
  Carts.addLineItems(
    req.params.cartId,
    req.params.cartVersion,
    req.body,
    res.locals.authToken
  )
    .then(result => res.json(result))
    .catch(next);
});

/**
 * {
 *   lineItemId: string
 * }
 */
router.delete('/lineItems', (req, res, next) => {
  Carts.removeLineItem(
    req.params.cartId,
    req.params.cartVersion,
    req.body,
    res.locals.authToken
  )
    .then(result => res.json(result))
    .catch(next);
});

/**
 * {
 *   lineItemId: string,
 *   quantity: number
 * }
 */
router.put('/lineItems', (req, res, next) => {
  Carts.changeLineItemQuantity(
    req.params.cartId,
    req.params.cartVersion,
    req.body,
    res.locals.authToken
  )
    .then(result => res.json(result))
    .catch(next);
});

router.put('/shippingAddress', (req, res, next) => {
  Carts.setShippingAddress(
    req.params.cartId,
    req.params.cartVersion,
    req.body,
    res.locals.authToken
  )
    .then(result => res.json(result))
    .catch(next);
});

router.put('/billingAddress', (req, res, next) => {
  Carts.setBillingAddress(
    req.params.cartId,
    req.params.cartVersion,
    req.body,
    res.locals.authToken
  )
    .then(result => res.json(result))
    .catch(next);
});

router.put('/shippingMethod', (req, res, next) => {
  const { shippingMethodId } = req.body;
  Carts.setShippingMethod(
    req.params.cartId,
    req.params.cartVersion,
    shippingMethodId,
    res.locals.authToken
  )
    .then(result => res.json(result))
    .catch(next);
});
