import React from 'react';
import styles from './Result.module.css';

const Result = (props) => {
    return (
      <div className={styles.result}>
         <img src="" alt="" />
          <h2 className={styles.title}>You guessed {props.correct} out of {props.questions.length} answers</h2>
          <a href='/'>
          <button className={styles.button}>Try Again</button>
          </a>
      </div> 
    )
  }

export default Result;