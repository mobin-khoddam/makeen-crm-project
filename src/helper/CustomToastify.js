import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type = 'error', message = 'message') => {
    const allowedTypes = ["info", "success", "error", "warning"];
    const checkTypes = allowedTypes.includes(type);
    if (checkTypes && typeof message === 'string') {
        toast[type](message, {
            position: "top-center",
            rtl: true,
        });
    } else {
        toast.error('تایپ ورودی نامعتیر هست', {
            position: "top-center",
            rtl: true,
        });
    }
};
