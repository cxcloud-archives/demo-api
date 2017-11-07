import { GET, Path } from 'typescript-rest';
import { Categories } from '@cxcloud/facade/dist/commerce';
import { Category } from '@cxcloud/facade/dist/sdk/types/categories';

@Path('/categories')
export class CategoriesController {
  @GET
  getCategories(): Promise<Category[]> {
    return Categories.fetchAll();
  }
}
