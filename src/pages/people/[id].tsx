import { IPeopleDataSingle } from '@/interfaces/people.interface'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'   //Возвращает jsx и указывает, что относится к NextPage типу
import { ParsedUrlQuery } from 'querystring'
import { PeopleService } from '@/services/people.service'

const PeopleDetailPage: NextPage<IPeopleDataSingle> = ({ people }) => {
  return <PeopleDetailPage people={people}/>
} 

interface Params extends ParsedUrlQuery{
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {

    const people = await PeopleService.getAll()

    return {
        paths: people.map(people => ({
            params: {
                id: people.id.toString(),
            },
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<IPeopleDataSingle> = async ({
    params
}) => {
    const people = await PeopleService.getById(String(params?.id))
    return {
      props: {people},
      revalidate: 60
    }
  }



export default PeopleDetailPage




// const PeoplePage: NextPage<IPeopleDataSingle> = ({people}) => {

//     const { push } = useRouter()
    
//         return <div>
//             <p>{people.name}</p>
//             <button onClick={() => push('/')}>go home</button>
//             </div>
//     }
    
//     export default PeoplePage
    
    