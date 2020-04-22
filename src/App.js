import React, {useState, useEffect} from 'react';
import { Container, TextField, Button} from '@material-ui/core';
import Pair from './Pairs/Pair';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [randomCandidate, setRandomCandidate] = useState('t');
  const [inputField, setInputField] = useState('');
  const [pairs, setPairs] = useState();
  const [showPairs, setShowPairs] = useState(false);

  const submitHandler = (event) => {
    event.persist();
    if(event.key === "Enter"){
      setCandidates(candidates => [...candidates, event.target.value]);
      setInputField('');
    }
  }

  const getFirstCandidate = () => {
    let modifiedCandidates = candidates;
    const firstCandidate = modifiedCandidates[Math.floor(Math.random()*modifiedCandidates.length)];
    const index = candidates.indexOf(firstCandidate);
    if(index !== -1){
      modifiedCandidates.splice(index, 1);
      setCandidates(modifiedCandidates);
    }
    return firstCandidate;
  }

  const getSecondCandidate = () => {
    let modifiedCandidates = candidates;
    const secondCandidate = modifiedCandidates[Math.floor(Math.random()*modifiedCandidates.length)];
    const index = candidates.indexOf(secondCandidate);
    if(index !== -1){
      modifiedCandidates.splice(index, 1);
      setCandidates(modifiedCandidates);
    } 
    return secondCandidate;
  }

  const pairCandidates = () => {
    let half = candidates.length / 2;
    let pair = [];
    while (half > 0) {
      half -= 1;
      pair = [getFirstCandidate(), getSecondCandidate()];
      console.log('This is a pair: ' + pair);
      setPairs(pair);
    }
  }
  
  const changeHandler = (event) => {
    event.persist();
    setInputField(event.target.value);
  }

  useEffect(() => {
      setRandomCandidate(candidates[Math.floor(Math.random()*candidates.length)])
  }, [candidates, randomCandidate]);


  return (
    <Container>
      <div className="App">
        <h1>Random Pairs</h1>
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
          
          {showPairs}

      </div>
    </Container>
  );
}

export default App;
