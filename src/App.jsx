import { useState } from "react";
//state
export default function Home(){

 const [name, setName] = useState("")
 
 function handleSubmit(name){
 if(!name.trim()) return alert("Veuillez entrer votre nom...BATARD!!");   
  alert(`Bonjour ${name}!`)
    setName("")
  }
  

//affichage
return (
  <div><h1>Bienvenue chez nous</h1>
  <h2>CONNECRZ-VOUS</h2>
  <form onSubmit={(e) => {e.preventDefault();
    handleSubmit(name);}
  }>
    <input 
     type="text"
     placeholder="Entrer votre nom"
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
    <button >Accéder à mon espace </button>
  </form>
  </div>

)
}