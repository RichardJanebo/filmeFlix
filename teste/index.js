


  const txt = document.querySelector("#txt").value
  const btn =document.querySelector("#btn")

  btn.addEventListener("click",()=>{
    const post = {
        nome: txt,
    }
  
    firebase.firestore().collection("users").add(
        post
    )
  })