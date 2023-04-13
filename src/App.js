import { useState } from "react";
import { Button } from "./components/button";

function App() {

  const [output, setOutput] = useState('0')
  const [formula, setFormula] = useState('')
  const [buttonsDisabled, setButtonDisabled] = useState(false)

  return (
    <div id="calculator">
      <div id="screen">
        <div id="formula-screen">
          <p>{formula}</p>
        </div>
        <div id="ouput-screen">
          <span>{output}</span>
        </div>
      </div>
      <div id="buttons">
        <Button id = "AC" className="button" buttonText="AC" buttonType = "eraser" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button operator" buttonText="/" buttonType = "divide" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button operator" buttonText="*" buttonType = "multiply" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="7" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="8" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="9" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button operator" buttonText="-" buttonType = "subtract" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="4" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="5" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="6" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button operator" buttonText="+" buttonType = "add" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="1" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="2" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button className = "button digit" buttonText="3" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button id = "equal-sign" className = "button" buttonText="=" buttonType = "equality" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button id = "zero" className = "button digit" buttonText="0" buttonType = "digit" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
        <Button id = "point" className="button" buttonText="." buttonType = "point" setOutput = {setOutput} setFormula={setFormula} buttonsDisabled = {buttonsDisabled} setButtonDisabled = {setButtonDisabled}/>
      </div>
    </div>
  );
}

export default App;
