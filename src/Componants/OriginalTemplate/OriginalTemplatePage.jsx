import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";

const OriginalTemplatePage = ({children}) => {
    return (
        <div className="bg-primary-gray min-h-screen p-8 flex gap-12 max-md:gap-0 max-sm:p-6">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header />
                    {children}
            </div>
        </div>
    )
}

export default OriginalTemplatePage