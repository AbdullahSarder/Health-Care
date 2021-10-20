import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initilizeAuthintacation=()=>{
    initializeApp(firebaseConfig);
}
export default initilizeAuthintacation;