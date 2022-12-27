import React,{useState } from 'react'
import copy from "copy-to-clipboard";
export default function Textform(props) {

  const handleUpClick = () => {
    // console.log("uppercase was clicked"+ " " + text);
    let newText=text.toUpperCase();
    setText(newText);     
    props.showalert("converted to uppercase","success")
  }
  const handleLoClick = () =>{
    let newText=text.toLowerCase();
    setText(newText);  
    props.showalert("converted to lowercase","success")
  }
  const handleOnChange=(event)=>{
      //  console.log("onclick");
       setText(event.target.value); 
  }
  const handleclearClick=()=>{
      let newtext="";
      setText(newtext);
  }
  
 const copyToClipboard = () => {
        copy(text);
        alert(`You have copied "${text}"`);
  }  
  const handleSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
  }

  // const makeTextFile = () => {
  
  //   const data = new Blob([list.join('\n')], { type: 'text/plain' })


  //   if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)

  //   // update the download link state
  //   setDownloadLink(window.URL.createObjectURL(data))

  // }
  // useEffect(() => {
  //   makeTextFile()
  // }, [list])

  const [text,setText]=useState(''); // inside useState it can be string,array,object etc
  // text="newtext"; wrong way to change state
  // setText("newtext"); correct way to change the state
  return (
    <>
    
    <div style={{color:props.mode ==='dark'?'white':'black'}} className='container my-5'>
       <h1  style={{}}>{props.heading}</h1>
  <div className="mb-3">
    <textarea name="" id="mybox" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode ==='dark'?'#3e6c89':'white', color:props.mode ==='dark'?'white':'black'  } }  rows="8" className="form-control"></textarea>
  </div>
  <button disabled={text.length===0} type="submit" class="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
  <button disabled={text.length===0}   type="submit" class="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
  <button disabled={text.length===0}   type="submit" class="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear</button>
  <button disabled={text.length===0}   type="submit" class="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy to Clipboard</button>
  <button disabled={text.length===0}   type="submit" class="btn btn-primary mx-1 my-1" onClick={handleSpaces}>RemoveSpaces</button>
  {/* <button type="submit" class="btn btn-primary mx-4" onClick={download='list.text'}>downloadLink</button> */}
      
    </div>
    <div className="contianer my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>Words {text.split(" ").filter((e)=>{return e.length!==0}).length}, Characters {text.length}</p>
    <p>Minute read {0.008*text.split("").filter((e)=>{return e.length!==0}).length}</p>
    <h2>Preview</h2>
    <p>{text.length>0 ?text:"Enter Something To Preview it here"}</p>
    </div>
    </>
  )
}
