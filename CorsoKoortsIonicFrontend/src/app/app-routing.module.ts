import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/general/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'account',
    loadChildren: () => import('./pages/general/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'follow-list',
    loadChildren: () => import('./pages/general/follow-list/follow-list.module').then( m => m.FollowListPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/general/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/general/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/general/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'society/:id/account-detail',
    loadChildren: () => import('./pages/society/society-account-detail/society-account-detail.module').then( m => m.SocietyAccountDetailPageModule)
  },
  {
    path: 'society/:id/article-detail/:id',
    loadChildren: () => import('./pages/society/society-article-detail/society-article-detail.module').then( m => m.SocietyArticleDetailPageModule)
  },
  {
    path: 'society/:id/article-manage',
    loadChildren: () => import('./pages/society/society-article-manage/society-article-manage.module').then( m => m.SocietyArticleManagePageModule)
  },
  {
    path: 'society/:id/member-list',
    loadChildren: () => import('./pages/society/society-member-list/society-member-list.module').then( m => m.SocietyMemberListPageModule)
  },
  {
    path: 'society/:id/member-request-list',
    loadChildren: () => import('./pages/society/society-member-request-list/society-member-request-list.module').then( m => m.SocietyMemberRequestListPageModule)
  },
  {
    path: 'society/:id/tab-detail/:id',
    loadChildren: () => import('./pages/society/society-tab-detail/society-tab-detail.module').then( m => m.SocietyTabDetailPageModule)
  },
  {
    path: 'society/:id/tab-manage/:id',
    loadChildren: () => import('./pages/society/society-tab-manage/society-tab-manage.module').then( m => m.SocietyTabManagePageModule)
  },
  {
    path: 'society/:id/detail',
    loadChildren: () => import('./pages/society/society-detail/society-detail.module').then( m => m.SocietyDetailPageModule)
  },
  {
    path: 'society/:id/home',
    loadChildren: () => import('./pages/society/society-home/society-home.module').then( m => m.SocietyHomePageModule)
  },
  {
    path: 'society/:id/tab/:tab_id',
    loadChildren: () => import('./pages/society/society-tab/society-tab.module').then( m => m.SocietyTabPageModule)
  },
  {
    path: 'corsos',
    loadChildren: () => import('./pages/society/corsos/corsos.module').then( m => m.CorsosPageModule)
  },
  {
    path: 'buurtschappen',
    loadChildren: () => import('./pages/society/buurtschappen/buurtschappen.module').then( m => m.BuurtschappenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
