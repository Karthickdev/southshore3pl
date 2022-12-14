import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl: string = 'http://67.79.237.242/opal/uat/Southshore3PLScanAppApi/'; //UAT
  //baseUrl: string = 'https://www2.order-fulfillment.bz/vanityart/'; //NEW PROD
  //Login
  userLogin: string = "users/VerifyAndGetUserDetails";
  singleitempickapp: string = "orders/GetPickOrderItemDetails";
  updateOrder: string = "orders/UpdateScanDetails";
  singleItemPackApp: string = "orders/GetSingleItemPackOrderDetails";
  multiItemPackApp: string = "orders/GetMultiItemPackOrderDetails";
  isLoading: any;
  ajaxData: any;
  err: any;
  packAppDetail: any;
  network: any;
  constructor(public http: HttpClient,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alert: AlertController) { }

  async PresentToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: 3000,
      position: 'bottom',
      keyboardClose: false,
      cssClass: "toast",
    });
    toast.present();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      // duration: 3000,
      message: 'Please wait...',
      spinner: 'lines',
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  }

  // ajaxCallService(dataUrl, dataType, dataParam) {
  //   let headers = new HttpHeaders();
  //   headers.append('Access-Control-Allow-Methods', 'POST, GET ,OPTIONS');
  //   headers.append('Access-Control-Allow-Headers', 'application/json');
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   headers.append('Content-Type', 'application/json');
  //   switch (dataType) {
  //     case 'get': return new Promise(resolve => {  //get return type	
  //       this.http.get(dataUrl)
  //         .subscribe(data => {
  //           this.ajaxData = data;
  //           resolve(this.ajaxData);
  //         }, (err) => {
  //           this.err = err.error;
  //           this.PresentToast('Unable to reach server, Please try again', 'danger');
  //           resolve(this.err);

  //         });
  //     });
  //     case 'post': return new Promise(resolve => {	//post return type
  //       // this.presentLoading();
  //       console.log('test');
  //       this.http.post(dataUrl, dataParam, { headers: headers })
  //         .subscribe(data => {
  //           this.ajaxData = data;
  //           resolve(this.ajaxData);
  //         }, (err) => {
  //           if (err) {
  //             this.PresentToast('Unable to reach server, Please try again', 'danger');
  //             resolve(this.err);
  //           } else {
  //             this.PresentToast('Unable to reach server, Please try again', 'danger');
  //           }
  //         });
  //     });
  //   }
  // }

  requestServer(url, method, data) {
    switch (method) {
      case "post":
        return this.http.post(url, data, {});
      case "get":
        return this.http.post(url, data, {});
    }
  }

  //Method to present alert fro App update
  async presentAlert() {
    const alert = await this.alert.create({
      header: "App Update",
      message: "A new version available for the app, Kindly update to the latest version!",
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah', blah);
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }
}
