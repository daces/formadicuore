import React from "react"

export default function Footer(){
    return (
<footer>
<p className="footer__logo"><span>loremipsum</span></p>
  <div className="row text-center">
    <div className="col">
      <h2 className="footer__title">Contact</h2>
      <ul className="footer__menu">
        <li>
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Location</a>
        </li>
      </ul>
    </div>
    <div className="col">
      <h2 className="footer__title">Help</h2>
      <ul className="footer__menu">
        <li>
          <a href="/">FAQ`s</a>
          <a href="/">Shipping</a>
          <a href="/">Return</a>
          <a href="/">Privacy</a>
        </li>
      </ul>
    </div>
    <div className="col">
      <h2 className="footer__title">Social</h2>
      <ul className="footer__menu">
        <li>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Email</a>
          <a href="/">Shop</a>
        </li>
      </ul>
    </div>
    <div className="col-md-4 text-left">
      <h2 className="footer__title">Let`s stay in touch</h2>
      <p>Sign up for new fiocchi every day.</p>
      <input className="footer__input" type="text"/>
      <button className="submit-btn">Sign up</button>
    </div>
  </div>
  <div className="footer__copyright">
    <span>C 2020, A Forma Di Cuore, All rights Reserved</span>
    <span>Secure Payments</span>
  </div>
</footer>
    )
}