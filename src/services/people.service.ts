import { IPeople } from "@/interfaces/people.interface"
import axios from "axios"

axios.defaults.baseURL = process.env.API_URL

export const PeopleService = {
    async getAll() {
        const response = await axios.get('people')
        const data: IPeople[] = response.data.results
        const newData = data.map((people: any, index: number) => {
            return {
                ...people,
                id: index + 1
            }
        });
        return newData
    },

    async getById(id: string) {
        const response = await axios.get('people/', {
            params:{
                id
            }
        })
        const data: IPeople[] = response.data
        return data[0]
    }
}