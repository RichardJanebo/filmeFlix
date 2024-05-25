async function loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    return provider
}



const actionLoginGoogle = async ()=>{
    let provider = await loginGoogle()
  
    

    if(provider){
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          
          
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }else{
        alert("Não conseguimos localizar suas contas")
    }
}




const btn_google = document.querySelector("#btn_google")
btn_google.addEventListener("click",()=>{
    actionLoginGoogle()
})