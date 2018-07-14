import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid" id="contact">
        <h2>Thank you for visiting<br /> Solid Soap.</h2>
        <ul>
          <li><a href="https://www.etsy.com/" target="_blank"><i class="fab fa-etsy"></i></a></li>
          <li><a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
        </ul>
        <p>We do most of our orders and shipping through our Etsy store, for bulk order inquires you can contact us at: <em>SolidSoap@gmail.com</em></p>
      </div>
    );
  }
}

export default Contact;