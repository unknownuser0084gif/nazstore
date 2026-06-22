//------FIRST : PASTE <ToastContainer /> IN JSX COMPONENT------------
import { toast, Flip } from 'react-toastify';

export const notifyError = (msg) => toast.error(msg, {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: true,
     progress: undefined,
     theme: 'light',
     transition: Flip,
     pauseOnFocusLoss: false,
     className: "!font-main border border-neutral-300"
});
export const notifySuccess = (msg) => toast.success(msg, {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: true,
     progress: undefined,
     theme:  'light',
     transition: Flip,
     pauseOnFocusLoss: false,
     className: "!font-main border border-neutral-300"
});
export const notifyWarn = (msg) => toast.warn(msg, {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: true,
     progress: undefined,
     theme:  'light',
     transition: Flip,
     pauseOnFocusLoss: false,
     className: "!font-main border border-neutral-300"
});