// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/css/effect-creative';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'
import kembar1 from '../../../assets/herp.jpg'
import abs from '../../../assets/abs.jpg'
import gerp from '../../../assets/gerp.jpg'
import meds from '../../../assets/meds.jpg'
import gej from '../../../assets/gej.jpg'

export default function Article(){
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={90}
      slidesPerView={1}

      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect="coverflow"
    >
      <SwiperSlide>
        <section className="px-2 py-32 md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="text-white block xl:inline">Penyakit</span>
                  <span className="block text-indigo-600 xl:inline"> Herpes</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.2 | Penyakit Kelamin</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                  <Image src={kembar1} width={728} height={455}/>
                </div>
            </div>
          </div>
        </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:flex xl:items-center">
            <h1 className="text-3xl font-bold tracking-tight text-purple-100 sm:text-4xl lg:w-1/2">Apa itu Herpes?</h1>
            <p className="text-lg mt-3 sm:mt-2 lg:w-1/2 lg:pl-20">Dikutip dari alodokter Herpes adalah kelompok virus yang dapat menyebabkan infeksi. Infeksi virus herpes umumnya ditandai dengan kulit kering, luka lepuh, atau luka terbuka yang berair. Herpes simplex virus (HSV) dan varicella-zoster virus (VZ) adalah jenis virus herpes yang umum menyerang manusia.</p>
          </div>
        </div>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <p className="text-center text-lg mt-2">Virus herpes dapat menyerang siapa saja. Adanya riwayat kontak dengan penderita infeksi virus ini dan daya tahan tubuh yang sedang lemah adalah faktor yang dapat meningkatkan risiko seseorang terinfeksi virus herpes.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-14">
       <div className="xl:mx-auto xl:max-w-7xl xl:px-4">
         <h5 className="mb-2 font-extrabold leading-none text-center text-2xl md:pl-2 lg:text-3xl">
           <p className="text-slate-100">Jenis Jenis</p>
           <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-50 via-purple-300">Herpes</p>
         </h5>
         <p className="text-center lg:max-w-xl lg:mx-auto">Virus herpes terbagi dalam tiga kelompok besar, yaitu alpha (α) herpesvirus, beta (β) herpesvirus, dan gamma (γ) herpesvirus. Dari tiga kelompok tersebut, ada delapan jenis virus herpes yang dapat menginfeksi manusia, yaitu:</p>
         <div className="grid gap-3 row-gap-3 mt-8 lg:grid-cols-3">
           <ul className="space-y-3">
             <ul className="list-disc list-inside flex flex-col gap-y-4">
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>1) Herpes simplex virus tipe 1 (HSV 1)
               </li>
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>4) Varicella-zoster virus (VZV)
               </li>
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>7) Herpesvirus 7
               </li>
             </ul>
           </ul>
           <ul className="space-y-3">
             <ul className="list-disc list-inside flex flex-col gap-y-4">
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>2) Herpes simplex virus tipe 2 (HSV 2)
               </li>
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>5) Cytomegalovirus (CMV)
               </li>
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>8) Herpesvirus 8 sarkoma kaposi
               </li>
             </ul>
           </ul>
           <ul className="space-y-3">
             <ul className="list-disc list-inside flex flex-col gap-y-4">
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>3) Epstein-Barr virus (EBV)
               </li>
               <li className="flex items-center gap-x-3">
                 <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                   </svg></div>6) Herpesvirus 6 (HBLV)
               </li>
             </ul>
           </ul>
         </div>
       </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-slate-100 sm:text-4xl md:mx-auto">Penyebab Herpes</h2>
          <p className="text-base md:text-lg">Meski banyak jenis virus herpes yang dapat menyerang manusia, tetapi kelompok alfa herpesvirus lah yang paling sering menyebabkan infeksi. Beberapa jenis virus dari kelompok ini adalah:</p>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 1 </p>
              <p className="text-lg font-bold leading-5">Herpes simplex virus tipe 1 (HSV 1)</p>
            </div>
            <p className="text-sm">HSV 1 dapat menyebar melalui kontak langsung dari penderita herpes ke orang yang sehat, misalnya lewat berciuman, berbagi pakai peralatan makan atau kosmetik bibir, seperti lipstik.</p>
          </div>
          <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 2 </p>
              <p className="text-lg font-bold leading-5">Herpes simplex virus tipe 2 (HSV 2)</p>
            </div>
            <p className="text-sm">Virus HSV 2 menular melalui kontak langsung dengan luka pada penderita herpes, misalnya saat berhubungan seksual. Pada kasus yang jarang terjadi, HSV 2 juga dapat ditularkan dari ibu kepada bayinya pada saat persalinan.</p>
          </div>
          <div className="relative p-5 duration-300 transform   border-2 shadow-sm hover:-translate-y-2 border-purple-500 bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 3 </p>
              <p className="text-lg font-bold leading-5">VZV</p>
            </div>
            <p className="text-sm">VZV utamanya menular melalui kontak langsung dengan penderita cacar air. Infeksi virus ini dapat dikenali dengan timbulnya bintil kulit yang berisi cairan (vesikel). VZV juga bisa menular melalui kontak langsung dengan cairan yang ada di dalam vesikel atau percikan liur yang keluar saat penderita bersin atau batuk.</p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Faktor Resiko</h1>
            </div>
            <iframe  classNameNameName="w-5/6 aspect-video" src="https://www.youtube.com/embed/_H0_UFNnyQY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div  classNameName="relative">
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans font-bold leading-none tracking-tight text-2xl md:mx-auto">Untuk jenis virus herpes simplex tipe 1 atau tipe 2, beberapa faktor berikut dapat meningkatkan risiko terinfeksi virus ini:</h2>
          </div>
          <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">1) Berjenis kelamin perempuan</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">2) Sering bergonta-ganti pasangan seksual</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">3) Memiliki daya tahan tubuh yang lemah akibat mengonsumsi obat tertentu atau menderita HIV/AIDS</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">4) Menderita penyakit menular seksual</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight md:mx-auto">Sementara beberapa faktor yang dapat membuat seseorang lebih berisiko terinfeksi virus VZV adalah:</h2>
       </div>
       <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">1) Berusia di bawah 12 tahun</span>
         </div>
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">2) Memiliki riwayat kontak langsung dengan penderita cacar air</span>
         </div>
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">3) Bekerja atau beraktivitas di sekolah atau fasilitas khusus anak-anak, terutama jika ada anak yang sedang mengalami cacar air</span>
         </div>
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">4) Memiliki daya tahan tubuh yang lemah, baik akibat penyakit maupun efek samping obat-obatan</span>
         </div>
       </div>
     </div>
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight md:mx-auto">virus VZV juga bisa menyebabkan herpes zoster. Beberapa faktor dan kondisi yang bisa meningkatkan risiko seseorang mengalami herpes zoster, yaitu:</h2>
       </div>
       <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">1) Berusia 60 tahun ke atas</span>
         </div>
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">2) Memiliki riwayat cacar air sebelumnya</span>
         </div>
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">3) Menderita penyakit yang dapat melemahkan sistem kekebalan tubuh, seperti HIV/AIDS atau kanker</span>
         </div>
         <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
           <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                 <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
               </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">4) Sedang menjalani kemoterapi, radioterapi, atau menggunakan obat imunosupresan</span>
         </div>
       </div>
     </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Gejala Herpes</h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg className="w-4 text-purple" className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg></span></div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold text-purple">Stadium Primer</p>
                <p className="">Stadium primer terjadi pada hari ke-2 hingga ke-8 setelah infeksi herpes terjadi. Gejala yang muncul pada fase ini adalah ruam lepuh (blister) pada kulit yang berukuran kecil dan terasa sakit.
                  Ruam lepuh biasanya berisi cairan berwarna bening atau keruh. Ruam lepuh dapat pecah sehingga menimbulkan luka terbuka. Area di sekitar ruam lepuh juga akan berwarna kemerahan.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg className="w-4 text-purple" className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg></span></div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold text-purple">Stadium Laten</p>
                <p className="">Pada stadium ini, ruam lepuh dan luka yang sebelumnya muncul akan mereda. Namun, pada fase ini, virus sedang berkembang dan menyebar ke saraf di dekat saraf tulang belakang yang ada di bawah kulit.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg className="w-4 text-purple" className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg></span></div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold text-purple">3. Stadium peluruhan</p>
                <p className="">Virus mulai berkembang biak pada ujung saraf organ tubuh. Jika ujung saraf yang terinfeksi terletak pada organ tubuh yang menghasilkan cairan, seperti testis atau vagina, maka virus herpes dapat terkandung dalam cairan tubuh seperti air mani dan lendir vagina. Biasanya, pada fase ini, penderita tidak mengeluhkan gejala khusus.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg className="w-4 text-purple" className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg></span></div>
                </div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold text-purple">4. Stadium rekurensi (kemunculan kembali)</p>
                <p className="">Pada stadium ini, ruam lepuh pada kulit yang terjadi di stadium primer dapat muncul kembali, tetapi biasanya tidak separah lepuhan dan luka yang sebelumnya. Gejala lain yang bisa timbul pada stadium rekurensi ini adalah gatal, kesemutan, dan nyeri yang muncul di area infeksi pada stadium pertama.
                <br/>gejala lainnya seperti
                    1)	Demam
                    <br/>
                    2)	Kelelahan
                    <br/>
                    3)	Sakit kepala
                    <br/>
                    4)	Nyeri otot
                    <br/>
                    5)	Hilang nafsu makan
                    <br/>
                    6)	Pembengkakan kelenjar getah bening
                    </p>
              </div>
            </div>
          </div>
          <div className="relative"><Image alt="No alt" src={abs} width={960} height={1568} className="inset-0 object-bottom w-full rounded h-96 object-fill lg:absolute lg:h-full" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-slate-100 sm:text-4xl md:mx-auto">• Gejala infeksi HSV 1 atau herpes oral</h2>
            <p className="text-base md:text-lg">Pada kondisi ini, gejala akan timbul di mulut dan area di sekitarnya. Gejala yang dapat muncul adalah:</p>
          </div>
          <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
            <div className="p-5 duration-300 transform border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 1 </p>
                <p className="text-lg font-bold leading-5">Nyeri, gatal, rasa terbakar, atau tertusuk di bibir</p>
              </div>
            </div>
            <div className="p-5 duration-300 transform border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 2 </p>
                <p className="text-lg font-bold leading-5">Luka lepuh, lenting-lenting kecil, atau sariawan di bibir</p>
              </div>
            </div>
            <div className="relative p-5 duration-300 transform border-2 shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 3 </p>
                <p className="text-lg font-bold leading-5">Luka lepuh yang terasa nyeri sehingga mengganggu proses makan</p>
              </div>
              <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-slate-100 sm:text-4xl md:mx-auto">• Gejala infeksi HSV 2</h2>
          <p className="text-base md:text-lg">Pada penderita infeksi HSV 2 atau herpes genital, beberapa gejala yang umumnya dialami adalah:</p>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-5 duration-300 transform border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 1 </p>
              <p className="text-lg font-bold leading-5">Pembengkakan pada kulit kelamin atau area di sekitarnya yang terasa gatal, nyeri, dan disertai sensasi terbakar</p>
            </div>
          </div>
          <div className="p-5 duration-300 transform border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 2 </p>
              <p className="text-lg font-bold leading-5">Luka yang terasa nyeri di kemaluan, bokong, anus, atau paha</p>
            </div>
          </div>
          <div className="relative p-5 duration-300 transform border-2 shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 3 </p>
              <p className="text-lg font-bold leading-5">Nyeri pada saat buang air kecil (dysuria)</p>
            </div>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
          </div>
          <div className="p-5 duration-300 transform border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500">4</p>
              <p className="text-lg font-bold leading-5">Keluarnya cairan dari vagina</p>
            </div>
          </div>
          <div className="p-5 duration-300 transform border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500">5</p>
              <p className="text-lg font-bold leading-5">Kulit penis kering, perih, dan gatal</p>
            </div>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Gejala VZV</h1>
              <p className="text-center text-lg mt-2">Sedangkan pada infeksi herpes zoster virus yang menyebabkan cacar air, akan timbul ruam kulit berisi cairan (vesikel) yang terasa gatal. Ruam ini dapat menyebar ke seluruh tubuh.
                Jika penderita cacar air yang sudah sembuh mengalami herpes zoster, akan muncul keluhan pada salah satu sisi bagian tubuh, seperti nyeri, sensasi panas, dan diikuti dengan munculnya lepuh di kulit.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Pemeriksaan Dokter</h1>
              <p className="text-center text-lg mt-2">
              Lakukan pemeriksaan ke dokter jika Anda mengalami gejala herpes seperti yang telah disebutkan di atas, terutama jika timbul ruam lepuh di kulit yang tidak diketahui penyebabnya.
              <br/><br/>
              Pemeriksaan perlu segera dilakukan jika ruam lepuh timbul pada anak Anda yang berusia kurang dari 8 minggu. Infeksi virus herpes pada bayi dapat berkembang lebih cepat hingga bisa menyebabkan terjadinya komplikasi serius.
              <br/><br/>
              Jika Anda memiliki daya tahan tubuh yang lemah, lakukan pemeriksaan ke dokter saat timbul ruam lepuh pada kulit. Infeksi yang parah dan komplikasi lebih mudah terjadi pada penderita herpes yang memiliki daya tahan tubuh lemah.
              <br/><br/>
              Kesulitan saat makan akibat infeksi HSV 1 berisiko menyebabkan dehidrasi. Segera cari pertolongan medis jika mengalami dehidrasi akibat infeksi virus ini, yang ditandai dengan jumlah urine berkurang, mulut kering, kelelahan, dan mudah marah.
              <br/><br/>
              Khusus ibu hamil yang sedang atau pernah menderita herpes genital, konsultasikan dengan dokter terkait hal yang harus dilakukan untuk mencegah virus menular ke bayi.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
         <div className=""><Image alt="No alt" src={gerp} className="object-cover w-full h-56 sm:h-96" width={640} height={360} /></div>
         <div className="flex flex-col justify-center">
           <div className="max-w-xl mb-6">
             <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="">Diagnosis</span><br /><span className="">Dengan pemeriksaan lanjutan</span></h2>
           </div>
           <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
             <div className="border-l-4">
               <div className="p-5 border border-l-0 rounded-r">
                 <h6 className="mb-2 font-semibold leading-5 text-slate-100">• Kultur virus</h6>
                 <p className="text-sm">Kultur virus herpes bertujuan untuk mendeteksi virus herpes. Kultur virus herpes dilakukan dengan mengambil sampel melalui metode swab (usap) dari area kulit atau genital yang terinfeksi, untuk selanjutnya diteliti di laboratorium.
                   Pemeriksaan kultur virus terutama dilakukan untuk mendeteksi atau memastikan keberadaan virus herpes, sekaligus menentukan jenis virus yang menginfeksi.</p>
               </div>
               <div className="p-5 border border-l-0 rounded-r">
                 <h6 className="mb-2 font-semibold leading-5 text-slate-100">• Tes antibodi</h6>
                 <p className="text-sm">Tes antibodi bertujuan untuk mendeteksi antibodi terhadap virus herpes. Tes ini dilakukan dengan mengambil sampel darah, kemudian menelitinya di laboratorium untuk memastikan keberadaan antibodi yang terbentuk akibat infeksi virus herpes.</p>
               </div>
             </div>
             <div className="shadow-sm border-l-4">
               <div className="p-5 border border-l-0 rounded-r">
                 <h6 className="mb-2 font-semibold leading-5 text-slate-100">• Pemeriksaan Tzank</h6>
                 <p className="text-sm">Pemeriksaan Tzank dilakukan dengan mengambil sampel dari ruam kulit untuk selanjutnya diperiksa di bawah mikroskop. Hasil pemeriksaan ini bisa menentukan apakah lesi yang timbul disebabkan oleh virus herpes. Meski begitu, pemeriksaan Tzank tidak dapat mengidentifikasi jenis virus herpes yang menyebabkan infeksi.</p>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-11">
        <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl">
          <h1 className="font-bold text-3xl text-gray-100 sm:text-4xl">Pengobatan</h1>
          <p className="text-gray-400 sm:text-lg">Pada umumnya, luka dan lepuh akibat herpes dapat sembuh dengan sendirinya dalam waktu 2–4 minggu. Hanya saja, virus mungkin tetap ada di dalam tubuh penderita tanpa menimbulkan gejala.</p>
        </div>
        <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto lg:max-w-4xl">
          <div className="col-span-2 sm:col-span-1"><Image alt="No alt" src={meds} width={1000} height={667} className="w-full bg-gray-50" /></div>
          <div className="col-span-2 px-3 pb-3 dark:border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:border-t lg:border-r">
            <h1 className="font-semibold tracking-tight text-xl text-gray-200 dark:divide-undefined sm:mb-2 md:my-1">Obat Obatan</h1>
            <p className="text-base font-normal tracking-tight leading-relaxed dark:divide-undefined text-gray-300">Beberapa obat-obatan antivirus dapat digunakan untuk mengatasi infeksi virus herpes adalah: Acyclovir  , Valacyclovir, Famciclovir, Penciclovir</p>
          </div>
          <div className="col-span-2 px-3 pb-3 order-3 dark:border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:border-b lg:border-l">
            <h1 className="font-semibold text-gray-700 tracking-tight text-xl text-gray-200 dark:divide-undefined sm:mb-2 md:my-1">Cara lain</h1>
            <p className="text-base font-normal tracking-tight leading-relaxed dark:divide-undefined text-gray-300">Selain mengonsumsi obat antivirus, beberapa upaya yang bisa dilakukan untuk meredakan keluhan dan mempercepat pemulihan akibat infeksi virus herpes yaitu
            Mengonsumsi paracetamol atau ibuprofen untuk meredakan nyeri,
            <br/><br/>
            Mengompres ruam kulit dengan air hangat atau atau air dingin,
            <br/><br/>
            Menggunakan air suam kuku untuk mandi,
            Menggunakan pakaian longgar,
            <br/><br/>
            Menggunakan pakaian dalam berbahan katun,
            <br/><br/>
            Menjaga area luka tetap kering dan bersih</p>
          </div>
          <div className="col-span-2 order-2 sm:col-span-1 sm:order-none"><Image alt="No alt" src={gej} width={700} height={393} className="w-full bg-gray-50" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Komplikasi</h1>
              <p className="text-center text-lg mt-2">
              1)	Penyebaran infeksi ke bagian tubuh lain
              <br/><br/>
              2)	Hepatitis
              <br/><br/>
              3)	Radang paru-paru
              <br/><br/>
              4)	Radang otak dan selaput otak
              <br/><br/>
              5)	Kematian jaringan retina mata
              <br/><br/>
              6)	Esofagitis
              <br/><br/>
              Pada cacar air, risiko terjadinya komplikasi umumnya akan meningkat pada anak-anak, lansia, ibu hamil, atau orang yang daya tahan tubuhnya lemah. Beberapa komplikasi yang bisa terjadi akibat cacar air adalah:
              <br/><br/>
              1)	Ruam menyebar ke mata
              <br/><br/>
              2)	Ruam yang diikuti oleh sesak napas dan sakit kepala
              <br/><br/>
              3)	Ruam yang diikuti dengan infeksi sekunder
              <br/><br/><br/>
              Sementara itu, komplikasi yang bisa terjadi akibat herpes zoster adalah:
              <br/><br/>
              1)	Post herpetic neuralgia, yaitu nyeri yang masih dirasakan meski lesi pada kulit sudah menghilang
              <br/><br/>
              2)	Infeksi bakteri pada lokasi ruam
              <br/><br/>
              3)	Nyeri dan ruam yang menjalar hingga ke mata
              <br/><br/>
              4)	Sindrom Ramsay-Hunt, yaitu kondisi yang dapat menyebabkan kelumpuhan pada wajah dan gangguan pendengaran
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="mb-10 md:mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Pencegahan</h2>
              <p className="max-w-screen-md md:text-lg text-center mx-auto">Khusus bagi penderita herpes genital, hindari segala bentuk aktivitas seksual selama gejala herpes masih ada. Perlu diingat bahwa meski sudah menggunakan kondom, virus herpes dapat menyebar melalui kontak kulit yang tidak terlindungi kondom.</p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
              <div className="flex border rounded-lg divide-x">
                <div className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></span></div>
                <div className="p-4 md:p-6">
                  <p className="">1) Hindari kontak fisik dengan orang lain, terutama bagi yang memiliki luka terbuka.</p>
                </div>
              </div>
              <div className="flex border rounded-lg divide-x">
                <div className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></span></div>
                <div className="p-4 md:p-6">
                  <p className="">2) Cuci tangan dengan air mengalir dan sabun secara rutin.</p>
                </div>
              </div>
              <div className="flex border rounded-lg divide-x">
                <div className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></span></div>
                <div className="p-4 md:p-6">
                  <p className="">3) Oleskan obat pada ruam dengan menggunakan kapas agar tangan tidak menyentuh daerah yang terinfeksi virus herpes.</p>
                </div>
              </div>
              <div className="flex border rounded-lg divide-x">
                <div className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></span></div>
                <div className="p-4 md:p-6">
                  <p className="">4) Jangan berbagi pakai barang-barang yang dapat menyebarkan virus, seperti gelas, cangkir, handuk, pakaian, dan peralatan makeup.</p>
                </div>
              </div>
              <div className="flex border rounded-lg divide-x">
                <div className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></span></div>
                <div className="p-4 md:p-6">
                  <p className="">5) Jangan melakukan seks oral, ciuman, atau aktivitas seksual lainnya, selama gejala penyakit herpes muncul.</p>
                </div>
              </div>
              <div className="flex border rounded-lg divide-x">
                <div className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></span></div>
                <div className="p-4 md:p-6">
                  <p className="">6) Hindari mencium bayi terlalu sering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
