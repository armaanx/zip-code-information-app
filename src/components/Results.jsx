import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../redux/locationSlice";

const Results = () => {
    const { data, isLoading, error } = useSelector((state) => state.location);
    const dispatch = useDispatch();
    console.log(data);
    console.log(isLoading);
    console.log(error);

    const handleClear = () => {
        dispatch(clearData());

      };
    
    
    if (isLoading === true) {
        console.log('loading');
        return <div className="text-white m-3"><Loader2 className="h-8 w-8 animate-spin text-whit"/></div>
    }
    if (error !== '') {
        return (
            <div className="text-red-600 flex flex-col items-center justify-center m-3">
                <h1 className="text-xl font-bold">Error!</h1>
                <p>{error}</p>
                <p>Please try again.</p>
                <button onClick={handleClear} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg">Clear</button>
        </div>);
    }
    if (data !== null) { 
        return (
            <div className="text-center">
            <div className="flex flex-row items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center gap-2">
                <h1>Country- {data.country}</h1>
                <div className="">
                    {data.places.map((place) => {
                        return (
                            <div className="flex flex-col items-center justify-center gap-2 border-2 rounded-lg mt-2 mb-2 p-2 ">
                                <h2>{place["place name"]}</h2>
                                <h3>{place["state"]}</h3>
                            </div>
                        );
                })}
                </div>
            </div>
                </div>
                <button onClick={handleClear} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg">Clear</button>
            </div>
        );
    }

   
   
 };
export default Results;