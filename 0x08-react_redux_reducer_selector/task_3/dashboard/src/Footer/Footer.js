import React from 'react'
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css'
import AppContext from '../App/AppContext'

const Footer = () => {
  return (
    <AppContext.Consumer>
      {
        (context) => {
          return(
            <footer className='App-footer'>Copyright {getFullYear()} - {getFooterCopy(true)}
            
            <p>{context.user.isLoggedIn && <a href='#'>Contact us</a>}</p>
            </footer>
          )

        }
      }
    </AppContext.Consumer>
  )
}

export default Footer