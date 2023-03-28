import React, { FC } from 'react';
import { useRouter} from 'next/dist/client/router';
import styles from './Footer.module.scss';
type TypeNavItem = {
    link:string
    icon:string
}
const Footer:FC = () => {
    const {push,pathname} = useRouter();
    const navItmes:TypeNavItem[] =[
        {
            link:'/',
            icon:'home'
        },
        {
            link:'/exp',
            icon:'explore'
        },
        {
            link:'/plases',
            icon:'place'
        },
        {
            link:'/auth',
            icon:'person_outline'
        }
    ]
    return (
        <footer className={styles.footer}>
            <nav>
                {
                    navItmes.map((item)=>
                    <button className={pathname === item.link ? styles.active : ''} onClick={()=> push(item.link) } key={item.icon}>
                        <span className='material-icons-outlined'>{item.icon}</span>
                    </button>
                    )
                }
            </nav>
        </footer>
    );
};

export default Footer;