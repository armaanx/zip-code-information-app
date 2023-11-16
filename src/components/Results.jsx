import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

const Results = () => {
    const { data, isLoading, error } = useSelector((state) => state.location);
   
  
    
    
    if (isLoading === true) {
        return <div className="text-white m-3"><Loader2 className="h-8 w-8 animate-spin text-whit"/></div>
    }
    if (error !== '') {
        return (
            <div className="text-black p-3 rounded-lg font-bold flex flex-col items-center justify-center m-3 bg-red-800">
                <h1 className="text-xl font-bold">Error!</h1>
                <p className="text-lg">{error}</p>
                <p className="text-lg">Please try again.</p>
            </div>
        );
    }
    if (data !== null) { 
        return (
            <div>
                <div className="text-white flex flex-col items-center justify-center m-3">
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        {data.places.map((place) => {
                            return (
                                <div key={nanoid()} className="bg-stone-900 p-4 rounded-lg shadow-lg w-full">
                                    <p><span className="font-bold">Place: </span>{place["place name"]}</p>
                                    <p><span className="font-bold">State: </span>{place["state"]}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
           </div>
        );
    }

   
   
 };
export default Results;