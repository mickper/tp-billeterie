import {LoginComponent} from "./login/login.component";
import {SignedGuard} from "./login/shared/guards/signed.service";
import {HOME_ROUTES} from "./home/home.routes";

export const
  APP_ROUTES = [
    {
      component: LoginComponent,
      path: 'login'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      canActivate: [SignedGuard]
    },
    {
      redirectTo: '/login',
      path: '**'
    },
  ];
