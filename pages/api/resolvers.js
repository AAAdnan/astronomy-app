import gql from "graphql-tag";

export const GET_USER = gql`
  query getUser($username: String!){
    getUser(username: $username) {
      username
      name
      todos  {
        id
        title
        completed
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($user: AddUserInput!) {
    addUser(input: [$user]) {
      user {
        username
      }
    }
  }
`;

export const GET_TODOS = gql`
  query {
    queryTodo {
      id
      title
      description
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($todo: [AddTodoInput!]!) {
    addTodo(input: [$todo]) {
      todo {
        id
        title
        description
        completed
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $todo: TodoPatch!) {
    updateTodo(input: { filter: { id: [$id] }, set: $todo }) {
      todo {
        id
        title
        description
        completed
      }
    }
  }
`

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(filter: { id: [$id] }) {
      todo {
        id
        title
        description
        completed
      }
    }
  }
`

const CLEAR_COMPLETED_TODOS = gql`
  mutation updateTodo {
    deleteTodo(filter: { completed: true }) {
      todo {
        id
        title
        description
        completed
      }
    }
  }
`