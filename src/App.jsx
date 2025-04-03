import { DropZone } from "./components";
import  {useFileReader} from "./hooks/useFileReader";


function App() {
  const [{result, error, file,}, setFile] = useFileReader({
    method: "readAsDataURL",
    accept : ["image/png, image/jpg, image/jpeg"],
    maxFileSize: 5,
  });

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center p-2 bg-white-50 font-poppins">
        <DropZone setFile={setFile}/>
        <img src={result} alt="" />
      </div>
    </>
  )
}

export default App
