import Image from "next/image";
import Button from "./Button";
// import {ReactSVG} from 'react-svg';




function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-6 bg-dark border-1 border-red-600"   >
            <div className="h-10 w-20 overflow-hidden " >
                <img src='/assets/images/logo.png' alt="YourBank Logo " />
            </div>

                <Button>
                            {/* <ReactSVG src='/assets/icons/hamburger.svg' /> */}
                </Button> 
        </header>
    )
}

export default Header


