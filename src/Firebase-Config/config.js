//npm i firebase
//created firebase directory with root folder
//nav to firebase.com
//create accout & created project named connections-group
//once project created, select ok and takes you back to main 
//now go over and select settings next to project overview
//Once on the project settings page, scroll to bottom. 
//the last container(your Apps)the container will say There are no apps in your project.
// will look like whats below
//(Your-App.png)//
//next youll see
//(Add-Fire.png)
//web nick name connectionsGroup
// click register app
//add fb code to App
//(AddFBcodeToApp.png)
//below is the code to paste to your Application
// the following code need to be hidden by envirement varibles dont publish without hiding  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  useAuth
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBnQJ5e_PdDGXw_doCp3dW-UnjlSu4wOds",
    authDomain: "connections-group.firebaseapp.com",
    projectId: "connections-group",
    storageBucket: "connections-group.appspot.com",
    messagingSenderId: "580383101801",
    appId: "1:580383101801:web:389585bbdc7f86ee8ea3f8",
    measurementId: "G-RTHPVT8VWK"
  };
//   now write this code 
 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
     
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,

  db,
  signInWithGoogle,
  logout,
};

//   Now go back to you firebase main screen and click on authentication
// click on sign in method
//then choose your perfered authentication route
//one you choose, click Eneable and save 
//now import 'firebase.auth' in imports at top of root file--line 23
// now pass your authentication in code below but remember we want to export this into many different files so make sure to export

