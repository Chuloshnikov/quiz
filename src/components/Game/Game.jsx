import React from 'react';
import styles from './Game.module.css';


const Game = (props) => {

  const percentage = Math.round((props.step / props.questions.length) * 100);

  console.log(percentage);

    return (
      <div className={styles.progress}>
        <div style={{width: `${percentage}%`}} className={styles.progressBar}></div>
        <h1>{props.question.title}</h1>
          <ul>
            {
              props.question.variants.map((text, index) => <li onClick={() => props.onClickVariant(index)} key={text}>{text}</li>)
            }
          </ul>
      </div>
    )
  }

  export default Game;