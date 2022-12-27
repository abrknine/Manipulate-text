import React from 'react'

export default function alert(props) {
 const capitalize= (word) =>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase()+ lower.slice(1);
 }
  return (
         <div style={{height:'50px'}}>
          {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong> {capitalize(props.alert.type)}</strong> :{props.alert.msg}
    
      </div>}
      </div>
      // this is && thing is very common practice code first checks ki
      // props ke alert me kuch hai ki nhi agar yehi null ho gaya so code
      // didnt run if this is not null only then second is going to check
  )
}
