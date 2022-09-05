import '../styles/globals.css'
import Link from 'next/link'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
   AOS.init({
     easing: 'ease-out-cubic',
     once: false,
     offset: 200,
     delay: 50,
   });
 });
  return <>
  <section className="w-full shadow dark:shadow-slate-800">
    <div className="container flex items-center justify-between mx-auto overflow-hidden font-medium max-w-7xl h-16 px-4 md:overflow-visible md:flex-row md:justify-around lg:justify-center">
      <div className="items-start justify-center w-full space-x-6 text-center text-sm hidden md:w-2/3 md:mt-0 md:flex-row md:items-center md:flex md:justify-start lg:space-x-8">
      <Link href="/" className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 md:text-center md:text-primary-500 lg:mx-3">Home</Link>
      <Link href="/templates" className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Bayi Kembar</Link>
      <Link href="/components" className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Penyakit Kelamin</Link></div>
      <div className="flex items-center justify-start h-full pr-4 md:w-1/4 md:justify-center md:pr-0"><Link href="/" className="py-4 flex md:py-0">
          <h1 className="text-2xl font-bold tracking-tighter text-primary-500">Kelompok 1.</h1>
        </Link></div>
    </div>
  </section>
  <Component {...pageProps} />
  </>
}

export default MyApp
