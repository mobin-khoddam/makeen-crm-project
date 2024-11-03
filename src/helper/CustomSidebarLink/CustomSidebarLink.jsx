import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


const CustomSidebarLink = ({svg, location, title}) => {
    const [isActive, setIsActive] = useState(false)
    const thisLocation = useLocation();
    useEffect(()=>{
        if (location.split('/')[1] === thisLocation.pathname.split('/')[1]) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [location, thisLocation])
    return (
        <Link className={`flex items-center gap-4 font-semibold w-full ${isActive && 'border-l-4 border-primary-blue'}`} to={location}>
                <div className={`w-6 h-6 ${isActive ? 'bg-primary-blue' : 'bg-[#5C5353]'}`}
                     style={{mask: `url(${svg}) no-repeat center`}}>
                </div>
            <span className={`${isActive ? 'text-primary-blue' : 'text-[#5C5353]'}`}>{title}</span>
        </Link>
    )
}

export default CustomSidebarLink