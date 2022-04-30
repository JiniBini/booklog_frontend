import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <a className="title" href="/">𝗕𝗼𝗼𝗸𝗟𝗼𝗴</a>
      <div className="menu">
        <li>
          <ul><a className="item" href="/board">HOME</a></ul>
          <ul><a className="item" href="/photo">ABOUT</a></ul>
          <ul><a className="item" href="/guestbook">BOOKSHELF</a></ul>
          <ul><a className="item" href="/setting">SETTINGS</a></ul>
        </li>
      </div>
    </div>
  )
}

export default Header;