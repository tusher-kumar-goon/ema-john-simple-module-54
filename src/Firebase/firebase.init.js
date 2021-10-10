import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initilizeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initilizeAuthentication;

/*steps for authentication
-------
initial setup
1firebase: create project
2,create web app
3.get configaration
4.initialize firebase
5.Enable auth method
*/