import React, {useState, useEffect} from 'react';
import { Container, TextField, Button} from '@material-ui/core';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [randomCandidate, setRandomCandidate] = useState('t');
  const [inputField, setInputField] = useState('');

  const submitHandler = (event) => {
    event.persist();
    if(event.key === "Enter"){
      setCandidates(candidates => [...candidates, event.target.value]);
      setInputField('');
    }
  }

  // const randomizeCandidate = () => {
  //   setRandomCandidate(candidates[Math.floor(Math.random()*candidates.length)]);
  // }

  const getFirstCandidate = () => {
    let modifiedCandidates = candidates;
    const firstCandidate = modifiedCandidates[Math.floor(Math.random()*modifiedCandidates.length)];
    console.log('First candidate: ' + firstCandidate);
    const index = candidates.indexOf(firstCandidate);
    if(index !== -1){
      modifiedCandidates.splice(index, 1);
      setCandidates(modifiedCandidates)
      console.log(candidates);
    }
    return firstCandidate;
  }

  const getSecondCandidate = () => {
    let modifiedCandidates = candidates;
    console.log(modifiedCandidates);
    const secondCandidate = modifiedCandidates[Math.floor(Math.random()*modifiedCandidates.length)];;
    console.log('Second candidate: ' + secondCandidate);
    const index = candidates.indexOf(secondCandidate);
    if(index !== -1){
      modifiedCandidates.splice(index, 1);
      setCandidates(modifiedCandidates)
      console.log(candidates);
    } 
    return secondCandidate;
  }

  const pairCandidates = () => {

  }

  const changeHandler = (event) => {
    event.persist();
    setInputField(event.target.value);
  }

  useEffect(() => {
      //setCandidates(candidates);
      console.log(candidates)
      setRandomCandidate(candidates[Math.floor(Math.random()*candidates.length)])
  }, [candidates]);


  return (
    <Container>
      <div className="App">
        <h1>Random Pair</h1>
        <TextField 
          id="name-textfield" 
          label="Enter a name"
          variant="outlined" 
          value={inputField}
          onChange={event => 
            changeHandler(event)
          }
          onKeyDown= {event =>
            submitHandler(event)
          }
          />
          <p>
            <Button 
              variant="contained" 
              type="button" 
              color="primary" 
              onClick={() => {
                //randomizeCandidate(candidates);
                pairCandidates(candidates, randomCandidate);
              }}>
              Pair!
            </Button>
          </p>
         
          {candidates !== null ?
            candidates.map((candidate, index) => {
              return <p key={index}>{candidate}</p>
            }) : null
          }
          
          {/* <h3>{randomCandidate}</h3> */}

      </div>
    </Container>

  );
}

export default App;
