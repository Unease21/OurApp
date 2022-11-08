import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success');
    }

    const handleLowClick = ()=> {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to lowercase!', 'success');
  }

  const handleClearClick = ()=> {
    let newText = "";
    setText(newText);
    props.showAlert('Box has been cleared!', 'success');
}


    const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
    </div>
    </>
  )
}
 