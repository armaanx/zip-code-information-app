import { useDispatch, useSelector } from "react-redux";
import InputComponent from "./components/InputComponent"
import Results from "./components/Results"
import { clearData } from "./redux/locationSlice";

function App() {
  
  return (
    <div className="h-screen w-screen bg-stone-950 flex flex-col items-center justify-center antialiased text-white gap-4">
      <h1 className="text-white font-bold text-3xl mb-6">Zip Code Information</h1>
      <div>
        <InputComponent />
      </div>
      <div>
        <Results />
        
      </div>
   </div>
  )
}

export default App
