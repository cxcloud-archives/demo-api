import { GET, Path, PathParam } from 'typescript-rest';
import { Products } from '@cxcloud/facade/dist/commerce';
import {
  Product,
  PaginatedProductResult
} from '@cxcloud/facade/dist/sdk/types/products';

@Path('/products')
export class ProductsController {
  @Path(':id')
  @GET
  getProduct(@PathParam('id') id: string): Promise<Product> {
    return Products.findById(id);
  }

  @Path('/byCategory/:categoryId')
  @GET
  getProductsByCategory(
    @PathParam('categoryId') categoryId: string
  ): Promise<PaginatedProductResult> {
    return Products.findByCategoryId(categoryId);
  }
}
