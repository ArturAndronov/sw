import Home from "@/components/screens/home/Home";
import { IPeopleData } from "@/interfaces/people.interface";
import { PeopleService } from "@/services/people.service";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";

const HomePage: NextPage<IPeopleData> = ({peoples}) => {
  return <Home peoples={peoples} />
}

export const getStaticProps: GetStaticProps<IPeopleData> = async () => {
  const peoples = await PeopleService.getAll()
  return {
    props: {peoples},
    revalidate: 60
  }
}

// export const getServerSideProps: GetServerSideProps<IPeopleData>= async () => {
//   const peoples = await PeopleService.getAll()

//   return {
//     props: {peoples}
//   }
// }

export default HomePage