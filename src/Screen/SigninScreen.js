import Axios from "axios";
import { useEffect,useState } from "react";

function SigninScreen(props) {
    const[email, setEmail] = useState('');

    
    useEffect(() => {
        loadData();
      },[]);
    
    const loadData = async () =>{
        const temp = await Axios.get("/hello");
        console.log("a");
        console.log(temp);
        setEmail(temp.data);
    }

    return(
        <div>
            {email}
        </div>
    )
}

export default SigninScreen;