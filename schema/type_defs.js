const { gql } = require("apollo-server");

const typeDefs = gql`
  # TIPAGEM TRADICIONAL DOS OBJETOS A SEREM UTILIZADOS
  type User {
    id_user: ID!
    name_user: String!
    list_of_movies: [Movie]
  }
  type Movie {
    id_movie: ID!,
    name_movie: String!,
    genre_movie: String!,
    year_movie: Int!
  }

  # AQUI DENTRO TODAS AS QUERIES SÃO CHAMADAS (SELECT...)
  type Query {
    users: [User!]!
    detailUser(id_user: ID!): User!
    movies: [Movie!]!
    movie(name_movie: String!): Movie!
  }


  # MUTATIONS (CREATE, DELETE, UPDATE VÃO AQUI)
  
   #inputs
  input CreateUserInput {
    name_user: String!
  }
  input UpdateUsernameInput {
    id_user: ID!
    newUsername: String!
  }

  # Mutation real, equivalente a query, mas para mudanças
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }


  # Enumerador, ele só pegaria dados que estivesse aqui !!!! Se colocar name = yuri no input, o default value será yuri, por exemplo
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }
`;

module.exports = { typeDefs };