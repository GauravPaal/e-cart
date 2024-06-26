import React from 'react'

export function ShoppingFooterComponent() {
  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <h2 className="bi bi-bi-bootstrap-fill" width="30" height="24"><use href="#bootstrap"></use></h2>
      </a>
      <span className="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3 bi bi-twitter"><a> <use href="#twitter"></use></a></li>
      <li className="ms-3 bi bi-instagram"><a><use href="#instagram"></use></a></li>
      <li className="ms-3 bi bi-facebook"><a><use href="#facebook"></use></a></li>
    </ul>
  </footer>
</div>
  )
}
