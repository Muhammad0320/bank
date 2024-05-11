

function Button({children, ...props}) {
    return (
        <button {...props} className="focus:outline-none px-4 py-3 focus:ring-1 flex justify-center items-center  focus:ring-green-500" >
            {children}
        </button>
    )
}

export default Button
