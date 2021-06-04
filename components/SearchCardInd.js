import Image from "next/image";
import Link from "next/link"
import { motion } from 'framer-motion';



const SearchCardInd = ({ thumbnailUrl, nasaId, description, location }) => {

    const uploadPhotoToAlbum = url => {
        console.log(url)
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
            <div className="max-w-4xl flex-col justify-center items-center rounded overflow-hidden shadow-lg">
                <Link href={`/search/${nasaId}`}>
                <Image 
                    src={thumbnailUrl} 
                    height={450}  
                    width={450}
                    className="w-full cursor-pointer" 
                    />
                </Link>        
                <div className="px-6 py-4 cursor-pointer">
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
                    onClick={() => uploadPhotoToAlbum( thumbnailUrl )}
                    variants={buttonVariants}
                    whileHover="hover" 
                    className="text-white border-2 rounded p-4">Save to Album
                    </motion.button>
                </div>
            </div>
    )
}

export default SearchCardInd;