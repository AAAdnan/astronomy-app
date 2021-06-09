import Image from 'next/image'
import { useQuery, useMutation, gql } from "@apollo/client"
import { motion } from 'framer-motion';

const ImageCard = ({date, image, id}) => {

  const buttonVariants = {
    hover: {
      scale: 1.1,
      opacity: 1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
      }
    }
  }
  
  const ADD_PHOTO = gql`
      mutation addPhoto($photo: [AddPhotoInput!]!) {
        addPhoto(input: $photo) {
          photo {
            id
            date
            url
          }
        }
      }
    `
  
  const GET_PHOTOS = gql`
    query {
      queryPhoto {
        id
        date
        url
      }
    }
  `
  const DELETE_PHOTO = gql`
    mutation deletePhoto($id: ID!) {
      deletePhoto(filter: { id: [$id] }) {
       photo {
         id
        }
      }
    }
  `

  const [deletePhoto] = useMutation(DELETE_PHOTO);

  const deleteSelectedPhoto = id => {
    
  console.log(id)
  
  deletePhoto({
    variables: {
    id: id
  },
      refetchQueries: [{
      query: GET_PHOTOS
    }]
  })}

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image} alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-white text-xl mb-2">
            URL: {image}
          </div>
          <ul className="text-white">
            <li>
              <strong>Date: { date } </strong>
            </li>
            <li>
            <strong>ID: {id }</strong>
            {id}
          </li>
          </ul>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <motion.button 
            onClick={() => deleteSelectedPhoto( id )}
            variants={buttonVariants}
            whileHover="hover" 
            className="text-white border-2 rounded p-4">Delete
          </motion.button>
        </div>
      </div>
    )
}

export default ImageCard;