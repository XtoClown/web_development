import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(currentNumber);
  const [operationDisabled, setOperationDisabled] = useState(false);

  function addNumberHandler(number){
    if(/\d/.test(number)){
      setCurrentNumber(prev => {
        if(prev.length === 1 && prev === "0"){
          return number.toString()
        }
        else{
          return (prev + number).toString()
        }
      })
    }
    if(number === "." && !currentNumber.includes(".") && currentNumber.length >= 1){
      setCurrentNumber(prev => prev + number)
    }
  }

  function addOperationHandler(operation){
    setCurrentOperation(operation)
    setFirstNumber(currentNumber)
    setCurrentNumber("0")
    setOperationDisabled(true)
  }

  function removeSymbol(){
    if(firstNumber !== "" && currentNumber === "" && currentOperation !==""){
      setCurrentOperation("")
      setCurrentNumber(firstNumber)
      setOperationDisabled(false)
      setFirstNumber("")
    }
    if(firstNumber !== "" && currentNumber !== "" && currentOperation !== ""){
      setCurrentNumber(prev => prev.slice(0, -1))
    }
    if(currentNumber !== "" && currentNumber.length > 1 && currentOperation === ""){
      setCurrentNumber(prev => prev.slice(0, -1))
    }
    if(currentNumber !== "" && currentNumber.length === 1){
      setCurrentNumber("0")
    }
  }

  function percentage(){
    if(firstNumber !== "" && currentOperation !== "" && currentNumber !== ""){
      const numberOne = parseFloat(firstNumber)
      const numberTwo = parseFloat(currentNumber)
      const percentNumber = numberOne / 100 * numberTwo
      setCurrentNumber(percentNumber.toString())
    }
  }

  function calculateResult(){
    if(firstNumber !== "" && currentNumber !== "" && currentOperation !== ""){
      const numberOne = parseFloat(firstNumber)
      const numberTwo = parseFloat(currentNumber)
      let operationResult = ""
      switch(currentOperation){
        case "+":
          operationResult = numberOne + numberTwo
          break;
        case "-":
          operationResult = numberOne - numberTwo
          break;
        case "×":
          operationResult = numberOne * numberTwo
          break;
        case "÷":
          operationResult = numberOne / numberTwo
          break;
      }

      setFirstNumber("")
      setCurrentOperation("")
      setOperationDisabled("")
      setCurrentNumber(operationResult.toString())
    }
  }

  function reverseNumber(){
    if(currentNumber !== ""){
      const number = parseFloat(currentNumber) * -1
      setCurrentNumber(number)
    }
  }

  function cleanCurrentNumber(){
    if(currentNumber !== ""){
      setCurrentNumber("0")
    }
  }

  function cleanAll(){
    setCurrentNumber("0")
    setFirstNumber("")
    setCurrentOperation("")
    setOperationDisabled(false)
  }

  function countPow(){
    if(currentNumber !== ""){
      const number = parseFloat(currentNumber)
      const numberInPow = Math.pow(number, 2)
      setCurrentNumber(numberInPow.toString())
    }
  }

  function countSqrt(){
    if(currentNumber !== ""){
      const number = parseFloat(currentNumber)
      const numberInPow = Math.sqrt(number)
      setCurrentNumber(numberInPow.toString())
    }
  }

  function oneDivideByX(){
    if(currentNumber !== ""){
      const number = parseFloat(currentNumber)
      const divided = 1 / number
      setCurrentNumber(divided.toString())
    }
  }

  useEffect(() => {
    if(firstNumber !== ""){
      setResult(firstNumber+currentOperation+currentNumber)
    }
    if(firstNumber === ""){
      setResult(currentNumber)
    }
    console.log(firstNumber)
    console.log(currentOperation)
    console.log(currentNumber)
  }, [firstNumber, currentNumber, currentOperation])

  return (
    <Container className="calculator" style={{ maxWidth: "450px" }}>
      <Row className="mb-3">
        <Col>
          <div className="text-white text-end fs-3" style={{ padding: "20px", borderRadius: "10px", minHeight: "60px" }}>
            {result}
          </div>
        </Col>
      </Row>

      <Row className="g-2">
        <Col>
          <Button variant="dark" onClick={percentage} className="w-100 customButton">%</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={cleanCurrentNumber} className="w-100 customButton">CE</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={cleanAll} className="w-100 customButton">C</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={removeSymbol} className="w-100 customButton">⌫</Button>
        </Col>
      </Row>

      <Row className="g-2">
        <Col>
          <Button variant="dark" onClick={oneDivideByX} className="w-100 customButton">1/x</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={countPow} className="w-100 customButton">x²</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={countSqrt} className="w-100 customButton">√x</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={() => addOperationHandler('÷')} className="w-100 customButton" disabled={operationDisabled}>÷</Button>
        </Col>
      </Row>

      <Row className="g-2">
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(7)} className="w-100 customButton">7</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(8)} className="w-100 customButton">8</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(9)} className="w-100 customButton">9</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={() => addOperationHandler('×')} className="w-100 customButton" disabled={operationDisabled}>×</Button>
        </Col>
      </Row>

      <Row className="g-2">
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(4)} className="w-100 customButton">4</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(5)} className="w-100 customButton">5</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(6)} className="w-100 customButton">6</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={() => addOperationHandler('-')} className="w-100 customButton" disabled={operationDisabled}>-</Button>
        </Col>
      </Row>

      <Row className="g-2">
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(1)} className="w-100 customButton">1</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(2)} className="w-100 customButton">2</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(3)} className="w-100 customButton">3</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={() => addOperationHandler('+')} className="w-100 customButton" disabled={operationDisabled}>+</Button>
        </Col>
      </Row>

      <Row className="g-2">
        <Col>
          <Button variant="secondary" onClick={reverseNumber} className="w-100 customButton">±</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler(0)} className="w-100 customButton">0</Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => addNumberHandler('.')} className="w-100 customButton">.</Button>
        </Col>
        <Col>
          <Button variant="dark" onClick={calculateResult} className="w-100 customButton">=</Button>
        </Col>
      </Row>
    </Container>
  );
}
