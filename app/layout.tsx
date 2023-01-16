import Navbar from "./components/navbar"
import Header from "./header/page"
import Image from "next/image"
import FooterComponent from "./components/footer"
import "../styles/globals.css"
import HeaderComponent from "./components/header"
import Footer from "./components/footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      {/* <Navbar /> */}
      {/* <Image
        // loader={myLoader}
        src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Picture of the author"
        width={100}
        height={100}
      /> */}

      <body>
        <div className="container mx-auto py-10 flex flex-col gap-4">
          <Header ></Header >
          {children}
          <Footer ></Footer >
        </div>
      </body>


    </html>
  )
}
