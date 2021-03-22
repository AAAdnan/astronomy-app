import { useSubscription, gql,useQuery } from "@apollo/client";
import { GET_USER, GET_TODOS } from "../pages/api/resolvers";

const TodoItem = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;


    return (

      data.length !== 0 ? 

    <div class="bg-blue w-full p-8 flex justify-center font-sans">
      {data.queryTodo.map(({ id, title, description, completed }) => (
        <div class="rounded bg-grey-light w-64 p-2">
        <div class="flex justify-between py-1">
          <h3 class="text-sm">Todos</h3>
          <svg class="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/></svg>
        </div>
        <div class="text-sm mt-2">
        <h4 class="text-sm">{ title }</h4>
          <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
              {description}
        </div>
        <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
         { completed ? "Done" : "Pending"}
         </div>
          <p class="mt-3 text-grey-dark">Add a card...</p>
        </div>
      </div>
      ))}
    </div>

    : <p className="text-white">No todos founds</p>
    )
};

export default TodoItem;