import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

 


const Logincomp = ({zetmessage}) => {
    const navigate = useNavigate()





    const [inputValue, setInputValue] = useState("") 
 
 function handleSubmit(name, e){
    e.preventDefault();
 if(!name.trim()) return alert("Veuillez entrer votre nom...BATARD!!");   
    setInputValue("")
    zetmessage(name)
    navigate(`/order/${inputValue}`)

  }
  const handleCHange = (e) => { setInputValue(e.target.value) }




  return (
    <div><form action="submit" onSubmit={(e) => handleSubmit(inputValue, e)}>
   
      <h1>Bienvenue chez nous</h1>
    <h2>CONNECRZ-VOUS</h2>
      <input
       type="text"
       placeholder="Entrer votre nom"
       value={inputValue}
       onChange={handleCHange}
       required
      />
      <button >Accéder à mon espace </button> 
    

    </form></div>
  )
}

export default Logincomp