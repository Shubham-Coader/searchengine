import React from 'react'
import Clock from './Clock'

export default function Header() {
  return (
    <div>
        <div className="header">
            <div className="row">
                <div className="col-md-6 text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className=' text-danger' style={{fontSize:"40px"}}>9271</h3>
                            <p>Trackers & ads blocked</p>
                        </div>
                        <div className="col-md-4">
                            <h3 style={{fontSize:"40px", color:"#6a5acd "}}>198.0<span style={{fontSize:"30px"}}>MB</span></h3>
                            <p>Bandwidth saved</p>
                        </div>
                        <div className="col-md-4">
                            <h3 style={{fontSize:"40px"}}>8<span style={{fontSize:"30px"}}>minutes</span></h3>
                            <p>Time saved</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 text-light" style={{fontSize:"40px"}}>
                    <Clock/>
                </div>
            </div>
        </div>
    </div>
  )
}

