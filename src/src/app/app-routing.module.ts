import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './menu/main/main.component';
import {LoginComponent} from '@pages/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@pages/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth-guard/auth.guard';
import {NonAuthGuard} from '@guards/no-auth-guard/non-auth.guard';
import {MyAuthGuard} from '@guards/my-auth-guard/my-auth.guard';
import {ForgotPasswordComponent} from '@pages/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@pages/recover-password/recover-password.component';
import { BasicDetailsFormComponent } from './employee-management/onboard/basic-details-form/basic-details-form.component';
import { SystemAccessFormComponent } from './employee-management/onboard/system-access-form/system-access-form.component';
import { OnboardFormsTabComponent } from './employee-management/onboard/onboard-forms-tab/onboard-forms-tab.component';
import { OtherSupportFormComponent } from './employee-management/onboard/other-support-form/other-support-form.component';
import { ApplicationUserAccessFormComponent } from './employee-management/onboard/application-user-access-form/application-user-access-form.component';
import { MainLayoutComponent } from './user-management/main-layout/main-layout.component';
import { ApplicationComponent } from './user-management/application/application.component';
import { RoleComponent } from './user-management/role/role.component';
import { MainComponentComponent } from './user-management/main-component/main-component.component';
import { SubComponentComponent } from './user-management/sub-component/sub-component.component';
import { UserComponent } from './user-management/user/user.component';
import { RoleHasSubComponentComponent } from './user-management/role-has-sub-component/role-has-sub-component.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [MyAuthGuard],
        canActivateChild: [MyAuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'basic-details-form',
                component: BasicDetailsFormComponent
            },
            {
                path: 'system-access-form',
                component: SystemAccessFormComponent
            },
            {
                path: 'application-user-access-form',
                component: ApplicationUserAccessFormComponent
            },
            {
                path: 'other-support-form',
                component: OtherSupportFormComponent
            },
            {
                path: 'onboard-forms-tab',
                component: OnboardFormsTabComponent
            },
            {
                path: 'users',
                component: UserComponent
            },
            {
                path: 'user-applications',
                component: ApplicationComponent
            },
            {
                path: 'user-roles',
                component: RoleComponent
            },
            {
                path: 'main-components',
                component: MainComponentComponent
            },
            {
                path: 'sub-components',
                component: SubComponentComponent
            },
            {
                path: 'assign-sub-components',
                component: RoleHasSubComponentComponent
            },
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
