import { Link } from "react-router-dom"

const CustomButton = ({ text, className, href, onClick }) => {
    return (
        <div onDoubleClick={onClick}>
            {
                href ? <Link className={`button bg-primary-blue text-white px-5 py-3 rounded-xl ${className}`} to={href}>
                    {text}
                </Link> :
                    <button className={`button bg-primary-blue text-white px-5 py-3 rounded-xl ${className}`}>
                        {text}
                    </button>
            }
        </div>
    )
}

export default CustomButton