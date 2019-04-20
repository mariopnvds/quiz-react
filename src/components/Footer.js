import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small blue fixed-bottom">
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          IWEB @ <a href="https://etsit.upm.es/" target='_blank'> ETIST - UPM</a>
        </div>
      </footer>
    )
  }
}