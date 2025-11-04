import React,{useState} from 'react'

export default function Textfrom(props) {
    const [text, setText] = useState("");
    
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showalert("Converted to Uppercase","success");
    }  
    const handleOnChange = (event)=>{ 
        setText(event.target.value);
        
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
        props.showalert("Converted to Lowercase","success");
    }
    const handleSizeupClick = ()=>{
       const element = document.getElementById("myText");
       const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
       element.style.fontSize = (currentSize + 1) + "px";
       props.showalert("Text Size Increased","success");
    } 
     const handleSizedwnClick = ()=>{
       const element = document.getElementById("myText");
       const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
       element.style.fontSize = (currentSize -  1) + "px";
       props.showalert("Text Size decreased","warning");
    } 
  return (
    <>
    <div className="container" style={{color:props.textColor}}><h1>{props.heading}</h1>
    <div className="mb3">
    <textarea className="form-control"  id="myText" value={text} style={{backgroundColor:props.backgroundColor.page,color:props.textColor}} onChange={handleOnChange} rows="3"> </textarea>
    </div>
    <button onClick={handleUpClick} className={`btn btn-${props.backgroundColor.btns} my-2 mx-3`}>Convert to uppercase</button>
    <button onClick={handleLowClick} className={`btn btn-${props.backgroundColor.btns} my-2 mx-3`}>Convert to lowercase</button>
    <button onClick={handleSizeupClick} className={`btn btn-${props.backgroundColor.btns}  my-2 mx-3`}> Increase Font Size</button>
    <button onClick={handleSizedwnClick} className={`btn btn-${props.backgroundColor.btns}  my-2 mx-3`}> Decrease Font Size</button>
    </div> 
    <div className="container my-3" style={{color:props.textColor}}>
      <h2>Text Summary </h2>
      <p>{text.length} characters {text.trim().split(/\s+/).filter(word => word !== "").length} words</p>
      <p>{text.trim().split(/\s+/).filter(word => word !== "").length * .008} Minutes Read</p>
      <h2>Preview</h2>
      <class className="container"><p>{text.length>0?text:"Enter Something on the text-box above to preview text here. "}</p></class>
     
    </div> 
    
    
    </>
  )
}
