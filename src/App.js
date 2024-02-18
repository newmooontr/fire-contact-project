import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import {useState} from "react"
import {AddUser,UpdateUser} from "./utils/functions"
import { ToastContainer } from "react-toastify";

const initialValues={
  username:"",
  phoneNumber:"",
  gender:""
}
function App() {
  const [info, setInfo] = useState(initialValues)
  const [isAdd,setIsAdd]=useState("ADD")
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('yyyyy')
    if(info.id){
      console.log('hhhhh1');

      UpdateUser(info)
    }
    else{
    console.log('hhhhh2');

      AddUser(info)
    }
    setInfo(initialValues)
    setIsAdd("ADD")
  }

  const editUser=(id,username,phoneNumber,gender)=>{
    setIsAdd("UPDATE")
    setInfo({id,username,phoneNumber,gender})
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} isAdd={isAdd} />
      <Contacts editUser={editUser}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
