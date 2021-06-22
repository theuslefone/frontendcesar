import { GetStaticProps } from "next"
import { api } from "../../services/api/Api"

//Tipagem dos processos
type AllProcesses = {
  id: string,
  name: string,
  iconLink: string
}
type ProcessoProps = {
  allProcesses: AllProcesses[];
}

export function Processes({allProcesses} : ProcessoProps){
  return(
    <div>

    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('files')
  return {
      props: {
        allProcesses: data.files,
      },
      revalidate: 60 * 10
  }
}
