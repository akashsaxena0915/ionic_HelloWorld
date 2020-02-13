import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  /**private veribale for login details */
  public userLoginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder
  ) {
    this.initlogInUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  /** initilizing Form */
  private initlogInUser(): void {
    this.userLoginForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    console.log(this.userLoginForm);
  }
}
