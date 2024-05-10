import Image from "next/image"


function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-6 bg-dark border-dark border-1"   >
                <Image src='/assets/images/logo.png' alt="YourBank Logo"  />

                
        </header>
    )
}

export default Header
