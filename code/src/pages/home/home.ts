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
   today:number = new Date().getTime()
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

   addEvent(){
      const ev = {name:this.searchText}
      this.navCtrl.push('EventPage', {evt:ev})
   }
   removeEvent(ev, i){

   }
   showEvent(ev, i){
      this.navCtrl.push('EventPage', {evt:ev})
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
