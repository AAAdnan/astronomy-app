import Image from 'next/image'
import { useQuery, useMutation, gql } from "@apollo/client"

const DELETE_PHOTO = gql`
  mutation deletePhoto($id: ID!) {
    deletePhoto(filter: { id: [$id] }) {
      photo {
        id
      }
    }
  }
`

// const delete = photo =>
// deletePhoto({
//   variables: {
//     id: [photo.id]
//   },
//   refetchQueries: [{
//     query: GET_
//   }]
// })


const ImageCard = ({date, image, id}) => {
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
            <strong>ID: </strong>
            {id}
          </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Upload         
          </span>
        </div>
      </div>
    )
}

export default ImageCard