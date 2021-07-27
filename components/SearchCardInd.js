import Image from "next/image";
import Link from "next/link"
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useQuery, useMutation, gql } from "@apollo/client"
import ImageSaveSuccessAlert from '../components/ImageSaveSuccessAlert';
import RepeatedImageAlert from '../components/RepeatedImageAlert';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const SearchCardInd = ({ thumbnailUrl, nasaId, description, location, date }) => {

    console.log(date)

    const [error, setError ] = useState(false);
    const [errorDescription, setErrorDescription] = useState('');
    const [imageSuccessAlert , setImageSuccessAlert ] = useState(false)
    const [imageRepeatAlert , setImageRepeatAlert ] = useState(false)


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

    const [addPhoto, { error: graphqlerror }] = useMutation(ADD_PHOTO);

    console.log(graphqlerror)

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
            <div className="max-w-4xl mt-8 border-2 border-white flex-col justify-center items-center rounded overflow-hidden shadow-lg">
                <div className="flex justify-center mt-24">
                    <Image 
                        src={thumbnailUrl} 
                        height={450}  
                        width={450}
                        className="w-full cursor-pointer" 
                        />
                </div>
                <div className="flex-col items-center px-6 py-4 cursor-pointer">
                    <div className="font-bold text-red-100 text-xl mb-2">
                        {location}
                    </div>
                    <div className="font-bold text-red-100 text-xl mb-2">
                        Nasa ID: {nasaId}
                    </div>
                    <div className="font-bold text-red-100 text-sm mb-2">
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
                <ImageSaveSuccessAlert imageSuccessAlert={imageSuccessAlert} onClick={() => setImageSuccessAlert(false)}/>
                <RepeatedImageAlert error={error} imageRepeatAlert={imageRepeatAlert} onClick={() =>setImageRepeatAlert(false)} />
            </div>
    )
}

export default SearchCardInd;