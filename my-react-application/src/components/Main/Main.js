import React from 'react'
import Accordion from '../Accordion/Accordion';
import Alert from '../Alert/Alert';
import Badge from '../Badge/Badge';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Checkbox from '../Checkbox/Checkbox';

export default function Main() {
  return (
    <>
    <main>
        <h1>Main</h1>
        <div className="content">
          <div className="row">
              <div id="first" className="col-xxl-12 col-xl-4 col-lg-6 col-md-8 col-12">
                     <Accordion/>
                </div>
                <div id="second" className="col-xxl-12 col-xl-4 col-lg-6 col-md-4 col-12">
                  <Alert/>
                </div>
                <div id="third" className="col-xxl-12 col-xl-4 col-lg-6 col-md-8 col-12">
                     <Badge/>
                     <ButtonGroup/>
                     <Checkbox/>
                </div>
                <div id="fourth" className="col-xxl-12 col-xl-4 col-lg-6 col-md-4 col-12">
                      Box 4
                </div>
          </div>
          
            
        </div>
    </main>
   
    </>
  )
}
