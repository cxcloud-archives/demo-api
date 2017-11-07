import { GET, Path, PathParam } from 'typescript-rest';
import { Products } from '@cxcloud/facade/dist/commerce';
import { Product } from '@cxcloud/facade/dist/sdk/types/products';

/**
 * This is a demo operation to show how to use typescript-rest library.
 */
@Path('/products')
export class ProductsController {
  /**
     * Send a greeting message.
     * @param name The name that will receive our greeting message
     */
  @Path(':id')
  @GET
  async getProduct(@PathParam('id') id: string): Promise<Product> {
    return await Products.findById(id);
  }
}
