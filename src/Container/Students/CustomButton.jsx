import { Link } from "react-router-dom"
import { useDoubleTap } from "use-double-tap"

const CustomButton = ({ text, className, href, onClick }) => {
    const clickHandler = () => {
        setTimeout(()=> onClick(), 100)
    }
    const bind = useDoubleTap(clickHandler)
    return (
        <div
            className={`[&>*]:bg-primary-blue [&>*]:text-white [&>*]:px-5 [&>*]:py-3 [&>*]:rounded-xl [&>*]:active:scale-95 [&>*]:duration-150 w-full font-semibold`}
            {...bind}>
            {
                href ? <Link className={className} to={href}>
                    {text}
                </Link> :
                    <button className={className}>
                        {text}
                    </button>
            }
        </div>
    )
}

export default CustomButton