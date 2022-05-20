import React, { useState } from 'react'

const Register = () => {
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [user,setUser]=useState("")
    var [pass,setPass]=useState("")
    var [cpass,setCpass]=useState("")

    const subData =() => {
        const data = { "name":name,"email":email, "user": user, "pass": pass,"cpass":cpass }
        console.log(data)

    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label"> Name</label>
                            <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label"> E-mail</label>
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">User name</label>
                            <input onChange={(e)=>{setUser(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Password</label>
                            <input onChange={(e)=>{setPass(e.target.value)}} type="password" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Confirm Password</label>
                            <input onChange={(e)=>{setCpass(e.target.value)}} type="password" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-secondary">LOGIN</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="Login.js" className="href">Back to login</a>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register