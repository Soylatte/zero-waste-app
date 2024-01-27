
import Link from "next/link";
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <body>
      <h1 className="font-bold text-2xl">GIGU</h1>
    <div className="navbar">
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/challenge'>CHALLENGE</Link>
            <Link href='/event'>EVENT</Link>
            <Link href='/singup'>Sign Up</Link>
    </div>
    {children}
    <footer>
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
      </a>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
      <div className="flex">
        <p className="mr-1 text-gray-800">Phone:</p>
        <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">01638769042</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Email:</p>
        <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">soyeonyiui@gmail.com</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Address:</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
          59 Davisille road,
          London UK
        </a>
      </div>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600">
      © Copyright 2024 GIGU. All rights reserved.
    </p>
  </div>
</div>
</footer>

    </body>

  );
}