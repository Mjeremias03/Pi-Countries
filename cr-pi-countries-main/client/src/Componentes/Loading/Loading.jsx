import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    
    <div className={styles.loadercontainer}>
      <div className={styles.loader}></div>
      <p className={styles.loadingtext}>Loading...</p>
    </div>
  );
};

export default Loading;

