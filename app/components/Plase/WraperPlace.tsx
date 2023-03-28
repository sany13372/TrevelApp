import React, { FC } from 'react';
import styles from './WraperPlace.module.scss'
const WraperPlace:FC <{imgpath:string,children:any}>= ({imgpath,children}) => {
    return (
        <div className={styles.wraper} style={{backgroundImage:`url(${imgpath})`}}>
            {children}
        </div>
    );
};

export default WraperPlace;