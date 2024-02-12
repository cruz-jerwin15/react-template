import React from 'react'

export default function Header() {
  return (
    <>
<nav className="navbar navbar-expand-md border-bottom pb-4">
  <div className="container container-lg">
    <a className="navbar-brand" href="#">sneakers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
  <div>
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li className="nav-item">
          <a className="nav-link active pt-4" aria-current="page" href="#">
            <i className="fa-solid fa-cart-shopping text-secondary"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">
            <img src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" 
            className="img-fluid img-thumbnail img-profile border-0" alt="..." />
          </a>
        </li>
      </ul>
  </div>
</nav>
    </>
  )
}
