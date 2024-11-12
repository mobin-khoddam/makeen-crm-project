import {useState} from "react";
import imageIcon from '../../../assets/images/Students/PersonalInformation/Image.svg'
import {notify} from "../../../helper/CustomToastify.js";
import {ToastContainer} from "react-toastify";
import CustomButton from "../CustomButton.jsx";

function ImageUploader() {
    const [file, setFile] = useState(null);
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"]
    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(URL.createObjectURL(selectedFile))
        } else {
            notify('warning', 'فقط فرمت‌های JPG و PNG قابل قبول هستند.')
        }
        e.target.value = "";
    };

    const handleRemove = () => {
        setFile(null);
    };

    return (
        <div className='max-sm:w-full'>
            <div className="w-[333px] h-[333px] border-4 border-dashed relative flex justify-center items-center max-sm:w-full">
                <div>
                    <img className="w-[70px] h-[45px] mx-auto mb-5" src={imageIcon} alt=""/>
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <span className="text-[#3B82F6] font-semibold">browse</span>{' '}
                            <span>فایل خود را اینجا بیاندازید</span>
                        </div>
                        <p> PNG, JPG (MAX. ۸۰۰x۴۰۰px)</p>
                    </div>
                </div>
                {file && <img className="absolute w-full h-full object-cover" src={file} alt="Uploaded preview"
                              width="100"/>}
                <input className="absolute  w-full h-full opacity-0" type="file" accept=".jpg/.png"
                       onChange={handleChange}/>
            </div>
            {file && <div onClick={handleRemove}><CustomButton text="حذف عکس"/></div>}
            <ToastContainer/>
        </div>
    );
}

export default ImageUploader;
