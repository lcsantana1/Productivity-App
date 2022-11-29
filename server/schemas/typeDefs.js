const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    fullname: String
    email: String
    userType: [String]!
    todos: [Todo]
  }
  
  type Todo{
_id:ID
title: String
date: String
isCompleted: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(fullname: String!, email: String!, password: String!, userType: String!): Auth
    login(email: String!, password: String!): Auth
  #  addTodo(): User
   # removeTodo(todoId: ID!): User
    #updateTodo(todoId: ID!): User
  }
`;

module.exports = typeDefs;
