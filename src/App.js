import { React, useState } from 'react';
import Result from '../src/components/Result/Result';
import Game from '../src/components/Game/Game';
import './App.css';

const questions = [
  {
    title: 'What revolvers did Dutch van der Linde use?',
    variants: ['Navy Revolvers', 'Cattleman Revolvers', 'Schofield revolvers'],
    correct: 2,
  },
  {
    title: 'Who is the main character of RDR 2?',
    variants: ['Dutch van der Linde', 'Abigail Marston', 'Arthur Morgan'],
    correct: 2,
  },
  {
    title: 'Who is the main character of RDR?',
    variants: ['Arthur Morgan', 'Hosea Matthews', 'John Marston'],
    correct: 2,
  },
  {
    title: 'Who is the main traitor of the Van Der Linde gang?',
    variants: ['Bill Williamson', 'Micah Bell', 'Javier Escuella'],
    correct: 1,
  },
  {
    title: 'What time does the RDR2 storyline take place?',
    variants: ['About the Middle Ages', 'About our time', 'About the wild west'],
    correct: 2,
  },
  {
    title: 'What happens to the main character of RDR2 at the end of the story?',
    variants: ['He is dying', 'He is leaving' , 'They lived happily ever after'],
    correct: 0,
  },
  {
    title: 'Could Arthur be saved from his illness?',
    variants: ['No. In those days, tuberculosis was practically a death sentence', 'Yes, he could drink cough syrup.', 
    'I don\'t know, I generally love GTA'],
    correct: 0,
  },
  {
    title: 'What did the Van der Linde gang do?',
    variants: ['Often traded in illegal deeds', 'Selling ice cream', 'Cleaned the stables'],
    correct: 0,
  },
  {
    title: 'What year did Arthur Morgan die?',
    variants: [ 1899, 1910, 1895],
    correct: 0,
  },
  {
    title: 'What was the name of John Marston\'s son?',
    variants: ['Sam', 'Jack', 'Mike'],
    correct: 1,
  },
];

const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCurrect] = useState(0);
  const question = questions[step];
  
  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCurrect(correct + 1);
    }
  }


  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : <Result questions={questions} correct={correct} />
      }
      
      
    </div>
  );
}

export default App;
