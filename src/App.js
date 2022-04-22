import Contacts from "./contacts/Contacts";
import "./App.css";
import FormComponent from "./formComponent/FormComponent";
import { useState } from "react";
import { addUser } from "./utils/functions";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "No Info",
};

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addUser(info);
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
      <Contacts />
    </div>
  );
}

export default App;
