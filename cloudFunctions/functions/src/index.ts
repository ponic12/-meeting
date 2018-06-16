import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
//import * as moment from 'moment'

admin.initializeApp(functions.config().firebase)

// export const onEvents = functions.firestore.document('events/{evtId}').onWrite((event) => {
//    // Se a creado o modificado un evento
//    // Tomo los miembros del evento y recorro uno por uno
//    // En cada miembro recorro todos sus contactos para ver si estan todos los miembros
//    // si no esta alguno, lo agrego a sus contactos, sino no hago nada
//    const proms = [];
//    const evt = event.after.data()
//    const memKeys = Object.keys(evt.members)
//    memKeys.forEach(mkey => {
//       const uProm = admin.firestore().collection("users").doc(mkey).get()
//          .then(dss => {
//             const usr = dss.data()
//             let ctKeys: string[] = []
//             if (usr.contacts)
//                ctKeys = Object.keys(usr.contacts)

//             const mergeKeys = ctKeys.concat(memKeys.filter(function (item) {
//                return ctKeys.indexOf(item) < 0;
//             }));
//             const cts = {}
//             mergeKeys.forEach(key => {
//                cts[key] = true
//             })
//             usr.contacts = cts
//             return admin.firestore().collection("users").doc(mkey).set(usr)
//          })
//       proms.push(uProm)
//    });
//    return Promise.all(proms)
// })

export const notifyMember = functions.https.onRequest((request, response) => {
   const idEvt = request.params('idevt')
   const idUsr = request.params('idusr')

   admin.firestore().collection("events").doc(idEvt).get()
      .then(dsse => {
         const evt = dsse.data()
         admin.firestore().collection("users").doc(idUsr).get()
            .then(dssu => {
               const usr = dssu.data()

               // Agrega el nuevo user a los miembros del evento
               evt.members[usr.uid] = true
               admin.firestore().collection('events').doc(idEvt).set(evt)
                  .then(dssm => {
                     // Notifica a Owner del nuevo miembro registrado
                     const payload = {
                        notification: {
                           title: 'Miembro Registrado: ' + usr.displayName,
                           body: 'Evento: ' + evt.name
                        },
                        data: {
                        }
                     };
                     admin.messaging().sendToTopic(idEvt, payload)
                        .then(m => {
                           response.send(true)
                        })
                        .catch(err => {
                           console.log('Error Members: ', err)
                           response.status(500).send(err)
                        })
                  })
                  .catch(err => {
                     console.log('Error Members: ', err)
                     response.status(500).send(err)
                  })
            })
            .catch(err => {
               console.log('Error Users: ', err)
               response.status(500).send(err)
            })
      })
      .catch(err => {
         console.log('Error Events: ', err)
         response.status(500).send(err)
      })
})
