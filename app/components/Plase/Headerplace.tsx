import Link from 'next/link';
import React, { FC, useState } from 'react';
import Favorites from './Favorites';
import {BsChevronLeft} from 'react-icons/bs';
import styles from './Headerplace.module.scss'
const Headerplace:FC = () => {

    return (
        <div className={styles.wraper}>
            <Link href={'/'}>
            <a >
            <span>
                    <BsChevronLeft size={20} color='white'/>
            </span>
            </a>
            </Link>
            <Favorites/>
        </div>
    );
};

export default Headerplace;