import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage } from 'ionic-angular'
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service'

@IonicPage()
@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {
   searchText:string
   dataEventos:any=[]

   constructor(
      public navCtrl: NavController,
      private appSrv: ApplicationService,
      private socialSharing: SocialSharing
   ) {
      console.log('HomePage contructor')
   }

   ngOnInit() {
      console.log('HomePage init')
   }
   ngOnDestroy() {
      console.log('HomePage destroy')
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
}
