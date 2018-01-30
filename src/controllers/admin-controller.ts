import {
  GET,
  POST,
  DELETE,
  PUT,
  Path,
  PathParam,
  Context,
  ServiceContext
} from 'typescript-rest';
import { Tags, Security } from 'typescript-rest-swagger';
import { Orders, Customers, Users } from '@cxcloud/core/dist/commerce';
import { OAuthToken } from '@cxcloud/ct-types/customers';
import { UpdateAction } from '@cxcloud/ct-types/common';
import { PaginatedOrderResult, Order } from '@cxcloud/ct-types/orders';
import { ILogin } from 'src/controllers/auth-controller';

interface IEntityUpdate {
  actions: UpdateAction[];
}

@Path('/admin')
export class AdminController {
  @Path('/auth/login')
  @Tags('auth', 'admin')
  @POST
  loginAdmin(body: ILogin): Promise<OAuthToken> {
    const { username, password } = body;
    return Users.adminLogin(username, password);
  }
}

@Path('/admin/orders')
export class OrdersAdminController {
  @Context ctx: ServiceContext;

  @Tags('orders', 'admin')
  @Security('token')
  @GET
  getOrders(): Promise<PaginatedOrderResult> {
    return Orders.fetchAll(this.ctx.response.locals.authToken, true);
  }

  @Path('/:id')
  @Tags('orders', 'admin')
  @Security('token')
  @GET
  getOrderById(@PathParam('id') orderId: string): Promise<Order> {
    return Orders.findById(orderId, this.ctx.response.locals.authToken, true);
  }

  @Path('/:id/:version')
  @Tags('orders', 'admin')
  @Security('token')
  @PUT
  updateOrder(
    @PathParam('id') orderId: string,
    @PathParam('version') orderVersion: number,
    body: IEntityUpdate
  ): Promise<Order> {
    const { actions } = body;
    return Orders.update(
      orderId,
      orderVersion,
      actions,
      this.ctx.response.locals.authToken
    );
  }

  @Path('/:id/:version')
  @Tags('orders', 'admin')
  @Security('token')
  @DELETE
  deleteOrder(
    @PathParam('id') orderId: string,
    @PathParam('version') orderVersion: number
  ): Promise<Order> {
    return Orders.remove(
      orderId,
      orderVersion,
      this.ctx.response.locals.authToken
    );
  }
}
