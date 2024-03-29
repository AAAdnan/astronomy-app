import Image from "next/image";
import Link from "next/link"
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useQuery, useMutation, gql } from "@apollo/client"
import { format, compareAsc } from 'date-fns'
import ImageSaveSuccessAlert from '../components/ImageSaveSuccessAlert';
import RepeatedImageAlert from '../components/RepeatedImageAlert';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const SearchCard = ({ thumbnailUrl, nasaId, description, location, date }) => {

    const [error, setError ] = useState(false);
    const [errorDescription, setErrorDescription] = useState('');
    const [imageSuccessAlert , setImageSuccessAlert ] = useState(false)
    const [imageRepeatAlert , setImageRepeatAlert ] = useState(false)

    if(errorDescription) {
        console.log(errorDescription)
    }


  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();


    const ADD_PHOTO = gql`
        mutation addPhoto($photo: [AddPhotoInput!]!) {
        addPhoto(input: $photo) {
            photo {
                id
                date
                url
                user {
                    username
                }
                }
            }
        }
    `

  const [addPhoto] = useMutation(ADD_PHOTO, {
      onError: (err) => {
          setErrorDescription(err);
          setImageSuccessAlert(false);
          setImageRepeatAlert(true);
          setError(true);
      }
  });
    
    const uploadPhotoToAlbum = ( url,date ) => {
        console.log(user.email, url, date)
        addPhoto({
            variables: { photo: 
                { url: url, date: date, user: { username: user.email } }
            }
        });        
        setImageSuccessAlert(true);
    }

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

    return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Link href={`/search/${nasaId}`}>
                <Image 
                    src={thumbnailUrl} 
                    height={400}  
                    width={400}
                    className="w-full cursor-pointer" 
                    />
                </Link>        
                <div className="px-6 py-4 cursor-pointer">
                    <div className="font-bold text-red-100 text-base md:text-xl mb-2">
                        {location}
                    </div>
                    <div className="font-bold text-red-100 text-xl mb-2 hidden">
                        Nasa ID: {nasaId}
                    </div>
                    <div className="font-bold text-red-100 text-sm mb-2 hidden">
                        {description}
                    </div> 
                </div>
                <div className="px-6 py-4 flex justify-center">
                    <motion.button 
                    onClick={() => uploadPhotoToAlbum( thumbnailUrl, date )}
                    variants={buttonVariants}
                    whileHover="hover" 
                    className="text-white border-2 rounded p-4">Save to Album
                    </motion.button>
                </div>
                <ImageSaveSuccessAlert error={error} imageSuccessAlert={imageSuccessAlert} onClick={() => setImageSuccessAlert(false)}/>
                <RepeatedImageAlert error={error} imageRepeatAlert={imageRepeatAlert} onClick={() =>setImageRepeatAlert(false)} />
            </div>
    )
}

export default SearchCard;