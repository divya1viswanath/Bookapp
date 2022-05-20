import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
    var [title,setBt]=useState("")
    var [auth,setAuth]=useState("")
    var [price,setPrice]=useState("")

    const subData =() => {
        const data = { "title":title,"auth":auth, "price": price }
        console.log(data)

    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Book Title</label>
                            <input onChange={(e)=>{setBt(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Author</label>
                            <input onChange={(e)=>{setAuth(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Price</label>
                            <input onChange={(e)=>{setPrice(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button onClick={subData} className="btn btn-secondary">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add