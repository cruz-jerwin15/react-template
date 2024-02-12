import React from 'react'
import LowerProductImage from '../LowerProductImage/LowerProductImage'

export default function Main() {
  return (
    <>
     <main>
        <div className="row">
            <div className="col-md-6 left-column mt-5">
                
                <div className="top-image">
                    <img src="https://cdn.shopclues.com/images1/detailed/91648/140486428-91648764-1535529283.jpg"
                     className="rounded mx-auto d-block" alt="..." />
                </div>
                <div className="bottom-image mt-4">
                    <div className="image-container">
                        <div className="row">
                           <LowerProductImage image_src="https://cdn.shopclues.com/images1/detailed/91648/140486428-91648764-1535529283.jpg"/>
                           <LowerProductImage image_src="https://tse3.mm.bing.net/th?id=OIP.t6Qls-RQ-Pla0id_4ckTGwHaHa&pid=Api&P=0&h=220"/>
                           <LowerProductImage image_src="https://tse1.mm.bing.net/th?id=OIP.aQlE3pSwmjR5tcBISiNOXQHaE8&pid=Api&P=0&h=220"/>
                           <LowerProductImage image_src="https://tse4.mm.bing.net/th?id=OIP.9m-7Hp_WHn_IvaRBZIxkBQHaFj&pid=Api&P=0&h=220"/>
                        </div>
                    </div>
                    
                </div>


            </div>
            <div className="col-md-6">
                RIGHT
            </div>
        </div>
     </main>
    </>
  )
}
