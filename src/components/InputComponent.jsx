import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearData, setError, setLoading, setLocation } from "../redux/locationSlice";
import { Search, X } from "lucide-react";



const InputComponent = () => {
    const [code, setCode] = useState('');
    const dispatch = useDispatch();
 
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(setError(''));
        dispatch(setLoading(true));
        if (code.length !== 6 || code === '') { 
            dispatch(setError('Please enter a valid zip code.'));
            dispatch(setLoading(false));
            return;
        }
        try {
            const response = await axios.get(`https://api.zippopotam.us/in/${code}`);
            dispatch(setLocation(response.data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleChange = (e) => {
        setCode(e.target.value);
    };
    const handleClear = () => {
        setCode('');
        dispatch(clearData());
    };
   
  return (
      <form onSubmit={handleSubmit} className="flex flex-row gap-2 items-center justify-center">
          <div className="relative">
            <input type="text" onChange={handleChange} value={code} className="bg-stone-900 text-white rounded-lg p-2 shadow-lg pl-2" placeholder="Enter a zip code" />
            {code && <span onClick={handleClear} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"><X className="font-bold"/></span>}
        </div>
        <button disabled={code === ''} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"><Search className="w-5 h-5" /></button>
      </form>
    )
 };
export default InputComponent;