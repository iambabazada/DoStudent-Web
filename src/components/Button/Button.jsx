import React from 'react'

const Button = ({ bg = "red", width = "sm", children }) => {
    const styleBtn = {
        backgroundColor: bg,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        width: width,
        margin: '10px',
        display: "flex",
        alignItems: "center",
        gap: "10px"
    }

    if (width === 'sm') {
        styleBtn.width = '20px'
    }
    if (width === 'md') {
        styleBtn.width = '50px'
    }
    if (width === 'lg') {
        styleBtn.width = '100px'
    }
    if (width === 'xl') {
        styleBtn.width = '200px'
    }


    return (
        <button style={styleBtn}>
            {children}
        </button>
    )
}

export default Button