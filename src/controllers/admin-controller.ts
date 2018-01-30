import { GET, POST, Path } from 'typescript-rest';
import { Tags, Security } from 'typescript-rest-swagger';
import { Orders, Customers, Users } from '@cxcloud/core/dist/commerce';
import { OAuthToken } from '@cxcloud/ct-types/customers';
import { ILogin } from 'src/controllers/auth-controller';

@Path('/admin')
export class AdminController {
  @Path('/login')
  @Tags('auth', 'admin')
  @Security('token')
  @POST
  loginUser(body: ILogin): Promise<OAuthToken> {
    const { username, password } = body;
    return Users.adminLogin(username, password);
  }
}
