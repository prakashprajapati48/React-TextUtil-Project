import React, { useState } from 'react'

export default function Textform(props) {
    const onChanges = (event) => {
        console.log("Upercase in converted!")
        setText(event.target.value);
    }

    const onhandleUpCase = () => {
        console.log("Button on click!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase in converted","success");
    }

    const copys = ()=>{
        let text = document.getElementById("box")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text","success");
    }

    // const onHighlight = (sertext) => {
    //     let newText = text.toUpperCase();
    //     let findedtext = text.search(sertext);
    //     // text.matchAll(sertext).style={{backgroundColor:"black"}}
    // }

    const onhandlelorCase = () => {
        console.log("Button on click!")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase in converted","success");
    }

    const [sertext, setSertext] = useState({
        color: 'blue'
    })

    const [text, setText] = useState("");

    if(text.split(" ").length == null){
        let split_word = document.getElementById("split_word")
        split_word.innerText = `0 word and ${text.length}`;
    }

    return (
        <>
            <div className="mb-3">
                <h2 style={{color:props.mode==='dark'?'white':'black',color:props.mode1==='light'?'secondary':'light'}}>Enter Text analycis below</h2>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'white':'dark',color:props.mode1==='light'?'black':'grey'}} onChange={onChanges} id="box" rows="10"></textarea>
                <button className="btn btn-primary mx-1" onClick={onhandleUpCase}>UpperCase Convert</button>
                <button className="btn btn-primary mx-1" onClick={onhandlelorCase}>LowerCase Convert</button>
                {/* <button className="btn btn-primary mx-1" onClick={copys}>Copy</button> */}
            </div>

            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p id='split_word'>{text.split(" ").length -1} word and {text.length} </p>
                <p>{0.08 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <h2>{text}</h2>
            </div>
        </>
    )
}
