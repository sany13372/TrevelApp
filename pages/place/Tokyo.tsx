import { GetServerSideProps,  GetStaticPaths,  GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react";
import Layout from "../../app/components/Layout";
import Plase from "../../app/components/Plase/Plase";
import { Iplace } from "../../app/components/types/place";
import { API_URL } from "../../app/constants";


interface IPlaceIpage{
    plases:Iplace[]
}
const PlacePage:NextPage<IPlaceIpage> = ({plases}) => {
    return (
    <div>
		{plases.map((plase)=>
		<Plase plase={plase}/>
		)}
    </div>
    )
}
export default PlacePage;
export const getServerSideProps:GetServerSideProps = 
async () => {
	const result = await fetch(`${API_URL}/plases`);
	const plases = await result.json();
	console.log(plases);
	return{
		props:{
			plases
		}
	}
}


