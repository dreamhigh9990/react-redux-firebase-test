import firebase from "../config/firebase";
import Cookies from 'universal-cookie';
import { ADD_USER } from "./types";

export const addUser = (newUser) => {
    return async (dispatch, getState) => {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const cookies = new Cookies();
        let userdata = cookies.get('user');
        let doc
        if (userdata === undefined) {
            doc = db.collection("users").doc()
        } else {
            doc = db.collection("users").doc(userdata.docId)
        }
        doc.set(newUser).then(() => {
            let userdocId = doc.id
            const cookies = new Cookies();
            let user = {}
            user['docId'] = userdocId
            user = {...user, newUser}
            cookies.set('user', user);
        });
        console.log(`user added successfully, ${JSON.stringify(newUser)}`)
        dispatch({
            type: ADD_USER,
            payload: newUser
        })
    }
}