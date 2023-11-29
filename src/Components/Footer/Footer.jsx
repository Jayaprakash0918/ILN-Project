import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <a href="/#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="/#">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/#">
          <i className="fa fa-youtube"></i>
        </a>
        <a href="/#">
          <i className="fa fa-twitter"></i>
        </a>
      </div>

      <div className="row">
        <ul>
          <li>
            Contact us
          </li>
          <li>
            About us
          </li>
          <li>
            Privacy Policy
          </li>
          <li>
            Terms & Conditions
          </li>
          <li>
            Career
          </li>
        </ul>
      </div>

      <div className="row">
        ILN Copyright © 2023 ILN - All rights reserved || Designed By: ILN Team
      </div>
    </div>
  );
};

export default Footer;
