import React, { FC } from 'react';
import { Iplace } from '../types/place';
import styles from './Plase.module.scss';
import {FaMapMarkerAlt,FaStar,FaCalendarAlt} from 'react-icons/fa';
interface Ipld{
    plase:Iplace
}
const Information:FC<Ipld> = ({plase}) => {
    console.log(plase);
    return (
        <div className={styles.wraper}>
            <div className={styles.heading}>
                <FaMapMarkerAlt color='white' size={20}/>
                <h3>{plase.location.country + ',' + plase.location.cities}</h3>
                <p>{plase.duration}</p>
                <div className={styles.ratingline}>
                    <FaStar size={20} color='yellow'/>
                    <span>{plase.rating}/10</span>
                </div>
                <div className={styles.linecol}>
                    <FaCalendarAlt/>
                </div>
            </div>
        </div>
    );
};

export default Information;