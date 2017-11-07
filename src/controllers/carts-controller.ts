import {
  POST,
  GET,
  DELETE,
  PUT,
  Path,
  PathParam,
  Context,
  ServiceContext
} from 'typescript-rest';
import { Carts } from '@cxcloud/facade/dist/commerce';
import {
  Cart,
  IAddLineItem,
  IRemoveLineItem,
  IChangeLineItemQuantity
} from '@cxcloud/facade/dist/sdk/types/carts';
import { Address } from '@cxcloud/facade/dist/sdk/types/common';

interface ISetShippingMethod {
  shippingMethodId: string;
}

@Path('/carts')
export class CartsController {
  @Context ctx: ServiceContext;

  @POST
  createCart(): Promise<Cart> {
    return Carts.create(this.ctx.response.locals.authToken);
  }

  @Path(':id')
  @GET
  getCart(@PathParam('id') id: string): Promise<Cart> {
    return Carts.findById(id, this.ctx.response.locals.authToken);
  }
}

@Path('/carts/:id/:version')
export class CartController {
  @Context ctx: ServiceContext;
  @PathParam('id') cartId: string;
  @PathParam('version') cartVersion: number;

  @Path('/lineItems')
  @POST
  addLineItems(body: IAddLineItem): Promise<Cart> {
    return Carts.addLineItems(
      this.cartId,
      this.cartVersion,
      body,
      this.ctx.response.locals.authToken
    );
  }

  @Path('/lineItems')
  @DELETE
  removeLineItem(body: IRemoveLineItem): Promise<Cart> {
    return Carts.removeLineItem(
      this.cartId,
      this.cartVersion,
      body.lineItemId,
      this.ctx.response.locals.authToken
    );
  }

  @Path('/lineItems')
  @PUT
  changeLineItemQuantity(body: IChangeLineItemQuantity): Promise<Cart> {
    return Carts.changeLineItemQuantity(
      this.cartId,
      this.cartVersion,
      body,
      this.ctx.response.locals.authToken
    );
  }

  @Path('/shippingAddress')
  @PUT
  setShippingAddress(body: Address): Promise<Cart> {
    return Carts.setShippingAddress(
      this.cartId,
      this.cartVersion,
      body,
      this.ctx.response.locals.authToken
    );
  }

  @Path('/billingAddress')
  @PUT
  setBillingAddress(body: Address): Promise<Cart> {
    return Carts.setBillingAddress(
      this.cartId,
      this.cartVersion,
      body,
      this.ctx.response.locals.authToken
    );
  }

  @Path('/shippingMethod')
  @PUT
  setShippingMethod(body: ISetShippingMethod): Promise<Cart> {
    const { shippingMethodId } = body;
    return Carts.setShippingMethod(
      this.cartId,
      this.cartVersion,
      shippingMethodId,
      this.ctx.response.locals.authToken
    );
  }
}
