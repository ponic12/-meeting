import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage, NavParams, ActionSheetController } from 'ionic-angular'
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service'
import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';

@IonicPage()
@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {
   title: string = "Meeting Master"
   userInfo: any
   photoPath: string
   today: number = new Date().getTime()
   searchText: string
   field: string = 'creationDate'
   dataEventos: any = [
      { creationDate: 1526296836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Consorcio Besares 3950', description: 'Reunion de consorcio para definir tareas' },
      { creationDate: 1524295836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Cumple Gallo', description: 'Fiesta sorpresa' },
      { creationDate: 1522294836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Vacaciones invierno 2018', description: 'Rango de fechas de vacas' },
      { creationDate: 1521293836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Viaje Espana 2018', description: 'Reunion de integrantes' },
      { creationDate: 1520292836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Reunion Siemens', description: 'Ex trabajadores de Siemens' }
   ]

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private actionCtrl: ActionSheetController,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private authSrv: AuthService,
      private socialSharing: SocialSharing
   ) {
      console.log('HomePage contructor')

      let ph = this.navParams.get('photoURL')
      if (ph)
         this.photoPath = ph
      else
         this.photoPath = "assets/imgs/person.png"
   }

   ngOnInit() {
      console.log('HomePage init')

   }
   ngOnDestroy() {
      console.log('HomePage destroy')
   }

   addEvent() {
      const ev = { name: this.searchText }
      this.navCtrl.push('EventPage', { evt: ev })
   }
   removeEvent(ev, i) {

   }
   showEvent(ev, i) {
      this.navCtrl.push('EventPage', { evt: ev })
   }
   share() {
      this.socialSharing.canShareVia('Whatsapp').then(() => {
         this.socialSharing.shareViaWhatsApp('Invitacion a evento!', 'http://www.clarin.com').then(() => {
            this.appSrv.message('Aviso', 'Se ha enviado notificacion a evento!')
         }).catch(() => {
            this.appSrv.message('Error', 'No posee Whatsapp')
         })
      })

      // this.socialSharing.canShareViaEmail().then(() => {
      //    // Sharing via email is possible
      // }).catch(() => {
      //    // Sharing via email is not possible
      // });

      // // Share via email
      // this.socialSharing..shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      //    // Success!
      // }).catch(() => {
      //    // Error!
      // });
   }
   openMenuSheet() {
      let actionSheet = this.actionCtrl.create({
         title: 'Opciones',
         cssClass: 'action-sheets-basic-page',
         buttons: [
            {
               text: 'Salir',
               handler: () => {
                  console.log('Logout!!!');
                  this.logout();
               }
            }, {
               text: 'Cancelar',
               role: 'cancel',
               handler: () => {
                  console.log('Cancel clicked');
               }
            }
         ]
      });
      actionSheet.present();
   }
   private logout() {
      this.appSrv.message('Aviso', 'Saliendo...');
      this.globalSrv.save('user', null);
      this.authSrv.signOutUser();
      this.navCtrl.setRoot('LoginPage');
   }
}
