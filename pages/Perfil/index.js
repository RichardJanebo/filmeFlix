const getPerfis = firebase.firestore().collection("users")
const usuId = firebase.auth()
const profilesList = document.querySelector("#profilesList")
const btn_gerenciar = document.querySelector("#btn_gerenciar")
const container = document.querySelector(".container")
const profileName = document.querySelector("#profileName")




btn_gerenciar.addEventListener("click", () => {

  if (container.style.display == "none") {
    container.style.display = "block"
  } else {
    container.style.display = "none"
  }

})

document.getElementById('profileForm').addEventListener('submit', (e) => {
  e.preventDefault()
  setame(profileName.value)


});
document.querySelector("#delete_btn").addEventListener("click",()=>{
  removeName(profileName.value)

})


const loadPerfis = async () => {
  const n_id = await usuId._delegate.currentUser.email
  console.log(n_id)

  getPerfis.get()
    .then((response) => {
      response.forEach((el) => {
        if (el.data().email == n_id) {
          addPerfis(el.data().perfil)
          console.log("quantidade de perfil"+ el.data().perfil.length)
        }

      })
    })

}


const removeName = async(p)=>{
  const n_id = await usuId._delegate.currentUser.email
  console.log(getPerfis)
  getPerfis.get()
    .then((response) => {
      response.forEach((el) => {
        if (el.data().email == n_id) {
          const db = firebase.firestore()
          db.collection("users").doc(el.id).update({perfil: firebase.firestore.FieldValue.arrayRemove(p)})
          .then(()=>{
            console.log("Documento atualizado")
            loadPerfis()
          })
          .catch(()=>{
            console.log("Documento não atualizado ")
          })
        

        }

      })
    })
}

const setame = async (p) => {
  const n_id = await usuId._delegate.currentUser.email
  console.log(getPerfis)
  getPerfis.get()
    .then((response) => {
      response.forEach((el) => {
        if (el.data().email == n_id) {
          const db = firebase.firestore()
          db.collection("users").doc(el.id).update({perfil: firebase.firestore.FieldValue.arrayUnion(p)})
          .then(()=>{
            console.log("Documento atualizado")
            loadPerfis()
          })
          .catch(()=>{
            console.log("Documento não atualizado ")
          })
        

        }

      })
    })


    
}





const addPerfis = (p) => {
  console.log(p[1])
  profilesList.innerHTML=""
  console.log(p.length)
  let indice = 0
  while (indice < p.length ) {
    const perfil = document.createElement("div")
    perfil.setAttribute("class", "perfil")
    perfil.innerHTML = p[indice]
    profilesList.appendChild(perfil)
    indice++
  }



}




window.addEventListener("load", () => {
  setTimeout(loadPerfis, 2000)

})





