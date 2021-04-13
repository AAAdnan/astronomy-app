import React from "react"
import { useQuery, useMutation, gql } from "@apollo/client"
import { useRef, useState, useEffect } from "react";
import Head from 'next/head'
import Nav from '../components/Nav'
import { Todos } from "react-todomvc"
import { useAuth0 } from '@auth0/auth0-react';


import "react-todomvc/dist/todomvc.css"

export const GET_USER = gql`
  query getUser($username: String!){
    getUser(username: $username) {
      username
      name
      tasks {
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
    queryTask {
      id
      title
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTask($task: [AddTaskInput!]!) {
    addTask(input: $task) {
      task {
        id
        title
      }
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $todo: TodoPatch!) {
    updateTodo(input: { filter: { id: [$id] }, set: $todo }) {
      todo {
        id
        value
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
      }
    }
  }
`

const CLEAR_COMPLETED_TODOS = gql`
  mutation updateTodo {
    deleteTodo(filter: { completed: true }) {
      todo {
        id
      }
    }
  }
`

const useImperativeQuery = (query) => {
  const { refetch } = useQuery(query, { skip: true });
  const imperativelyCallQuery = (variables) => {
    return refetch(variables);
  };
  return imperativelyCallQuery;
};

function App() {

  const [shownTodos, setShownTodos] = useState([]);

  const [addTodo] = useMutation(ADD_TODO);
  const [del] = useMutation(DELETE_TODO)
  const [upd] = useMutation(UPDATE_TODO)
  const [clear] = useMutation(CLEAR_COMPLETED_TODOS)
  const getUsers = useImperativeQuery(GET_USER)


  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const createUser = () => {
    if (user === undefined) {
      return null;
    }
    const { data: getUser } = getUsers({
      username: user.email
    });
    if (getUser && getUser.getUser === null) {
      const newUser = {
        username: user.email,
        name: user.nickname,
      };
      addUser({
        variables: {
          user: newUser
        }
      })
    }
  }


  const { loading, error, data } = useQuery(GET_TODOS);

  if(data) {
    console.log(data)
  }

  const getData = () => {
    if (loading) {
      return null;
    }
    if (error) {
      console.error(`GET_TODOS error: ${error}`);
      return `Error: ${error.message}`;
    }
    if (data.queryTask) {
      setShownTodos(data.queryTask)
    }
  }


  useEffect(() => {
    getData()
    createUser()
  }, [user, data]) // eslint-disable-line react-hooks/exhaustive-deps

  const add = (title) =>
  addTodo({
    variables: { task: [
      { title: title, completed: false, user: { username: user.email } }
    ]},
    refetchQueries: [{
      query: GET_TODOS
    }]
  });


  const updateTodo = (modifiedTodo) =>
    upd({
      variables: {
        id: modifiedTodo.id,
        todo: {
          value: modifiedTodo.value,
          completed: modifiedTodo.completed,
        },
      },
      update(cache, { data }) {
        data.updateTodo.todo.map((t) =>
          cache.modify({
            id: cache.identify(t),
            fields: {
              value: () => t.value,
              completed: () => t.completed,
            },
          })
        )
      },
    })

  const deleteTodo = (id) =>
    del({
      variables: { id },
      update(cache, { data }) {
        data.deleteTodo.todo.map(t => cache.evict({ id: cache.identify(t) }))
      },
    })

  const clearCompletedTodos = () =>
    clear({
      update(cache, { data }) {
        data.deleteTodo.todo.map(t => cache.evict({ id: cache.identify(t) }))
      },
    })

  const logInOut = !isAuthenticated ? (
    <p>
      <a href="#" onClick={loginWithRedirect}>Log In</a> to use the app.
    </p>
  ) : (
    <p>
      <a href="#" onClick={() => {
        logout({ returnTo: window.location.origin })
      }}>Log out</a> { " "}
      once you are finished, { user.email }
    </p>
  );

  return (
    <div>
      <Head>
        <title>Photo of the day</title>
      </Head>
      <logInOut />
        <Todos
          todos={shownTodos}
          addNewTodo={add}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          clearCompletedTodos={clearCompletedTodos}
          todosTitle="GraphQL Todos"
        />
    </div>
  
  )
}

export default App