import { useEffect, useState } from "react"
import { getAuth, getRedirectResult, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut  } from "firebase/auth";

const useFirebase = () =>{
     const[user,setUser] = useState({

     });
     const auth=getAuth();
     const googleProvider =new GoogleAuthProvider();
     const signInusingGoogle =() =>{
         signInWithPopup(auth,googleProvider)
         .then(
             result =>{
                 console.log(result.user)
             }
         )
     }
    const logout =()=>{
        signOut(auth)
        .then(()=>{

        })
    }
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser (user);
            } else {

            }
          });
          
     },[])

     return{
         user,
         signInusingGoogle,
         signOut
     }
}
export default useFirebase;