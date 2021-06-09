import React from 'react'

function Button({ children }) {
    console.log(children)
    return (
        <button>
            {children}
        </button>
    )
}

export default Button
