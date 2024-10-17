const Pagination = () => {
    return (
        <div className="w-fit mx-auto border">
            <div
                className="join [&_button]:w-10 [&_button]:h-10 [&_button]:bg-white [&_button]:border max-[400px]:[&_button]:w-9 max-[400px]:[&_button]:h-9">
                <button className="join-item !w-[67px] max-[400px]:!w-[60px]">
                    <span>
                        «
                    </span>
                    <span>
                        قبل
                    </span>
                </button>
                <button className="join-item">1</button>
                <button className="join-item btn-active">2</button>
                <button className="join-item">3</button>
                <button className="join-item">4</button>
                <button className="join-item  !w-[67px] max-[400px]:!w-[60px]">
                    <span>
                        بعد
                    </span>
                    <span>
                        »
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Pagination