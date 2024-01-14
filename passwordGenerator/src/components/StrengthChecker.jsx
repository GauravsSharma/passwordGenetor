import React, { useEffect, useState } from 'react'

const StrengthChecker = ({password}) => {
    const [strength,setStrength] = useState("");
  const checkStrength = ()=>{
      if(password.length<4){
        setStrength("week")
    }
    else if(password.length<8){
        setStrength("medium")
    }
    else if(password.length<12){
        setStrength("strong")
    }
    else{
        setStrength("very strong")
    }
  }
  useEffect(()=>{
    checkStrength();
  },[password])
  return (
    <div className='strength'>
       <p>Strength:</p> 
       <p>{strength}</p>
    </div>
  )
}

export default StrengthChecker