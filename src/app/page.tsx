import Image from "next/image";
import Logo from '@/Images/logo.svg'
import CardMoedas from "@/Components/CardMoedas/Index"

export default function Home() {



  return (
    <>
      <header>
        <nav className="container container_nav-bar">
          <Image src={Logo} alt="" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="container_main">
        <CardMoedas />
      </main>
      <footer>

      </footer>
    </>
  )
}
