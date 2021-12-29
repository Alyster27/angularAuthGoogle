import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _afAuth: AngularFireAuth
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      const user = await this._afAuth.currentUser;
      const isAuthenticated = user ? true : false;
      if (!isAuthenticated) {
        alert('You must be authenticated in order to acces this page');
      }
      return isAuthenticated;
  }
  
}
