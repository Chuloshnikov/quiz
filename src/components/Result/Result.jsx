import React from 'react';
import styles from './Result.module.css';
import winImg from '../../assets/images/YouWin.png';

const Result = (props) => {
    return (
      <div className={styles.result}>
         <img src={winImg} alt="you win" />
          <h2 className={styles.title}>You guessed {props.correct} out of {props.questions.length} answers</h2>
          <a href='/'>
          <button className={styles.tryAgainButton}>Try Again</button>
          </a>
      </div> 
    )
  }

export default Result;