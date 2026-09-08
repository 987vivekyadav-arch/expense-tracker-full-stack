import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"


function Home({lists,
setLists,
food,
setFood,
date,
setDate,
expense,
setExpense,}){

const saving=lists.reduce(function(acc,item){
    if(item.expense>0){return acc+Number(item.expense)}{return acc}
},0)

const totalExpense=lists.reduce(function(acc,item){
    if(item.expense<0){return acc-Number(item.expense)}{return acc}
},0)

const Total=Number(saving)-Number(totalExpense)

  return(



    
    <div className="home-page">

      <div className="home-header">



        <div className="bottom-navigation">

  <Link to="/" className="nav-item">
    <div>⌂</div>
    <span>Home</span>
  </Link>

  <Link to="/products" className="nav-item">
    <div>＋</div>
    <span>Add</span>
  </Link>

  <div className="nav-item">
    <div>⚙</div>
    <span>Settings</span>
  </div>

</div>

        <Link to="/products" className="product-link">
          PRODUCT
        </Link>

        <div className="title-area">
          <h1>Spendly</h1>
          <p>Keep track</p>
          <p>Spend smarter</p>
        </div>

      </div>


      <div className="balance-card">

        <div className="balance-top">
          <div>
            <h2>Total Balance</h2>
            <p className="balance-number">₹{Total}</p>
          </div>

          <div className="month-box">
            This Month
          </div>
        </div>

      </div>


      <div className="summary">

        <div className="summary-box">
          <h3>Total Saving</h3>
          <p>₹{saving}</p>
        </div>

        <div className="summary-box">
          <h3>Total Expense</h3>
          <p>₹{totalExpense}</p>
        </div>

      </div>


      <div className="list-section">

        <div className="list-title">
          <h2>Recent Transactions</h2>
          <span>See All</span>
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

              </div>

            )
        })}

        </div>

      </div>


      <Link to="/products" className="floating-add">
        <button>+</button>
      </Link>


      <div className="bottom-navigation">

        <Link to="/" className="nav-item active">
          <div>⌂</div>
          <span>Home</span>
        </Link>

        <div className="nav-item">
          <div>▥</div>
          <span>Stats</span>
        </div>

        <div className="nav-item">
          <div>⚙</div>
          <span>Settings</span>
        </div>

      </div>


    </div>
  )
}

export default Home