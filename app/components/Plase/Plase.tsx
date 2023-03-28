import React, { FC } from 'react';
import Layout from '../Layout';
import { Iplace } from '../types/place';
import Favorites from './Favorites';
import Handler from './Handler';
import Headerplace from './Headerplace';
import Information from './Information';
import WraperPlace from './WraperPlace';
interface IPlaceIpage{
    plase:Iplace
}
const Plase:FC<IPlaceIpage> = ({plase}) => {
    return (
        <Layout isMaxWidth={false}>
            <WraperPlace imgpath={plase.pathImga}>
            <Headerplace/>
            <Information plase={plase}/>
            
            </WraperPlace>
        </Layout>
    );
};

export default Plase;