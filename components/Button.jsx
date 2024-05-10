

function Button({children, ...props}) {
    return (
        <button {...props} className="outline-none focus:ring-1 focus: ring-primary" >
            {children}
        </button>
    )
}

export default Button
