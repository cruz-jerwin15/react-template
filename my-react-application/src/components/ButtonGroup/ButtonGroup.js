import React from 'react'

export default function ButtonGroup() {
  return (
    <>
    <div className="btn-group ms-2" role="group" aria-label="This is a group button">
        <button type="button" className="btn btn-outline-primary">Left</button>
        <button type="button" className="btn btn-warning">Middle</button>
        <button type="button" className="btn btn-success">Right</button>
    </div>
    
    </>
  )
}
