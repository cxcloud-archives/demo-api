import { GET, Path, PathParam } from 'typescript-rest';
import { Categories } from '@cxcloud/facade/dist/commerce';
import { Category } from '@cxcloud/facade/dist/sdk/types/categories';

@Path('/categories')
export class CategoriesController {
  @GET
  getProduct(@PathParam('id') id: string): Promise<Category[]> {
    return Categories.fetchAll();
  }
}
