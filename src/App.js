import React, {useState, useEffect} from 'react';
import { Container, TextField, Button} from '@material-ui/core';
import Pair from './Pairs/Pair';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [randomCandidate, setRandomCandidate] = useState('');
  const [showPairs, setShowPairs] = useState(false);

  const submitHandler = (event) => {
    if(event.key === "Enter"){
      setCandidates(candidates => [...candidates, event.target.value]);
    }
  }

  const randomizePairsHandler = (candidates) => {
    setRandomCandidate(candidates[Math.floor(Math.random()*candidates.length)]);
  }

  useEffect(() => {
      setCandidates(candidates);
  }, [candidates, randomCandidate]);


  return (
    <Container>
      <div className="App">
        <h1>Random Pair</h1>
        <TextField id="name-textfield" label="Enter a name" variant="outlined" onKeyPress={(event) => submitHandler(event)}/>
          <p>
            <Button variant="contained" type="button" color="primary" onClick={() => randomizePairsHandler(candidates)}>
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
