import React from 'react'

export default function Checkbox() {
  return (
    <>
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
        <label className="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

        <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
        <label className="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

        <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" />
        <label className="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
    </div>
    </>
  )
}
