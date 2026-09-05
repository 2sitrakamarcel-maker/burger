import React, { useState } from 'react'
import { Link } from 'react-router-dom';

 


const Logincomp = () => {




    const [name, setName] = useState("bob") 
 
 function handleSubmit(name, e){
    e.preventDefault();
 if(!name.trim()) return alert("Veuillez entrer votre nom...BATARD!!");   
  alert(`Bonjour ${name}!`)
    setName("")
  }
  const handleCHange = (e) => { setName(e.target.value) }




  return (
    <div><form action="submit" onSubmit={(e) => handleSubmit(name, e)}>
   
      <h1>Bienvenue chez nous</h1>
    <h2>CONNECRZ-VOUS</h2>
      <input
       type="text"
       placeholder="Entrer votre nom"
       value={name}
       onChange={handleCHange}
       required
      />
      <button >Accéder à mon espace </button>

      <Link to="/order">Accéder à mon espace</Link>
    

    </form></div>
  )
}

export default Logincomp