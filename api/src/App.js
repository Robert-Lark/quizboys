import React from 'react';
import QuestionContainer from './Components/QuestionContainer'
import { useStyles } from "./Styles/Styles";

function App() {
  const classes = useStyles();
  return (
    <div className = {classes.home}>
<QuestionContainer/>
    </div>
  );
}

export default App;
