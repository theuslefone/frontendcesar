import { TitleProcess } from '../components/TitleProcess/';
import { SearchInput } from '../components/SearchInput';
import styles from '../styles/home.module.scss';


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
                <ul>
                    <div className={styles.containerGeral}>
                    <div></div>

                      <div className={styles.principalContainer}>
                          <div className={styles.img}>
                              <img src="{oneProcess.iconLink} "alt="Logo" />
                          </div>
                          <div>
                              <Link href="#">
                                  <a>Nome do processo</a>
                              </Link>
                          </div>
                      </div>

                      <div></div>
                    </div>
              </ul>
            </div>      
        </div>       
    </div>
  )
}

// Faz chamada dos processos dentro da API
