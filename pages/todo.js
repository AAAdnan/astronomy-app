import React, { useEffect } from 'react';
import { gql, useQuery, useMutation, useState } from '@apollo/client';
// import history from './history';
import TodoItem from '../components/TodoItem'
import { GET_USER, GET_TODOS, ADD_USER, ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, CLEAR_COMPLETED_TODO, TOGGLE_ALL_TODO } from "../pages/api/resolvers";
import { useAuth0 } from '@auth0/auth0-react';

const ENTER_KEY = 13

const TodoApp = () => {

  const { user } = useAuth0();

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


  return (
    <div>
      <TodoItem />
    </div>
  )
}

export default TodoApp