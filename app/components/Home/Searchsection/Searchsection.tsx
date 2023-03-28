import React, { FC } from 'react';
import Filter from '../Filters/Filter';
import Search, { ISearch } from './Search';
import style from './Searchsection.module.scss';
import Img from '../../../../assets/images/map.png';

const Searchsection:FC<ISearch> = ({setPlases,plases,setLoading}) => {
    return (
        <section className={style.searchsection} style={
            {backgroundImage:`url('${Img.src}')`}
        }>
            <div>
            <h1>
                best places for trip 
            </h1>
            <Search setPlases={setPlases} plases={plases} setLoading={setLoading}/>
            <Filter setPlases={setPlases} plases={plases}/>
            </div>
        </section>
    );
};

export default Searchsection;    