import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Login = () => {
  return (
    <>
        <div className={css(LoginStyle.AppBody)}>
            <p>Login to access the full dashboard</p>
            <form>
            <label htmlFor='email' >Email</label>
            <input type="email" id='email' className={css(LoginStyle.inputs)} /><br/>
            <label htmlFor='password' >Password</label>
            <input type="password" id='password' className={css(LoginStyle.inputs)} /> <br/>
            <button type='submit'>OK</button>
            </form>
        </div>
    </>
  )
}

const LoginStyle = StyleSheet.create({
  AppBody: {
    height: '100%',
    padding: '40px',
    fontSize: '24px',
},
inputs: {
  margin: '0 16px 0 8px'
}
})

export default Login