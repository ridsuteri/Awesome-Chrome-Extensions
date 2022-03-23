import "./App.css";
import {useState} from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Vocab } from "./GREVocabList";
import { useSpeechSynthesis } from "react-speech-kit";

function App() {


  // Generate random number from 0 to length of our GREVocab List .
  let[randomNum,setRandom] = useState(1);

  let randomNumFn = () =>{
    let randomNum = Math.floor(Math.random() * Math.floor(Vocab.length));
    setRandom(randomNum);
  }
  
  const { speak } = useSpeechSynthesis();

  const handleClick = (e) => {
    e.preventDefault();
    speak({ text: Vocab[randomNum].FIELD1 });
  };

  return (
    <>
      <div className="title">
        <span> GRE Vocab </span>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="speechArea">
          <h2>{Vocab[randomNum].FIELD1}</h2>
          <button onClick={handleClick}>
            <VolumeUpIcon />
          </button>
        </div>
      
        <h4>Meaning - {Vocab[randomNum].FIELD2}</h4>
        <button className="nextbtn" onClick={randomNumFn}>Next ↠ </button>
      </div>
      <div className="footer">
        <p>
          {" "}
          ≺/≻ with 💖{" "}
          <a href="https://github.com/RiyaBhandari-2811" target="__blank">
            By Riya Bhandari{" "}
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
