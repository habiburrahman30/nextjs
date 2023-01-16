import Link from "next/link";

const Navbar = () => {

    // const run = () => {
    //     console.log('Hello');
    // }
    return <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li><Link href="/contact-us">Contact</Link></li>
            <li><Link href="/privacy-policy">Privasy popicy</Link></li>
        </ul>
        {/* <button onClick={run}>Click Me</button>  */}
    </div>;

}

export default Navbar;