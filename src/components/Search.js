import React from 'react'

export default function Search() {
  return (
    <div style={{marginTop:"200px"}}>
        <input type="text" name="search" id="search" placeholder='search here...' style={{width:"700px",height:"50px"}}/><br/>
        <button className='btn btn-warning mt-5'>Search</button>
    </div>
  )
}
