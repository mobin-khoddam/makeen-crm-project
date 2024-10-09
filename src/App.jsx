import LoginForm from "./Container/Login/LoginForm.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <section className="h-screen bg-primary-blue flex">
            <Routes>
                <Route path="/" element={<LoginForm />} />
            </Routes>
        <div className="relative flex flex-col items-center w-[60%]">
            <img className="absolute w-[300px] h-[300px] top-0 left-0" src="../src/assets/Login/dot-styles.png" alt=""/>
            <img className="z-10 w-[599px] h-[599px] object-contain" src="../src/assets/Login/login-image.svg" alt=""/>
            <img className="w-[385px] h-[90px] object-contain" src="../src/assets/Login/makeen-text.png" alt=""/>
        </div>
    </section>
  )
}

export default App
