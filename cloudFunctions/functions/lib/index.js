"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.onEvents = functions.firestore.document('events/{evtId}').onWrite((event) => {
    // Se a creado o modificado un evento
    // Tomo los miembros del evento y recorro uno por uno
    // Tiene como evento este evtID?
    // Si => no hago nada
    // NO => lo agrego a la coleccion de events de cada usuario miembro
    const evt = event.after.data();
    evt.members.forEach(member => {
        return admin.firestore().collection("users").doc(member.id).get()
            .then(dss => {
            let usr = dss.get('events');
            let idx = usr.events.indexOf(evt.id);
            if (idx == -1)
                usr.events.push(evt.id);
            return admin.firestore().collection("users").doc(member.id).set(usr);
        });
    });
});
//# sourceMappingURL=index.js.map