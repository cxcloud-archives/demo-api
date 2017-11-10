import { GET, Path, PathParam } from 'typescript-rest';
import { Tags } from 'typescript-rest-swagger';
import { Products } from '@cxcloud/facade/dist/commerce';
import { Product, PaginatedProductResult } from '@cxcloud/ct-types/products';

@Path('/products')
export class ProductsController {
  @Path('/:id')
  @Tags('products')
  @GET
  getProduct(@PathParam('id') id: string): Promise<Product> {
    return Products.findById(id);
  }

  @Path('/byCategory/:categoryId')
  @Tags('products')
  @GET
  getProductsByCategory(
    @PathParam('categoryId') categoryId: string
  ): Promise<PaginatedProductResult> {
    return Products.findByCategoryId(categoryId);
  }
}
