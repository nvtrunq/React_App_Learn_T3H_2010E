import React, {Fragment} from 'react'

const Header = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="header d-flex justify-content-between bg-light">
            <i className="fa fa-arrow-left"></i>
            <h4>Favourites</h4>
            <i className="fa fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header