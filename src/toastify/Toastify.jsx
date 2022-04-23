

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = (msg) => {
  return (
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }) )
};

export default Toastify;

// yukarida css icin ve toast icin import lar önemli.
// toastify sitesine gittigimizde, toast un detaylarini ayarlama kismi demo ya tiklayinca cikiyor

// islem sirasi:
// önce app.js de toastContainer olusturulur
// ayri bir component da toast olusturulur
// kullancagimiz yerde cagrilir