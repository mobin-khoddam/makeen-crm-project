import {RouterProvider, useLocation} from "react-router-dom";
import router from "./Loader/Loader.jsx"
import LoginPage from "./pages/Login/LoginPage.jsx";


function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  )
}

export default App