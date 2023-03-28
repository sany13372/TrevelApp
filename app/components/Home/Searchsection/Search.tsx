import React, { ChangeEvent, FC, useState } from 'react';
import { TypeSetState } from '../../types/common';
import { Iplace } from '../../types/place';
import styles from './Searchsection.module.scss';
export interface ISearch{
    setPlases:TypeSetState<Iplace[]>
    plases:Iplace[]
    setLoading?:TypeSetState<boolean>
}
const Search:FC<ISearch> = ({setPlases,plases,setLoading}) => {
    const [searchterm,setSearchterm] = useState('');
    const searchHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            setSearchterm(value);
            setPlases(plases.filter(place => 
                place.location.cities.toLowerCase().includes(value)||
                place.location.country.toLowerCase().includes(value)
                ))
        } else { setPlases(plases)}
    }
    return (
        <div className={styles.search}>
            <span className='material-icons-outlined'>search</span>
            <input type='text' onChange={searchHandler}  placeholder='Search place...'/>
        </div>
    );
};

export default Search;