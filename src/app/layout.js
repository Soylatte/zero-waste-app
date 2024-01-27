import Link from "next/link";
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <body>
      <h1>BiBiBig</h1>
    <div className="navbar">
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/challenge'>CHALLENGE</Link>
            <Link href='/event'>EVENT</Link>
    </div>
    {children}
    </body>

  );
}