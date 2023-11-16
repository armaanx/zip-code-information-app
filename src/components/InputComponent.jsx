import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setLocation } from "../redux/locationSlice";



const InputComponent = () => {
    const {data, isLoading, error} = useSelector((state) => state.location);
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
   
  return (
      <form onSubmit={handleSubmit} className="flex flex-row gap-2 items-baseline justify-center">
        <input type="text" onChange={handleChange} value={code} className="bg-stone-900 text-white rounded-lg p-2 shadow-lg" placeholder="Enter a zip code" />
        <button disabled={code === ''} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg">Submit</button>
      </form>
    )
 };
export default InputComponent;