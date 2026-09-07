import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";

function App(){

const[lists,setLists]=React.useState([])
const[food,setFood]=React.useState("") 
const[date,setDate]=React.useState("")
const[expense,setExpense]=React.useState("")

  return(
    
<BrowserRouter>
<Routes>

<Route path="/"
element={<Home
lists={lists}
setLists={setLists}
food={food}
setFood={setFood}
date={date}
setDate={setDate}
expense={expense}
setExpense={setExpense}

/>}/>

<Route path="/products"
element={<Products
lists={lists}
setLists={setLists}
food={food}
setFood={setFood}
date={date}
setDate={setDate}
expense={expense}
setExpense={setExpense}


/>}

/>

</Routes>
   </BrowserRouter> 
  )
}export default App;