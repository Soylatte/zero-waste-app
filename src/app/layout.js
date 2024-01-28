
import Link from "next/link";
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
    <body className="flex-1 flex justify-between items-center">
      <h1 className="font-bold text-2xl">THWN</h1>
    <div className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <Link href='/' className="md:p-4 py-3 px-0 block">HOME</Link>
            <Link href='/about' className="md:p-4 py-3 px-0 block">ABOUT</Link>
            <Link href='/product' className="md:p-4 py-3 px-0 block">PRODUCTS</Link>
            <Link href='/tips' className="md:p-4 py-3 px-0 block">TIPS</Link>
    </div>
    {children}
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 lg:grid-cols-2 lg:grid-cols-4">
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
</footer>

    </body>
    </header>

  );
}