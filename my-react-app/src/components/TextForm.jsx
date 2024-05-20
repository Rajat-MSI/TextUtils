import React from 'react';
import '../css/TextForm.css';
import {useState} from "react";

export default function TextForm(props)
{
    const [text, setText] = useState('');

    const convertToUpperCase = () =>
    {
        setText(text.toUpperCase());
        text.length > 0 ? props.showAlert("Text successfully converted to upper case","success") : props.showAlert("Enter text to convert","danger");
    }

    const convertToLowerCase = () =>
    {
        setText(text.toLowerCase());
        text.length > 0 ? props.showAlert("Text successfully converted to lower case","success") : props.showAlert("Enter text to convert","danger");
    }

    const convertToAlternateCase = () =>
    {
        let temp = "";
        for(let i=0;i<text.length;i++)
        {
            if(i % 2 === 0)
            {
                temp += text[i].toUpperCase();
            }
            else if(i % 2 === 1)
            {
                temp += text[i].toLowerCase();
            }
            else
            {
                temp += text[i];
            }
        }
        setText(temp);
        text.length > 0 ? props.showAlert("Text successfully converted to alternate case","success") : props.showAlert("Enter text to convert","danger");

    }

    const convertToInverseCase = () =>
    {
        let temp = "";
        for(let i=0;i<text.length;i++)
        {
            if(text[i] >= 'a' && text[i] <= 'z')
            {
                temp += text[i].toUpperCase();
            }
            else if(text [i] >= 'A' && text[i] <= 'Z')
            {
                temp += text[i].toLowerCase();
            }
            else
            {
                temp += text[i];
            }
        }
        setText(temp);
        text.length > 0 ? props.showAlert("Text successfully converted to inverse case","success") : props.showAlert("Enter text to convert","danger");

    }

    const clearText = () =>
    {
        setText("");
        text.length > 0 ? props.showAlert("Text cleared","success") : props.showAlert("Enter text to clear","danger");

    }

    const textOnChange = (e) =>
    {
        setText(e.target.value);

    }
    console.log(props.mode);
    return (
        <>
            <div className="container">
                <div className="h5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</div>
                <div className="form-group my-1" >
                    {/*style={{backgroundColor: props.mode === 'light' ? 'dark' : 'light'}}*/}
                    <textarea className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={textOnChange}
                              id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-success mx-1 my-1" onClick={convertToUpperCase} type="button">Upper Case
                </button>
                <button className="btn btn-success mx-1 my-1" onClick={convertToLowerCase} type="button">Lower Case
                </button>
                <button className="btn btn-success mx-1 my-1" onClick={convertToAlternateCase} type="button">Alternate
                    Case
                </button>
                <button className="btn btn-success mx-1 my-1" onClick={convertToInverseCase} type="button">Inverse
                    Case
                </button>
                <button className="btn btn-success mx-1 my-1" onClick={clearText} type="button">Clear Text</button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <div className="h5">Summary</div>
                <div>Total characters: {text.length}</div>
                <div>Total words: {text.split(" ").length}</div>
                <div className="h6">Preview</div>
                <p>{text.length > 0 ? text:"Enter text above to preview"}</p>
            </div>

        </>
    );
};