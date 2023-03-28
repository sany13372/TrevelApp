import React, { FC, useState } from 'react';
import styles from '../Searchsection/Searchsection.module.scss';
import cn from 'classnames';
import { TypeSetState } from '../../types/common';
import { Iplace } from '../../types/place';
import { ISearch } from '../Searchsection/Search';
const countrus = [
    {
        location:'Japan'
    },
    {
        location:'Franse'
    },
    {
        location:'Tokyo'
    },
]
const Filter:FC<ISearch> = ({setPlases,plases}) => {
    const [filter, setFilter] = useState('');
    const handleFilter = (location:string) => {
        if (location === filter) {
            setPlases(plases)
            setFilter('')
        } else {
            setPlases(plases.filter(place => place.location.country.toLowerCase() === location.toLowerCase()))
        }
        setFilter(location)
    }
    return (
        <div className={styles.filter}>
            {countrus.map((sity)=>
            <button key={sity.location} 
            onClick={()=> handleFilter(sity.location)}
            className={cn({
                [styles.active]: sity.location === filter,
            })}
            >{sity.location}</button>
            )}
        </div>
    );
};

export default Filter;