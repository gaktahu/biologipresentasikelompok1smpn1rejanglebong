import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import astro from '../assets/astronot.png'
import robot from '../assets/robot.png'
import nabel from '../assets/nabel.png'
import atalia from '../assets/atalia.jpg'
import fielbert from '../assets/fielbert.jpg'
import sherina from '../assets/sherina.jpg'
import akbar from '../assets/akbar.jpg'
import tata from '../assets/tata.png'
import artha from '../assets/artha.jpg'
import syeren from '../assets/syeren.png'
import zahrah from '../assets/Zahrah.jpg'
import exaudi from '../assets/exaudi.png'
import hanna from '../assets/hanna.png'
import fauzan from '../assets/fauzan.png'
import twin from '../assets/mockup.png'

export default function Home() {

  return (
    <>
    <section className="bgmain px-3 antialiased lg:px-6">
        <div className="mx-auto max-w-7xl">
            <div className="container py-32 mx-auto text-center sm:px-4">
                <h1 data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Presentasi</span> <span className="relative inline-block mt-3 text-white">Kelompok 1</span></h1>
                <div data-aos="fade-left"  data-aos-delay="150" data-aos-duration="1000"  className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Website presentasi dan bahan untuk pembelajaran kedepannya</div>
                <div data-aos="fade-right"  data-aos-delay="250" data-aos-duration="1000" className="mt-8 text-sm text-indigo-300">Dibuat dengan Next.js dan Tailwind css</div>
            </div>
        </div>
    </section>
    <section className="w-full pt-7 pb-7 md:pt-20 md:pb-24">
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-white border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <Image data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" src={astro} width={712} height={712} className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" />
          </div>

          <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="m-0 text-white text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                  Mengapa Website?
              </h2>
              <p data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000" className="pt-4 pb-8 m-0 leading-7 text-gray-200 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                  Selain sebagai bahan presentasi, kami juga ingin hasil dari diskusi kami dapat dijadikan bahan pembelajaran kedepannya, yang mencakup materi
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                  <li data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000" className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Bayi Kembar
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000" className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Penyakit Kelamin
                  </li>
              </ul>
          </div>
      </div>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-white border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

          <div data-aos="fade-right" data-aos-delay="100" className="box-border w-full text-white border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                  Penjelasan Lengkap
              </h2>
              <p data-aos="fade-left" data-aos-delay="150" className="pt-4 pb-8 m-0 leading-7 text-gray-200 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                  Penjelasan yang kami cari lengkap! Mulai dari penyebab, pengobatan dan pencegahan beberapa penyakit kelamin serta jenis jenis bayi kembar
              </p>
          </div>

          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <Image data-aos="zoom-in" data-aos-delay="250" src={robot} width={712} height={712} className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
          </div>
      </div>
  </section>
<section className="relative py-20 overflow-hidden">
    <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
    </span>

    <span className="absolute bottom-0 left-0"> </span>

    <div className="relative px-16 mx-auto max-w-7xl">
        <p data-aos="fade-right" data-aos-delay="150" className="font-medium tracking-wide text-blue-500 uppercase">OUR TEAM</p>
        <h2 data-aos="fade-right" data-aos-delay="200" className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">An incredible team of <br/>amazing individuals</h2>
        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">

            <div data-aos="zoom-in" data-aos-delay="50" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={nabel} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Nabeel Adriansyah</h3>
                        <p className="text-blue-600">Ketua Kelompok, pemrogram web, pembuat makalah</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={syeren} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Syeren Zaskiamiranda</h3>
                        <p className="text-blue-600">Wakil Ketua Kelompok, perangkum artikel, pengisi suara</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="250" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={fielbert} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Rafie Fielbert Wirasena</h3>
                        <p className="text-blue-600">Anggota Kelompok, pengedit video, perangkum artikel</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="350" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={atalia} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Athalia Nikeisha</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="450" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={sherina} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Sherina Nabila Warman</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel, pencari gambar</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="550" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={fauzan} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Al Fauzan Bintang  Setiawan</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel, pengisi suara</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="650" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={akbar} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>M. Akbar Hidayatullah</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel, pencari gambar, pengisi suara</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="750" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={tata} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Tata Rizki Suma Samosir</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="850" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={artha} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Laisya Arthalita Ivana Sungkar</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel, pencari gambar</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="950" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={zahrah} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Zahra Athirah</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="1050" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={hanna} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Hanna Viola</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel, pengisi suara</p>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="1150" className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <Image  src={exaudi} width={712} height={712}  className="relative z-20 rounded-full" />
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>Exaudi Angeline</h3>
                        <p className="text-blue-600">Anggota Kelompok, perangkum artikel</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </section>
  <section className="font-body">
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-white sm:text-4xl md:mx-auto">Metode Penelitian</h2>
      <p className="text-base text-white md:text-lg">Berikut adalah tahap pengerjaan web kami secara step by step</p>
    </div>
    <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
      <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
        <div className="flex items-center mb-2">
          <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500"> 1 </p>
          <p className="text-lg font-bold leading-5">Mencari dan mencari</p>
        </div>
        <p className="text-sm">Pertama kami mencari sumber informasi yang berhubungan dari website kedokteran dan beberapa jurnal</p>
      </div>
      <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
        <div className="flex items-center mb-2">
          <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500"> 2 </p>
          <p className="text-lg font-bold leading-5">Rangkum dan saring</p>
        </div>
        <p className="text-sm">Kami mengambil intisari dari informasi didalam web dan jurnal tersebut dan merangkum seluruh informasi yang penting</p>
      </div>
      <div className="relative p-5 duration-300 transform   border-2 shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
        <div className="flex items-center mb-2">
          <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500"> 3 </p>
          <p className="text-lg font-bold leading-5">Ilustrasi</p>
        </div>
        <p className="text-sm">Rasanya tidak lengkap apabila sebuah  artikel tidak memiliki gambar. Jadi kami mencari gambar atau ilustrasi yang sesuai.</p>
        <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
      </div>
      <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
        <div className="flex items-center mb-2">
          <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500">4</p>
          <p className="text-lg font-bold leading-5">Makalah</p>
        </div>
        <p className="text-sm">Setelah semua bahan ada, waktunya seluruh informasi tadi disatukan dan dijasikan dalam bentuk makalah dengan Ms. Word dan Canva</p>
      </div>
      <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
        <div className="flex items-center mb-2">
          <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500">5</p>
          <p className="text-lg font-bold leading-5">Waktunya Berubah!</p>
        </div>
        <p className="text-sm">Setelah makalah selesai, kamipun langsung membuat seluruh hasil makalah tadi kedalam bentuk digital</p>
      </div>
    </div>
  </div>
  </section>
  <section>
  <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
                <a href="#_" className="block">
                    <Image className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src={twin} width={800} height={800}/>
                </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    <div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span>Featured</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Artikel Kelompok 1</a></h1>
                    <p className="pt-2 text-sm font-medium">by <a href="#_" className="mr-1 underline">Kelompok 1</a> · <span className="mx-1">Agustus 2022</span> · <span className="mx-1 text-gray-600">12 min read per article</span></p>
                </div>
            </div>
        </div>
    </div>
  </section>
  <section className="relative w-full bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
    <div className="absolute w-full h-32"></div>
    <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">

        <h1 className="mb-1 text-4xl font-extrabold leading-none text-white lg:text-5xl xl:text-6xl sm:mb-3">Artikel Bayi Kembar</h1>
        <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" className="bg1 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110">
                </a>
                <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                    <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Bagian 1.1</a>
                    <h2 className="mb-5 text-5xl font-bold"><Link href="/materi/kembar">Bayi Kembar</Link></h2>
                    <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">Berikut adalah penjelasan mengenai bayi kembar</p>

                </div>
            </div>

            <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" className="bg2 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110">
                </a>
                <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                    <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Bagian 1.2</a>
                    <h2 className="mb-5 text-5xl font-bold"><Link href="/materi/kembar/super">superfetasi & superfekundasi</Link></h2>
                    <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">Selain kembar identik dan tidak identik, berikut jenis kembar lainnya</p>

                </div>
            </div>

            <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                <a href="#_" className="bg3 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                    <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Bagian 1.3</a>
                    <h2 className="mb-5 text-5xl font-bold"><Link href="materi/kembar/siam">Kembar siam</Link></h2>
                    <p className="mb-2 text-lg font-normal opacity-100 text-yellow-50">Kembar siam, terjadi saat pembelahan pada bayi tidak sempurna. Berikut penjelasan dan jenis jenisnya!</p>

                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-gradient-to-b from-violet-600 via-indigo-400 to-indigo-900">
        <div className="absolute w-full h-32"></div>
        <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">

            <h1 className="mb-1 text-4xl font-extrabold leading-none text-white lg:text-5xl xl:text-6xl sm:mb-3">Artikel Penyakit kelamin</h1>
            <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                    <a href="#_" className="bg4 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110">
                    </a>
                    <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Bagian 2.1</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="materi/penyakit/klamidia">Klamidia</Link></h2>
                    </div>
                </div>

                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                    <a href="#_" className="bg5 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110">
                    </a>
                    <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Bagian 2.2</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="materi/penyakit/herpes">Herpes</Link></h2>
                    </div>
                </div>

                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" className="bg6 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                    <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Bagian 2.3</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="materi/penyakit/granuloma">Granuloma Inguinale</Link></h2>
                    </div>
                </div>

                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" className="bg7 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                    <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Bagian 2.4</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="/materi/penyakit/kutil">Kutil Kelamin</Link></h2>
                    </div>
                </div>

                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" className="bg8 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                    <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-400 bg-white">Bagian 2.5</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="materi/penyakit/kutu">Kutu kemaluan</Link></h2>
                    </div>
                </div>

                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" className="bg9 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                    <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-indigo-400 border-t-0 border-indigo-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-indigo-400 bg-white">Bagian 2.6</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="materi/penyakit/mono">Mononukleosis</Link></h2>
                    </div>
                </div>

                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" className="bg10 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                    <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-red-400 border-t-0 border-indigo-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-red-400 bg-white">Bagian 2.7</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="materi/penyakit/sifilis">Sifilis</Link></h2>
                    </div>
                </div>

                <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" className="bg11 block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"></a>
                    <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-green-400 border-t-0 border-indigo-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-green-400 bg-white">Bagian 2.8</a>
                        <h2 className="mb-5 text-5xl font-bold"><Link href="/materi/penyakit/tri">Trikomoniasis</Link></h2>
                    </div>
                </div>

              </div>
            </div>
          </section>
    </>
  )
}
