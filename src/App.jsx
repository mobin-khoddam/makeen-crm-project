import {RouterProvider} from "react-router-dom";
import router from "./Loader/Loader.jsx"


function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  )
}

export default App