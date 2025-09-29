import {useState , useCallback} from "react"
import './App.css';

function App() {
  
const [len,setLen] = useState(8);
const [password,setPassword] = useState("");
const [includeNum,setIncludeNum ]  = useState(true);
const [includeChar,setIncludeChar] = useState(false);
  
const generatePassword = useCallback(() =>{
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let nums = "0123456789"
  let chars = "!@#$%^&*()?{}[]<>+=-`~_|/:;'.,₹"
  let pass = ""
  if(includeChar)str += chars
  if(includeNum) str += nums
  for(let i = 1;i<=len;i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)
},[len, includeNum , includeChar ])


return (
  <div>
      <div className="text-3xl font-bold ">{password}</div>
      <div className = "inputFields">
        <input type = "range" min={6} max={15} value={len} onChange={(e)=>{
          generatePassword()
          console.log(password);
          setLen(e.target.value)
        }}></input>
        <label>{len}</label>
        <label>
        <input type="checkBox" onChange={()=>{
          setIncludeChar((prev)=>!prev)
        }}></input>
        includeCharacter
        </label>
        <label>
        <input type="checkBox" onRateChange={() =>{setIncludeNum(prev => !prev)}}></input>
        includeNumber
        </label>
      </div>
      
    </div>
  );
}

export default App;
