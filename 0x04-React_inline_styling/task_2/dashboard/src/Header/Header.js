import React from 'react'
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite'

const Header = () => {
  return (
    <header className={css(headerStyles.AppHeader)}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
  )
}

const headerStyles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '5px solid rgb(226, 28, 28)',
    'img': {
      width: '20%',
    },
    'h1': {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'rgb(226, 28, 28)',
    }
  }
})

export default Header