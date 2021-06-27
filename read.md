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