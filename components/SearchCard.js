import Image from "next/image";
import Link from "next/link"


const SearchCard = ({ thumbnailUrl, nasaId, description, location }) => {

    return (
        <Link href={`/search/${nasaId}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image 
                src={thumbnailUrl} 
                height={400}  
                width={400}
                className="w-full cursor-pointer" 
                />
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
            <div className="px-6 py-4 cursor-pointer">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    Save to Album
                </span>
            </div>
            </div>
        </Link>
    )
}

export default SearchCard;