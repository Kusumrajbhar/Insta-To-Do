import React from 'react'

function ErrorPage({history}) {
    console.log('history', history);
    return (
        <div style={{marginLeft:'10px'}}>
            <h1>oops! Page Not Found</h1>
            <h3>404 Error</h3>
            <p>Redirecting to <span style={{color:'dodgerblue', cursor:'pointer'}} onClick={()=> history.push('/')}>Login Page</span></p>
        </div>
    )
}

export default ErrorPage

