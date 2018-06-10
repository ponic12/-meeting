"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
//import * as moment from 'moment'
admin.initializeApp(functions.config().firebase);
exports.onEvents = functions.firestore.document('events/{evtId}').onWrite((event) => {
    // Se a creado o modificado un evento
    // Tomo los miembros del evento y recorro uno por uno
    // En cada miembro recorro todos sus contactos para ver si estan todos los miembros
    // si no esta alguno, lo agrego a sus contactos, sino no hago nada
    const proms = [];
    const evt = event.after.data();
    const memKeys = Object.keys(evt.members);
    memKeys.forEach(mkey => {
        const uProm = admin.firestore().collection("users").doc(mkey).get()
            .then(dss => {
            const usr = dss.data();
            let ctKeys = [];
            if (usr.contacts)
                ctKeys = Object.keys(usr.contacts);
            const mergeKeys = ctKeys.concat(memKeys.filter(function (item) {
                return ctKeys.indexOf(item) < 0;
            }));
            const cts = {};
            mergeKeys.forEach(key => {
                cts[key] = true;
            });
            usr.contacts = cts;
            return admin.firestore().collection("users").doc(mkey).set(usr);
        });
        proms.push(uProm);
    });
    return Promise.all(proms);
});
//# sourceMappingURL=index.js.map