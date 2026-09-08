import React from "react"
import { Link } from "react-router-dom"
import "./Products.css"



function Products({lists,
setLists,
food,
setFood,
date,
setDate,
expense,
setExpense,}){

function Delete(clickedIndex){ 
 fetch("https://expense-tracker-full-stack-twvt.onrender.com/lists/"+lists[clickedIndex]._id,
{
method:"DELETE",

}
)
.then(function(response){
  return response.json()
})
.then(function(data){
  const newLists=lists.filter(function(currentItem,currentIndex){
    if(clickedIndex!==currentIndex){return true}{return false}
  })
   setLists(newLists)
})
 
  



}

function Save(editIndex){
  fetch("https://expense-tracker-full-stack-twvt.onrender.com/lists/"+lists[editIndex]._id,
{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({food:food,date:date,expense:expense})
}
)
.then(function(response){
  return response.json()
})
.then(function(data){
 
 const newSaveLists=lists.map(function(currentItem,currentIndex){
  if(editIndex===currentIndex){
return data}
{return currentItem}
})
setLists(newSaveLists)
setFood("")
 setDate("")
 setExpense("")



})}
 





  







const[editIndex,setEditIndex]=React.useState(null)

React.useEffect(function(){
  fetch("https://expense-tracker-full-stack-twvt.onrender.com/lists")
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    setLists(data)
  })
},[])




  return(
    <div className="products-page">

      <div className="products-header">

        <Link to="/" className="home-link">
          HOME
        </Link>

        <h1>Add Transaction</h1>

        <p>Record your spending</p>

      </div>


      <div className="input-card">

        <div className="input-title">
          <h2>New Transaction</h2>
          <p>Add your expense details below</p>
        </div>


        <div className="form-area">

          <div className="input-group">

            <label>FOOD / ITEM</label>

            <input
              className="product-input"
              value={food}
              onChange={function(event){setFood(event.target.value)}}
              placeholder="What did you spend on?"
            />

          </div>


          <div className="input-group">

            <label>DATE</label>

            <input
              className="product-input"
              type="date"
              value={date}
              onChange={function(event){setDate(event.target.value)}}
            />

          </div>


          <div className="input-group">

            <label>AMOUNT</label>

            <input
              className="product-input"
              value={expense}
              onChange={function(event){setExpense(event.target.value)}}
              placeholder="Enter amount"
            />

          </div>


          <button
            className="save-button"
            onClick={function(){














              if(editIndex!==null){
                return Save(editIndex)
              }

              else
              {
                fetch("https://expense-tracker-full-stack-twvt.onrender.com/lists",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({food:food,date:date,expense:expense})
}
)
.then(function(response){
  return response.json()
})
.then(function(data){
  setLists([...lists,data])
 setFood("")
 setDate("")
 setExpense("")


})

               
              }

            }}
          >
            {editIndex!==null ? "SAVE CHANGES" : "ADD TRANSACTION"}
          </button>

        </div>

      </div>


  <div className="lists">

        {lists.map(function(item,index){
            return(

              <div className="transaction" key={index}>

                <div className="transaction-icon">
                  ₹
                </div>

                <div className="transaction-details">

                  <div className="food-name">
                    {item.food}
                  </div>

                  <div className="transaction-date">
                    {new
                    Date(item.date).toLocaleDateString("en-GB")
                    }
                  </div>

                </div>

                <div className="transaction-price">
                  ₹{Number(item.expense)}
                </div>

<button onClick={function(){
  Delete(index)
}}
>Delete</button>
<button  onClick={function(){
  setFood(item.food)
setDate(item.date)
setExpense(item.expense)
setEditIndex(index)
}}
>Edit</button>

              </div>

            )
        })}

        </div>






      <div className="product-bottom">

        <Link to="/" className="cancel-link">
          ← Back to Home
        </Link>

      </div>


      <div className="mobile-bottom">

        <Link to="/" className="mobile-nav-item">
          <div>⌂</div>
          <span>Home</span>
        </Link>

        <div className="mobile-nav-item active">
          <div>＋</div>
          <span>Add</span>
        </div>

        <div className="mobile-nav-item">
          <div>⚙</div>
          <span>Settings</span>
        </div>

      </div>

    </div>
  )
}

export default Products