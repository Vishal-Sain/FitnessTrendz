import React, { useState } from 'react'
// import { FaSearch } from 'react-icons/fa'
var data= require("./Mock_Data.json")

function Navbar1() {

    const [value,setValue]=useState('');

    const onChange=(event)=>{
        setValue(event.target.value);
    };
    const onSearch=(searchTerm)=>{
        // our api to fetch the search result
        setValue(searchTerm)
        console.log("search", searchTerm);
    };

  return (
    <>
        <navbar className="nav1">
            <div className="nav1-in">
                <div className="nav1-inside">
                    <div className="fit-logo">
                        <a href="/">
                            <img src="https://thumbs.dreamstime.com/b/gym-logo-fitness-center-design-template-black-barbell-isolated-white-background-vector-103252465.jpg" alt="" />
                        </a>
                    </div>
                    <div className="fit-search">
                        <form className="fit-search-in">
                            <button onClick={()=>onSearch(value)} className='search-prod' >
                            <img className='search-prod-img' src="https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=" alt="" />
                            </button>
                            <input value={value} onChange={onChange} className='yes' type="text" placeholder='Enter the product here to search' />
                        </form>
                        <div className="dropdown">
                            {
                                data.filter(item =>{
                                    const searchTerm = value.toLowerCase();
                                    const Name= item.Name.toLowerCase();
                                    return searchTerm && Name.startsWith(searchTerm) && Name!==searchTerm
                                }).slice(0,10)
                                .map((item)=>{
                                    return <div onClick={()=>onSearch(item.Name)} className="dropdown-row" key={item.Name} >{item.Name}</div>
                                })
                            }
                        </div>
                    </div> 
                    <div className="fit-cart">
                        <div className="fit-cart-in">
                        <button className="btn-login">
                            Login
                        </button>
                        <button className="btn-login-cart">
                            <div className="login-cart">
                                <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" />
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </navbar>
    </>
  )
}

export default Navbar1
