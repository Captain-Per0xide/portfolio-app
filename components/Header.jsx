import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-2 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
           <Link href="#">
           <h1 className="text-4xl font-semibold">
            MALLIK<span className="text-accent">.</span>
           </h1>
            </Link>


            {/* desktop nav & hire me button*/}
            <div className="hidden xl:flex items-center gap-8">

            <Nav />
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
            </div>

{/*Mobile nav */}
<div className="xl:hidden">Mobile Nav</div>
        </div>
    </header>
  )
}

export default Header