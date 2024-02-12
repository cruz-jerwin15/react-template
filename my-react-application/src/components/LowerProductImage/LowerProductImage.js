import React from 'react'

export default function LowerProductImage(props) {
  return (
    <>
         <div className="col-3">
            <img src={props.image_src}
                className="rounded-3 mx-auto d-block" alt="..." />
        </div>
    </>
  )
}
