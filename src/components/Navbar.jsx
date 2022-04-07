import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='navbar'>
      <header>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/notes'>
                <a>Notes</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
