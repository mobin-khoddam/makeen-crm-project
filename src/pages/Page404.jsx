import image404 from '/src/assets/images/page404/404-error.avif'

const Page404 = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <img src={`${image404}`} alt="404" />
        </div>
    )
}

export default Page404;