import { GET, Path } from 'typescript-rest';
import { Tags } from 'typescript-rest-swagger';
import { Categories } from '@cxcloud/facade/dist/commerce';
import { Category } from '@cxcloud/facade/dist/sdk/types/categories';

@Path('/categories')
export class CategoriesController {
  @Tags('products', 'categories')
  @GET
  getCategories(): Promise<Category[]> {
    return Categories.fetchAll();
  }
}
