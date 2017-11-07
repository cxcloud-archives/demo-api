import { GET, Path } from 'typescript-rest';
import { Tags } from 'typescript-rest-swagger';
import { Shipping } from '@cxcloud/facade/dist/commerce';
import { ShippingMethod } from '@cxcloud/facade/dist/sdk/types/shipping';

@Path('/shipping')
export class ShippingController {
  @Path('/methods')
  @Tags('shipping')
  @GET
  getShippingMethods(): Promise<ShippingMethod[]> {
    return Shipping.fetchMethods();
  }
}
