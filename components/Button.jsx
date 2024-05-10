

function Button({children, ...props}) {
    return (
        <button {...props} className="outline-none focus:ring-1 focus: ring-green" >
            {children}
        </button>
    )
}

export default Button
