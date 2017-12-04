import {
  POST,
  GET,
  Path,
  PathParam,
  Context,
  ServiceContext
} from 'typescript-rest';
import { Tags, Security } from 'typescript-rest-swagger';
import { Orders } from '@cxcloud/core/dist/commerce';
import { Order, PaginatedOrderResult } from '@cxcloud/ct-types/orders';
import { generateOrderNumber } from '../utils/random';

interface ICreateOrder {
  cartId: string;
  cartVersion: number;
}

@Path('/orders')
export class OrdersController {
  @Context ctx: ServiceContext;

  @Tags('orders')
  @Security('token')
  @POST
  async createOrder(body: ICreateOrder): Promise<Order> {
    const { cartId, cartVersion } = body;
    return Orders.create(
      cartId,
      cartVersion,
      await generateOrderNumber(),
      this.ctx.response.locals.authToken
    );
  }

  @Tags('orders')
  @Security('token')
  @GET
  getOrders(): Promise<PaginatedOrderResult> {
    return Orders.fetchAll(this.ctx.response.locals.authToken);
  }

  @Path('/:id')
  @Tags('orders')
  @Security('token')
  @GET
  getOrderById(@PathParam('id') orderId: string): Promise<Order> {
    return Orders.findById(orderId, this.ctx.response.locals.authToken);
  }
}
