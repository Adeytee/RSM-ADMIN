import React from 'react'
import SideBar from '../../SideBar'

function OriginHub() {
  return (
    <div>
        <SideBar/>
        <main>
            <div className='container-fluid'>
            <p>Operations / Origin hub / Arrival</p>
               <h6>Origin Hub</h6>
               <form>
               <div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <label for="inputPassword4" class="form-label">Pack bag number</label>
<div className='d-flex'>
<input type="password" class="form-control" id="inputPassword4" placeholder='Enter bag number'/>
    <button class="btn btn-primary btn-1 fs-12 px-3 mx-2" type="submit">Search</button> 
</div>
  </div>
               </form>
            </div>
        </main>
    </div>
  )
}

export default OriginHub