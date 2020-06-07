import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalkComponent } from './talk/talk.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PrivatechatComponent } from './privatechat/privatechat.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'talk',component:TalkComponent},
  {path:'privatechat',component:PrivatechatComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }