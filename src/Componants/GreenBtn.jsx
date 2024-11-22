const GreenBtn = ({
                      maxNum = 9,
                      minNum = 11,
                      text = 'کاربران می خواهند صفحه یا سایت خاصی را پیدا کنند.',
                      color = '[#09814A]',
                      tooltip = true,
                      className
                  }) => {
    return (
        <div
            className={`w-[59px] h-[32px] rounded-full border flex hover:scale-110 relative group duration-300 border-${color} text-${color} ${className}`}>
            <div className={`absolute -top-[100px] hidden flex-col justify-between items-center ${tooltip && 'group-hover:flex'}`}>
                <div className="w-[200px] h-[100px] bg-white shadow-md rounded p-3">
                    <div className="flex flex-col gap-2">
                        <span className="font-medium">تایید شده</span>
                        <p className="text-sm text-primary-gray-100">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">{maxNum}</div>
            <div
                className={`w-[50%] h-full rounded-full text-white flex justify-center items-center bg-${color} ${className}`}
            >
                {minNum}
            </div>
        </div>
    );
};

export default GreenBtn;
