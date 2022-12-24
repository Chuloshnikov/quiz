import React from 'react';
import styles from './Result.module.css';
import Awesome from '../../assets/images/Awesome.png';
import notBaad from '../../assets/images/notBaad.png';


const Result = (props) => {
    return (
      <div className={styles.result}>
         <img src={props.correct > 7 ? Awesome : notBaad} alt="result" />
          <h2 className={styles.title}>You guessed {props.correct} out of {props.questions.length} answers</h2>
          <a href='/'>
          <button className={styles.tryAgainButton}>Try Again</button>
          </a>
      </div> 
    )
  }

export default Result;