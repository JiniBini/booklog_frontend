import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <a className="login-btn" href="/login">LOGIN</a>
      </div>
      <div className="header-content">
        <li>
          <ul><a className="list-item" href="/board">board</a></ul>
          <ul><a className="list-item" href="/photo">photo</a></ul>
        </li>
        <a className="header-title" href="/">𝔹𝕠𝕠𝕜𝕃𝕠𝕘</a>
        <li>
          <ul><a className="list-item" href="/guestbook">guestbook</a></ul>
          <ul><a className="list-item" href="/setting">setting</a></ul>
        </li>
      </div>
    </div>
  )
}

export default Header;