import Image from "next/image";

const SearchCard = ({ thumbnailUrl, nasaId }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image 
            src={thumbnailUrl} 
            height={400}  
            width={400}
            className="w-full" 
            />
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
                Nasa ID: {nasaId}
            </div>
            <ul>
                <li>
                    <strong>Views:</strong>
                    4000
                </li>
                <li>
                <strong>Downloads:</strong>
                    4000
                </li>
                <li>
                <strong>Likes:</strong>
                    4000
                </li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #3
            </span>
        </div>
    </div>
    )
}

export default SearchCard;