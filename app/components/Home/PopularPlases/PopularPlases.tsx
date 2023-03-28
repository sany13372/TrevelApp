import React, { FC } from 'react';
import { Iplace } from '../../types/place';
import styles from './PopularPlases.module.scss';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
interface IPopularPlases{
    plasee:Iplace[]
    isLoading:boolean
}
const PopularPlases:FC<IPopularPlases> = ({plasee,isLoading}) => {
    return (
        <div className={styles.wraper}>
            <h3>
                Popular plases
            </h3>
            {
                isLoading ? (<Skeleton count={10} height={200} borderRadius={20} baseColor='#1b1b1b' highlightColor='#2c2c2e'/>)
                :(
                    plasee.map((plase)=>
                        <Link key={plase.location.cities} href={`place/${plase.slug}`}>
                        <a className={styles.item} style={
                            {backgroundImage: `url('${plase.pathImga}')`} }>
                                <div className={styles.hading}>
                                    {plase.location.cities +' , ' + plase.location.country}
                                </div>
                        </a>
                        </Link>
                        )
                )
            }
        </div>
    );
};

export default PopularPlases;