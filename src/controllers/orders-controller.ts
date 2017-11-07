import {
  POST,
  GET,
  Path,
  PathParam,
  Context,
  ServiceContext
} from 'typescript-rest';
import { Tags, Security } from 'typescript-rest-swagger';
import { Orders } from '@cxcloud/facade/dist/commerce';
import {
  Order,
  PaginatedOrderResult
} from '@cxcloud/facade/dist/sdk/types/orders';

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
  createOrder(body: ICreateOrder): Promise<Order> {
    const { cartId, cartVersion } = body;
    return Orders.create(
      cartId,
      cartVersion,
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
