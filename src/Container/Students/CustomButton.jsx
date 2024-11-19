const CustomButton = ({text, className}) => {
    return (
        <div>
            <button className={`button bg-primary-blue text-white px-5 py-3 rounded-xl ${className}`}>{text}
            </button>
        </div>
    )
}

export default CustomButton