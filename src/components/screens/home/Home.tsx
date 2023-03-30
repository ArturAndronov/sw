import Layout from '@/components/layout/Layout'
import PeopleItem from '@/components/ui/people/PeopleItem'
import { IPeopleData } from '@/interfaces/people.interface'
import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC<IPeopleData> = ({peoples}) => {
    return (
        <Layout
            title='Home'
            description='Jedi do not want their own things'
        >
            <h1>HELLO ALL</h1>

            {peoples.length ? peoples.map(people => <PeopleItem key={people.id} people={people}/>) : <div>Peoples not found</div>}

        </Layout>
    )
}
export default Home