import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as moment from 'moment'

admin.initializeApp(functions.config().firebase)

export const onEvents = functions.firestore.document('events/{evtId}').onWrite((event) => {
   // Se a creado o modificado un evento
   // Tomo los miembros del evento y recorro uno por uno
   // Tiene como evento este evtID?
   // Si => no hago nada
   // NO => lo agrego a la coleccion de events de cada usuario miembro
   const evt = event.after.data()

   evt.members.forEach(member => {
      return admin.firestore().collection("users").doc(member.id).get()
      .then(dss => {
         const usr = dss.get('events')
         const idx = usr.events.indexOf(evt.id)
         if (idx == -1)
            usr.events.push(evt.id)
         return admin.firestore().collection("users").doc(member.id).set(usr)
      })      
   });
})