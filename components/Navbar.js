'use client';
// import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {
  // const user= useUser()
  // console.log(user.user?.id)

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>RagaChat</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>Home</a>
        </li>
        {/* <li style={styles.navItem}>
          <a href="/about" style={styles.navLink}>About</a>
        </li> */}
        <li style={styles.navItem}>
          <a href="/forums" style={styles.navLink}>Forums</a>
        </li>
        <li style={styles.navItem}>
          <a href="/chat" style={styles.navLink}>UserChat</a>
        </li>
        <li style={styles.navItem}>
            <UserButton/>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#00bcd4',
  },
};

export default Navbar;
