import React, { useState } from 'react'
import Register from './Register'

const Login = () => {
    var [user,setUser]=useState("")
    var [pass,setPass]=useState("")

    const subData =() => {
        const data = { "user": user, "pass": pass }
        console.log(data)

    }
  return (
    <div>
        
    
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">User name</label>
                            <input onChange={(e)=>{setUser(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Password</label>
                            <input onChange={(e)=>{setPass(e.target.value)}} type="password" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-success">LOGIN</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="{<Register/>}" className="href">New user click here</a>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login