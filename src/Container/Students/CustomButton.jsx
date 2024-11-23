import { Link } from "react-router-dom"
import { useDoubleTap } from "use-double-tap"

const CustomButton = ({ text, className, href, onClick }) => {
    const clickHandler = () => {
        setTimeout(()=> onClick(), 100)
    }
    const bind = useDoubleTap(clickHandler)
    return (
        <div>
            {
                href ? <Link {...bind} className={`button bg-primary-blue text-white px-5 py-3 rounded-xl ${className}`} to={href}>
                    {text}
                </Link> :
                    <button {...bind} className={`button bg-primary-blue text-white px-5 py-3 rounded-xl ${className}`}>
                        {text}
                    </button>
            }
        </div>
    )
}

export default CustomButton