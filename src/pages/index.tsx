import { TitleProcess } from '../components/TitleProcess/';
import { SearchInput } from '../components/SearchInput';
import { api } from '../services/api/Api';
import styles from '../styles/home.module.scss';

import { GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';


//Tipagem dos processos
type AllProcesses = {
  id: string,
  name: string,
  iconLink: string
}
type ProcessoProps = {
  allProcesses: AllProcesses[];
}

export default function Home({allProcesses} : ProcessoProps){
  return (
    <div>
        <TitleProcess name='Seja bem-vindx!' />
        <div className={styles.mainContainer} >
          <div className={styles.searchInputContainer} >
          <h2>Faça sua busca </h2>
          <SearchInput/>
          </div>

          <hr />

          <div className={styles.processesContainer} >
            {/*Renderização da lista de processos*/}
                <ul >{allProcesses.map(oneProcess =>{
                  return(
                    <div key={oneProcess.id}  className={styles.containerGeral}>
                    <div></div>

                      <div className={styles.principalContainer} key={oneProcess.id}>
                          <div className={styles.img}>
                              <img src={oneProcess.iconLink} alt={oneProcess.name} />
                          </div>
                          <div>
                              <Link href={`processo/${oneProcess.id}`}>
                                  <a>{oneProcess.name}</a>
                              </Link>
                          </div>
                      </div>

                      <div></div>
                    </div>
                  )})}
              </ul>
            </div>      
        </div>       
    </div>
  )
}

// Faz chamada dos processos dentro da API

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('files')
  return {
      props: {
        allProcesses: data.files,
      },
      revalidate: 60 * 10
  }
}
