async function loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    return provider
}



const actionLoginFacebook = async ()=>{
    let provider = await loginFacebook()
  
    

    if(provider){
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
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




const btn_facebook = document.querySelector("#btn_facebook")
btn_facebook.addEventListener("click",()=>{
    actionLoginFacebook()
})