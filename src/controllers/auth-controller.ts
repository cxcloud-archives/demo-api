import { POST, Path, Context, ServiceContext } from 'typescript-rest';
import { Tags, Security } from 'typescript-rest-swagger';
import { Customers } from '@cxcloud/core/dist/commerce';
import {
  TokenizedSignInResult,
  CustomerSignupDraft,
  AnonymousSignInResult
} from '@cxcloud/ct-types/customers';

interface ILogin {
  username: string;
  password: string;
}

@Path('/auth')
export class AuthController {
  @Context ctx: ServiceContext;

  @Path('/login')
  @Tags('auth')
  @Security('token')
  @POST
  loginUser(body: ILogin): Promise<TokenizedSignInResult> {
    const { username, password } = body;
    return Customers.login(
      username,
      password,
      this.ctx.response.locals.authToken
    );
  }

  @Path('/register')
  @Tags('auth')
  @Security('token')
  @POST
  registerUser(body: CustomerSignupDraft): Promise<TokenizedSignInResult> {
    return Customers.register(body, this.ctx.response.locals.authToken);
  }

  @Path('/login/anonymous')
  @Tags('auth')
  @POST
  loginAnonymous(): Promise<AnonymousSignInResult> {
    return Customers.loginAnonymously();
  }
}
