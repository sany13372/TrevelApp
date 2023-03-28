import Link from 'next/link';
import React, { FC, useState } from 'react';
import {BsFillBookmarkFill,BsChevronLeft} from 'react-icons/bs';
import { Ifavorite } from '../types/place';
import styles from './Plase.module.scss'
const data:Ifavorite[] = [
    {
        name:'Japan',
        slug:'japan'
    },
    {
        name:'Tokyo',
        slug:'tokyo'
    }
]
const Favorites:FC = () => {
    const [isopen,setIsopen] = useState(false)
    return (
        <div>
            <BsChevronLeft size={20} color='white'/>
            <button onClick={()=> setIsopen(!isopen)}>
                <span className={styles.buttonwraper}>
                <BsFillBookmarkFill size={20} color='white'/>
                </span>
                {isopen &&
                    <ul>
                                {data.map((item)=>
                                <li key={item.name}>
                                <Link href={`place/${item.slug}`}>
                                    <a>
                                    {item.name}
                                    </a>
                                </Link>
                                </li>
                                )}
                    </ul>
                }
            </button>
        </div>
    );
};

export default Favorites;