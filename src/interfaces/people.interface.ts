export interface IPeople {
    name: string
    id: number
}

export interface IPeopleData {
    peoples: IPeople[]
}

export interface IPeopleDataSingle {
    people: IPeople
}