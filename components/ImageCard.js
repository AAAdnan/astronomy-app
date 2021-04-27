import Image from 'next/image'

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(filter: { id: [$id] }) {
      todo {
        id
      }
    }
  }
`



const ImageCard = ({date, image}) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image} alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            URL: {image}
          </div>
          <ul>
            <li>
              <strong>Date: </strong>
              {date}
            </li>
            <li>
              <strong>Downloads: </strong>
              4000
            </li>
            <li>
              <strong>Date: </strong>
              4000
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Delete      
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Upload         
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
             #tag3          
          </span>
          <button>Delete</button>
        </div>
      </div>
    )
}

export default ImageCard