import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';

import styles from './styles.module.scss';

export function Header(){
  // Descobre página
  var page = true;
    const router = useRouter();
    const RouterName = router.pathname
     if(RouterName == "/"){
            page = true
        }else page = !page


  return(
    <header className={styles.headerContainer}>
        <Link href={`/`}>
                <a className={styles.imageDetail}>
                <Image 
                src="/logo.png"
                width={95}
                height={95}
                />
                </a>
            </Link>
            <Link href={`/`}>
                <a className =  { page? styles.selected : styles.off }> Início </a>
            </Link>
            <p className={styles.selected} >
                Olá, <span>Usuario</span>
            </p>
    </header>
  );
}