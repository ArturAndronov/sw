
import Layout from "@/components/layout/Layout";
import PeopleItem from "@/components/ui/people/PeopleItem";
import { IPeopleDataSingle } from "@/interfaces/people.interface";
import { FC } from "react";

const PeopleDetail: FC<IPeopleDataSingle> = ({ people }) => {
    return (
        <Layout title={people.name} description='characters'>
            <PeopleItem people={people} />
        </Layout>
    )
}

export default PeopleDetail