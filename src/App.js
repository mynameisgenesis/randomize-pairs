import React, {useState, useEffect} from 'react';
import { Container, TextField, Button} from '@material-ui/core';
import Pair from './Pairs/Pair';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [randomCandidate, setRandomCandidate] = useState('');
  const [showPairs, setShowPairs] = useState(false);
  const [inputField, setInputField] = useState('');

  const submitHandler = (event) => {
    event.persist();
    if(event.key === "Enter"){
      setCandidates(candidates => [...candidates, event.target.value]);
      setInputField('')
    }
  }

  const randomizeCandidateHandler = (candidates) => {
    setRandomCandidate(candidates[Math.floor(Math.random()*candidates.length)]);
  }

  const changeHandler = (event) => {
    event.persist();
    setInputField(event.target.value);
  }

  useEffect(() => {
      setCandidates(candidates);
      console.log(inputField)
  }, [candidates, inputField]);


  return (
    <Container>
      <div className="App">
        <h1>Random Pair</h1>
        {/* <TextField id="name-textfield" label="Enter a name" variant="outlined" onKeyPress={(event) => submitHandler(event)}/> */}
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
            <Button variant="contained" type="button" color="primary" onClick={() => randomCandidate(candidates)}>
              Pair!
            </Button>
          </p>
         
          {candidates !== null ?
            candidates.map((candidate, index) => {
              return <p key={index}>{candidate}</p>
            }) : null
          }

          <h3>{randomCandidate}</h3>

          {/* <Pair candidates={candidates} /> */}

      </div>
    </Container>

  );
}

export default App;
