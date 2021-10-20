import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut  } from "firebase/auth";
import initilizeAuthintacation from "../Components/firebase/firebase.init";
initilizeAuthintacation();
const useFirebase = () =>{
     const[user,setUser] = useState({

     });
     const auth=getAuth();
     const googleProvider =new GoogleAuthProvider();
     const signInusingGoogle =() =>{
         signInWithPopup(auth,googleProvider)
         .then(
             result =>{
                 console.log(result.user);
             })
     }
    const logOut =()=>{
        signOut(auth)
         .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
          
    }
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser (user);
            }
          });
          
     },[])

     return{
         user,
         signInusingGoogle,
         logOut
     }
}
export default useFirebase;