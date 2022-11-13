"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5603],{8592:(S,g,o)=>{o.r(g),o.d(g,{SingleitemPickappPageModule:()=>P});var h=o(9808),c=o(4182),s=o(5056),u=o(1741),p=o(7556),e=o(2096);function d(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"ion-row",12)(2,"ion-col",13)(3,"ion-label"),e._uU(4,"Item Name"),e.qZA()(),e.TgZ(5,"ion-col",13)(6,"ion-label"),e._uU(7,"UPC"),e.qZA()(),e.TgZ(8,"ion-col",13)(9,"ion-label"),e._uU(10,"Qty Picked / Unpicked"),e.qZA()(),e.TgZ(11,"ion-col",13)(12,"ion-label"),e._uU(13,"UPC"),e.qZA()()(),e.TgZ(14,"ion-row",14)(15,"ion-col",13)(16,"ion-label"),e._uU(17),e.qZA()(),e.TgZ(18,"ion-col",13)(19,"ion-input",15),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.upc=a)})("keyup.enter",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.validateUpc())}),e.qZA()(),e.TgZ(20,"ion-col",13)(21,"ion-label"),e._uU(22),e.qZA()(),e.TgZ(23,"ion-col",13)(24,"ion-label"),e._uU(25),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(17),e.Oqu(t.itemDetails[0].itemName),e.xp6(2),e.Q6J("ngModel",t.upc),e.xp6(3),e.AsE("",t.itemDetails[0].unpicked," / ",t.itemDetails[0].quantity,""),e.xp6(3),e.Oqu(t.itemDetails[0].upc)}}const m=[{path:"",component:(()=>{class i{constructor(t,n){this.router=t,this.authService=n,this.itemDetails=[],this.eventLog=""}ngOnInit(){}getSingleItem(){let t={poBarCode:this.poNumber},n=this.authService.baseUrl+this.authService.singleitempickapp;this.authService.present(),this.authService.requestServer(n,"post",t).then(a=>{if(this.authService.dismiss(),this.scanDetail=JSON.parse(a.data),console.log(this.scanDetail),this.scanDetail.isPicked)this.authService.PresentToast("PO# "+this.poNumber+" is already picked","danger"),this.eventLog=this.eventLog+"\nPO# "+this.poNumber+" is already picked";else{this.itemDetails=this.scanDetail.orderItemList,console.log(this.itemDetails);for(let r of this.itemDetails)r.unpicked=0;this.authService.PresentToast("PO# "+this.poNumber+" is successfully scanned","success"),this.eventLog=this.eventLog+"\nPO# "+this.poNumber+" is successfully scanned"}},a=>{this.authService.dismiss(),this.authService.PresentToast("Unable to reach server","danger")})}validateUpc(){this.upc==this.itemDetails[0].upc?this.itemDetails[0].unpicked<=this.itemDetails[0].quantity||this.itemDetails[0].unpicked>this.itemDetails[0].quantity&&0!=this.itemDetails[0].quantity?(this.itemDetails[0].unpicked++,this.itemDetails[0].quantity--,this.authService.PresentToast("UPC: "+this.upc+" is successfully scanned","success"),this.eventLog=this.eventLog+"\nUPC: "+this.upc+" is successfully scanned",0==this.itemDetails[0].quantity&&(this.authService.PresentToast("All quantities are scanned","success"),this.eventLog=this.eventLog+"\nAll quantities are scanned",this.updateOrder())):(this.authService.PresentToast("All quantities are already scanned","danger"),this.eventLog=this.eventLog+"\nAll quantities are already scanned"):(this.authService.PresentToast("Please enter valid UPC","danger"),this.eventLog=this.eventLog+"\nPlease enter valid UPC")}updateOrder(){this.authService.present(),this.scanDetail.scanStatusEnum=30;for(let n of this.scanDetail.orderItemList)n.itemScanStatusEnum=30;let t=this.authService.baseUrl+this.authService.updateOrder;console.log(t),console.log(this.scanDetail),this.authService.requestServer(t,"post",this.scanDetail).then(n=>{this.authService.dismiss(),(n.scanStatusEnum="Picked")?(this.authService.PresentToast("Order successfully udpated","success"),this.eventLog=this.eventLog+"\nOrder successfully udpated",this.poNumber="",this.itemDetails=[]):(this.authService.PresentToast("Order is not updated","danger"),this.eventLog=this.eventLog+"\nOrder is not updated")},n=>{this.authService.dismiss(),this.authService.PresentToast("Unable to reach server","danger"),this.eventLog=this.eventLog+"\nUnable to reach server"})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.F0),e.Y36(p.O))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-singleitem-pickapp"]],decls:24,vars:4,consts:[["slot","start"],["name","arrow-back-outline",2,"font-size","25px"],[2,"--padding-end","15px"],["position","floating"],[3,"ngModel","ngModelChange","keyup.enter"],["style","margin: 10% 2% 0% 2%;",4,"ngIf"],[2,"--background","#ffff"],["size","12"],["position","stacked",1,"event-font","marginTL10"],[1,"ion-padding-horizontal"],["rows","3",1,"event-font-italic",3,"readonly","ngModel","ngModelChange"],[2,"margin","10% 2% 0% 2%"],[1,"itemDetails"],["size","3"],[1,"items"],[2,"border","1px solid grey","border-radius","5px",3,"ngModel","ngModelChange","keyup.enter"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"SINGLE ITEM ORDER SCAN"),e.qZA(),e.TgZ(4,"ion-buttons",0),e._UZ(5,"ion-icon",1),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-row")(8,"ion-col")(9,"ion-item",2)(10,"ion-label",3),e._uU(11,"PO#"),e.qZA(),e.TgZ(12,"ion-input",4),e.NdJ("ngModelChange",function(r){return n.poNumber=r})("keyup.enter",function(){return n.getSingleItem()}),e.qZA()()()(),e.YNc(13,d,26,5,"div",5),e.qZA(),e.TgZ(14,"ion-footer")(15,"ion-toolbar",6)(16,"ion-row")(17,"ion-col",7)(18,"ion-label",8),e._uU(19,"Event Log"),e.qZA()()(),e.TgZ(20,"ion-row")(21,"ion-col",7)(22,"ion-item",9)(23,"ion-textarea",10),e.NdJ("ngModelChange",function(r){return n.eventLog=r}),e.qZA()()()()()()),2&t&&(e.xp6(12),e.Q6J("ngModel",n.poNumber),e.xp6(1),e.Q6J("ngIf",n.itemDetails.length>0),e.xp6(10),e.Q6J("readonly",!0)("ngModel",n.eventLog))},dependencies:[h.O5,c.JJ,c.On,s.Sm,s.wI,s.W2,s.fr,s.Gu,s.gu,s.pK,s.Ie,s.Q$,s.Nd,s.g2,s.wd,s.sr,s.j9],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: #C3DBB7}.itemDetails[_ngcontent-%COMP%]{text-align:center;background-color:#c3dbb7;font-weight:700}.items[_ngcontent-%COMP%]{text-align:center;align-items:center;justify-content:center}.marginTL10[_ngcontent-%COMP%]{margin:2% 3%}"]}),i})()}];let v=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.Bz.forChild(m),u.Bz]}),i})(),P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.ez,c.u5,s.Pc,v]}),i})()}}]);