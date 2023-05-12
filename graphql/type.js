import { buildSchema } from 'graphql'
import userModel from './userModel.js'

let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        companyId: 1
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        companyId: 2
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        companyId: 3
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        companyId: 4
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        companyId: 5
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        companyId: 6
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        companyId: 7
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        companyId: 8
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        companyId: 9
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        companyId: 10
    }
]

let companies = [
    {
        id:1,
        "name": "Romaguera-Crona",
    },
    {
        id:2,
        "name": "Deckow-Crist",
    },
    {
        id:3,
        "name": "Romaguera-Jacobson",
    },
    {
        id:4,
        "name": "Robel-Corkery",
    },
    {
        id:5,
        "name": "Keebler LLC",
    },
    {
        id:6,
        "name": "Considine-Lockman",
    },
    {
        id:7,
        "name": "Johns Group",
    },
    {
        id:8,
        "name": "Abernathy Group",
    },
    {
        id:9,
        "name": "Yost and Sons",
    },
    {
        id:10,
        "name": "Hoeger LLC",
    },
]  

export const schema = buildSchema(`
    type User{
        name:String!
        username:String!
        email:String!
        companyId: Int!
    }
    type Company{
        id: Int!
        name: String!
    }
    type Query{
        users: [User]!
        companies: [Company]!
        user(id: String!):User
        company(id: Int!):Company
    }
    type Mutation{
        addUser( name: String!, username: String!, email:String!, companyId: Int!): User
        addCompany(id: Int!, name: String!):Company
        remaveUser(id: Int!):User
        removeCompany(id: Int!):Company
        updateUser(id: String!, name: String!, username: String, email:String, companyId: Int): User
        updateComp(id: String!, name: String!, username: String, email:String, companyId: Int): Company
    }
`)

export const rootValue = {
    users: async () => await userModel.find(x),
    companies: () => companies,
    user: ({ id }) => users.find((user) => user._id === id),
    company: ({ id }) => companies.find((company) => company.id === id),
    addUser: async ({ name, username, email, companyId }) => {
        const newUser = { id, name, username, email, companyId }
        await userModel.create(newUser)
        return newUser;
    },
    addCompany: ({ id, name }) => {
        companies.push({ id, name })
        return id
    },
    removeUser: ({ id }) =>{
        users = users.filter((user) => user.id !== id)
        return users.length
    },
    removeCompany: ({ id }) =>{
        companies = companies.filter((comp) => comp.id !== id)
        return comp.length
    },
    updateUser: ({ id, name, username, email, companyId }) =>{
        const newUser = { id, name, username, email, companyId }
        users = users.map((user)=> user.id === id? newUser : user)
        return newUser
    },
    updateComp: ({ id, name }) =>{
        const newComp = { id, name }
        companies = companies.map((comp)=> comp.id === id? newComp : comp)
        return newComp
    },
}
