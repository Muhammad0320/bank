import Image from "next/image"
import Button from "./Button"


function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-6 bg-dark border-1 border-red-600"   >
                <Image src='/assets/images/logo.png' alt="YourBank Logo"  />

                <Button />
        </header>
    )
}

export default Header


