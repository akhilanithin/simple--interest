import './App.css';
import { useState } from 'react';
import { TextField,Stack,Button } from '@mui/material';

function App() {

  const [interest, setinterest] = useState(0)
  const [principle, setprinciple] = useState(0)
  const [rate, setrate] = useState(0)
  const [year, setyear] = useState(0)
  const [IsPrincipleValid, setIsPrincipleValid] = useState(true)
  const [IsRateValid, setIsRateValid] = useState(true)
  const [IsYearvalid, setIsYearValid] = useState(true)


  const validateInput = (e) => {
    
    const { name, value } = e.target
    // logic to check number validation =regular expression :/^[0-9]+$/
    console.log(value);

    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === 'principle') {
        setprinciple(value)
        setIsPrincipleValid(true)
      }
      else if (name === 'rate') {
        setrate(value)
        setIsRateValid(true)
      }
      else {
        setyear(value)
        setIsYearValid(true)
      }
    } else {
      if (name === 'principle') {
        setprinciple(value)
        setIsPrincipleValid(false)
      } else if (name === 'rate') {
        setrate(value)
        setIsRateValid(false)
      }
      else {
        setyear(value)
        setIsYearValid(false)
      }
    }
  }

  const handleCalculate=(e)=>{
  e.preventDefault()
  if(!principle||!rate||!year){
    // document.getElementById("result").innerHTML='Please Fill the form completely'
    alert('Please Fill the form completely')
  
  }else{
    setinterest(principle*rate*year/100)
  }
  }

  const handleReset=()=>{
    setinterest(0)
    setprinciple(0)
    setrate(0)
    setyear(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true)
    
    
    

  }
  return (
// Heading
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center w-100'>
      <div style={{ width: '500px' }} className='bg-light p-5 rounded shadow '>
        <h3>Simple Interest App</h3>
        <p>Calculate your simple interest Easily</p>
        <u><p className='fw-bolder'> Total Simple Interest</p></u>

{/* box-Total interest */}
        <div style={{ height: '150px' }} className='interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center rounded p-3'>
          <h1>&#8377;{''}{interest}</h1>
        </div>

{/* Form  */}
        <form className="mt-3" onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic1" label="Principle Amount" variant="outlined" value={principle || ""} name="principle" onChange={(e) => validateInput(e)} />
          </div>
          {
            !IsPrincipleValid &&
            <div className='mb-3 text-danger'>
              *Invalid User Input!!
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate of Interest(%)" variant="outlined" value={rate || ""} name="rate" onChange={(e) => validateInput(e)} />
          </div>
          {
            !IsRateValid &&
            <div className='mb-3 text-danger'>
              *Invalid User Input!!
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Time Period(Yr)" variant="outlined" value={year || ""} name="year" onChange={(e) => validateInput(e)} />
          </div>
          {
            !IsYearvalid &&
            <div className='mb-3 text-danger'>
              *Invalid User Input!!
            </div>
          }
          <Stack direction="row" spacing={2}>
            <Button style={{ height: '70px', width: "200px" }} type='submit' variant="contained" disabled={IsPrincipleValid && IsRateValid && IsYearvalid ? false : true}>CALCULATE</Button>
            <Button style={{ height: '70px', width: "200px" }} variant="outlined" onClick={handleReset}>RESET</Button>
          </Stack>
          {/* <br /> */}
          {/* <div id="result"></div> */}
        </form>
      </div>
    </div>

  );
}

export default App;
