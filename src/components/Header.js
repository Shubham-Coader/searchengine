import React from 'react'
import Clock from './Clock'

export default function Header() {
  return (
    <div>
        <div className="header">
            <div className="row">
                <div className="col-sm-6 text-dark">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3 className=' text-danger'>9271</h3>
                            <p>Trackers & ads blocked</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>198.0<span>MB</span></h3>
                            <p>Bandwidth saved</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>8<span>minutes</span></h3>
                            <p>Time saved</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 text-dark">
                    <Clock/>
                </div>
            </div>
        </div>
    </div>
  )
}

