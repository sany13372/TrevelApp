import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../app/components/Footer/Footer'
import Layout from '../app/components/Layout'
import { Iplace } from '../app/components/types/place'
import styles from '../assets/styles/Home.module.css'
import Searchsection from '../app/components/Home/Searchsection/Searchsection'
import { API_URL } from '../app/constants'
import PopularPlases from '../app/components/Home/PopularPlases/PopularPlases'
import { useState } from 'react'
interface IHome {
	plases:Iplace[]
	plade:Iplace[]
}
const Home:NextPage<IHome> = ({plases,plade}) => {
	const [plasee,setPlases] = useState(plases);
	const [isLoading,setLoading] = useState(false);
	console.log(plases);
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
	<Layout>
		<div className={styles.home}>
		<Searchsection setPlases={setPlases} plases={plases} setLoading={setLoading}/>
		<PopularPlases plasee={plasee} isLoading={isLoading}/>
		</div>
	</Layout>
		</>
	)
}
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
export default Home
