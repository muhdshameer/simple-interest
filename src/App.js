import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [principle,setPrinciple] = useState(0)   //principle amount
  const [rate,setRate] = useState(0)             //rate
  const [year,setYear] = useState(0)             //year
  const [interest,setInterest] = useState(0)     //simple interest

  const [isPrinciple,setIsPrinciple] =useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)

  const validateData=(e)=>{
    const{name,value}=e.target
    // console.log(name,value);
    //console.log(typeof(value));
    // console.log(!!value.match(/^[0-9]+$/));    //!! to convert into bool
    
    

    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==='principle')
        {
          setPrinciple(value)
          setIsPrinciple(true)
        }
        else if(name==='rate')
        {
          setRate(value)
          setIsRate(true)
        }  
        else
        {
          setYear(value)
          setIsYear(true)
        } 
    }
    else{
      if(name==='principle')
        {
          setPrinciple(value)
          setIsPrinciple(false)
        }
        else if(name==='rate')
        {
          setRate(value)
          setIsRate(false)
        }
        else
        {
          setYear(value)
          setIsYear(false)
        }
    }
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please Fill the form Completetly")
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset=(e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    
  }

  return (
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest easly</p>

        <div style={{height:"150px"}} className='bg-warning mt-5 d-flex justify-content-center align-items-center w-100 rounded flex-column shadow '>
          <h1> ₹ {interest}</h1>                 {/* ctrl+alt+4 to print rupee symbol*/}
          <p>Total Simple Interest </p>
        </div>

        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField  className='w-100' name='principle' value={principle || ""} onChange={(e)=>validateData(e)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>

          { !isPrinciple &&
            <div className='text-danger '>*Invalid input</div>
          }

          <div className='mb-3'>
            <TextField className='w-100' name='rate' value={rate || ""} onChange={(e)=>validateData(e)} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>

          { !isRate &&
            <div className='text-danger '>*Invalid input</div>
          }

          <div className='mb-3'>
            <TextField className='w-100' name='year' value={year || ""} onChange={(e)=>validateData(e)} id="outlined-basic" label="Year (yr)" variant="outlined" />
          </div>

          { !isYear &&
            <div className='text-danger '>*Invalid input</div>
          }
          
          <div className='mt-4'>
            <Stack direction="row" spacing={2}>
              <Button type='submit' disabled={isPrinciple && isRate && isYear ? false:true} variant="contained" className='bg-secondary' style={{height:"60px",width:"200px"}}>Calculate</Button>
              <Button variant="outlined" onClick={handleReset} className='border-dark text-dark' style={{height:"60px",width:"200px"}}>Reset</Button>
            </Stack>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;