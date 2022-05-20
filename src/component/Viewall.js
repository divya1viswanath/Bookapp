import React from 'react'

const Viewall = () => {
    const Viewall = () => {
        var viewlist=[]
    }    
  return (
    <div>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                        </tr>
                    </thead>
                    <tbody>
                        {viewlist.map((value,key)=>{
                        return <tr>
                        <td>{value['Book Name']}</td>
                        <td>{value.Author}</td>
                        <td>{value.Price}</td>
                        </tr>
                        })}                  
                                                                                               
                                                                                      
                                                         
                    </tbody>
                    </table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Viewall