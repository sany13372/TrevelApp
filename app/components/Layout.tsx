import React, { FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss'
const Layout:FC<{isMaxWidth?:boolean,children:any}> = ({isMaxWidth,children}) => {
    return (
        <div  className={styles.layout} style={{maxWidth:isMaxWidth && 480 , margin:'0 auto'}}>
            <Header/>
            {children}
            
            <Footer/>
        </div>
    );
};

export default Layout;