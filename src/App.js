import Contacts from "./contacts/Contacts";
import "./App.css";
import FormComponent from "./formComponent/FormComponent";
import { useState } from "react";
import { addUser, EditUser } from "./utils/functions";
import { ToastContainer } from "react-toastify";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "No Info",
};

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      EditUser(info)
    } else {
      addUser(info);
    }
  };

  const handleEdit = (id, username, phoneNumber, gender) => {
    return (
      setInfo({username, phoneNumber, gender, id})
    )  
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
        // onSubmit i ADD butonuna degil formun kendisine onSubmit olarak verdik. 
        // func tanimlamalarini ise burada yapip props olarak gönderdik.
      />
      <Contacts handleEdit = {handleEdit} />
      <ToastContainer />
    </div>
  );
}

export default App;
