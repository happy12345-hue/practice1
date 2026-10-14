


import {BrowserRouter,routes,route} from "react-roter-dom"
// import Server from "./Server";
import UseRef from "./UseRef";
const App=()=>{

  return(
    <>
   <BrowserRouter>
   <routes>
    <route
     path="/"
    element=<UseRef/> />
    </routes>
   </BrowserRouter>
    </>
  )
}
export default App;