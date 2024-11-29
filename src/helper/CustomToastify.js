import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type = 'error', message = 'message') => {
    const allowedTypes = ["info", "success", "error", "warning"];
    if (allowedTypes.includes(type) && typeof message === 'string') {
        toast[type]?.(message, {
            position: "top-center",
            rtl: true,
        });
    } else {
        toast.error('نوع ورودی نامعتبر است.', {
            position: "top-center",
            rtl: true,
        });
    }
};

