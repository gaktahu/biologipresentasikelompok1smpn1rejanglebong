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
import kembar1 from '../../../assets/klami.jpg'
import baklam from '../../../assets/baklam.jpg'
import ils from '../../../assets/ils.jpg'

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
        <section  className="px-2 py-32 md:px-0">
        <div  className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div  className="flex flex-wrap items-center sm:-mx-3">
            <div  className="w-full md:w-1/2 md:px-3">
              <div  className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1  className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span  className="text-white block xl:inline">Penyakit</span>
                  <span  className="block text-indigo-600 xl:inline"> Klamidia</span>
                </h1>
                <p  className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.1 | Penyakit Kelamin</p>
              </div>
            </div>
            <div  className="w-full md:w-1/2">
              <div  className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                  <Image src={kembar1} width={728} height={455}/>
                </div>
            </div>
          </div>
        </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <div  className="py-6"></div>
          <div  className="py-12 dark:divide-undefined">
            <div  className="md:flex md:items-center lg:flex-row lg:inline lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 xl:gap-x-14">
              <div  className="px-4 lg:col-span-1"><Image alt="No alt" src={baklam} width={1000} height={500}  className="w-full" /></div>
              <div  className="px-4 mt-5 md:flex md:flex-col md:gap-y-3 md:ml-2 lg:col-span-1">
                <div  className="flex items-baseline">
                  <h1  className="font-black text-8xl text-purple-500">Apa Itu</h1>
                  <p  className="text-5xl xl:ml-3 2xl:font-bold 2xl:text-gray-500">?</p>
                </div>
                <h1  className="font-bold text-3xl my-5 tracking-tight text-slate-100 dark:divide-undefined sm:text-5xl md:my-1">Klamidia</h1>
                <p  className="dark:divide-undefined dark:text-gray-300">Klamidia atau klamidiasis adalah infeksi menular seksual yang disebabkan oleh bakteri bernama Chlamydia trachomatis.
                  Penyakit ini bisa menyerang baik pria maupun wanita melalui kontak seksual.
                  Bakteri Chlamydia trachomatis dapat menginfeksi serviks (leher rahim), anus, saluran kencing, mata, dan tenggorokan.</p>
              </div>
            </div>
          </div>
          <div  className="py-6">
            <div  className="container mx-auto px-4">
              <div  className="md:w-5/6 md:mx-auto md:max-w-2xl">
                <p  className="text-center text-lg mt-2">Penyakit ini sebenarnya tidak terlalu sulit diobati jika langsung ditangani sejak awal.Namun, jika dibiarkan, klamidia bisa menyebabkan masalah kesehatan serius.Pasalnya, penyakit chlamydia bisa menyebabkan masalah pada sistem reproduksi wanita.Akibatnya, wanita yang terserang chlamydia berisiko sulit hamil.</p>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2  className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">Gejala Pada Laki Laki</h2>
        </div>
        <div  className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">• Rasa sakit dan terbakar saat buang air kecil.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">• Penis mengeluarkan cairan berupa nanah, cairan yang encer, atau putih dan kental seperti susu.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">• Testis bengkak dan nyeri saat ditekan.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">• Iritasi pada rektum.</span>
          </div>
        </div>
        <iframe  classNameName="w-5/6 aspect-video" src="https://www.youtube.com/embed/31g_faEXuso" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2  className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">Gejala Pada Perempuan</h2>
        </div>
        <div  className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Sakit perut bawah.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Keputihan yang jauh lebih banyak dari biasanya dengan warna yang cenderung kuning serta berbau busuk.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Perdarahan yang terjadi di antara siklus haid.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Demam ringan.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Sakit saat seks.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Perdarahan setelah berhubungan seks.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Rasa terbakar saat buang air kecil.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Buang air kecil lebih sering.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Pembengkakan di vagina atau sekitar anus.</span>
          </div>
          <div  className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div  className="mr-2"><span><svg  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8"  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span  className="transition-colors duration-200 group-hover:text-white">•	Iritasi di rektum.</span>
          </div>
        </div>
        <iframe  classNameName="w-5/6 aspect-video" src="https://www.youtube.com/embed/z-lHXN5UCkg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="py-6 sm:py-8 lg:py-12">
        <div  className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div  className="mb-10 md:mb-16">
            <h2  className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Penyebab Klamidia</h2>
            <p  className="max-w-screen-md md:text-lg text-center mx-auto">Berikut beberapa penyebab klamidia</p>
          </div>
          <div  className="grid gap-4 content-center sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            <div  className="flex border rounded-lg divide-x content-center">
              <div  className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg  className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg"  className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></span></div>
              <div  className="p-4 md:p-6">
                <h3  className="text-lg md:text-xl font-semibold mb-2">Melalui hubungan seks</h3>
                <p  className="">Klamidia adalah penyakit yang disebabkan oleh bakteri Chlamydia trachomatis.Infeksi ini dapat menyebar dengan mudah melalui seks vagina, oral, dan anal.
                  Seorang wanita tetap bisa terkena penyakit ini meski pasangannya tidak ejakulasi saat seks.Pasalnya, tak hanya lewat air mani, bakteri juga terdapat dalam cairan praejakulasi.</p>
              </div>
            </div>
            <div  className="flex border rounded-lg divide-x">
              <div  className="flex items-center text-indigo-500 p-2 md:p-4"><span><svg  className="w-6 md:w-8 h-6 md:h-8" xmlns="http://www.w3.org/2000/svg"  className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></span></div>
              <div  className="p-4 md:p-6">
                <h3  className="text-lg md:text-xl font-semibold mb-2">Melalui kehamilan</h3>
                <p  className="">Jika Anda adalah seorang ibu hamil yang mengidap klamidia, Anda juga dapat menyebarkan infeksi ini ke bayi saat melahirkan.
                  Penyakit ini nantinya bisa menyebabkan pneumonia atau infeksi mata serius pada buah hati Anda.
                  Oleh karena itu, jika seorang ibu memiliki klamidia selama kehamilan, diperlukan tes 3-4 minggu setelah perawatan untuk memastikan kondisinya.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-14">
        <div  className="xl:mx-auto xl:max-w-7xl xl:px-4">
          <h5  className="mb-2 font-extrabold leading-none text-center text-2xl md:pl-2 lg:text-3xl">
            <p  className="text-slate-900 dark:text-slate-100">HAL-HAL YANG TIDAK MENULARKAN</p>
            <p  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-50 via-purple-300">Klamidia</p>
          </h5>
          <p  className="text-center lg:max-w-xl lg:mx-auto">Masih banyak orang yang percaya bahwa penyakit menular seksual seperti klamidia bisa ditularkan melalui kontak fisik biasa, seperti bersalaman atau menyentuh pasien.Hal tersebut tidak sepenuhnya benar. Penting untuk diingat bahwa penyakit kelamin ini tidak dapat ditularkan melalui:</p>
          <div  className="grid gap-3 row-gap-3 mt-8 lg:grid-cols-3">
            <ul  className="space-y-3">
              <ul  className="list-disc list-inside flex flex-col gap-y-4">
                <li  className="flex items-center gap-x-3">
                  <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>• Dudukan toilet yang telah digunakan oleh orang yang terinfeksi
                </li>
                <li  className="flex items-center gap-x-3">
                  <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>• Berbagi sauna dengan orang yang terinfeksi.
                </li>
                <li  className="flex items-center gap-x-3">
                  <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>• Berbagi kolam renang yang sama dengan orang yang terinfeksi.
                </li>
              </ul>
            </ul>
            <ul  className="space-y-3">
              <ul  className="list-disc list-inside flex flex-col gap-y-4">
                <li  className="flex items-center gap-x-3">
                  <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>• Berbagi makanan dan minuman yang sama.
                </li>
                <li  className="flex items-center gap-x-3">
                  <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>• Ciuman, pelukan, dan pegangan tangan.
                </li>
                <li  className="flex items-center gap-x-3">
                  <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>• Permukaan yang sebelumnya disentuh oleh orang yang terinfeksi.
                </li>
              </ul>
            </ul>
            <ul  className="space-y-3">
              <ul  className="list-disc list-inside flex flex-col gap-y-4">
                <li  className="flex items-center gap-x-3">
                  <div  ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>• Berdiri di dekat orang yang terinfeksi dan menghirup udara setelah mereka batuk atau bersin.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="py-6">
       <div  className="container mx-auto px-4">
         <div  className="md:w-5/6 md:mx-auto md:max-w-2xl">
           <h1  className="text-3xl text-center font-bold dark:text-white text-purple-500 sm:text-4xl">Komplikasi</h1>
           <p  className="text-center text-lg mt-2">Selain menyebabkan infertilitas, klamidia juga dapat menyebabkan beberapa komplikasi penyakit, seperti:</p>
         </div>
       </div>
     </div>
     <div  className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div  className="grid gap-6 row-gap-10 lg:grid-cols-2">
         <div  className="lg:py-6 lg:pr-16">
           <div  className="flex">
             <div  className="flex flex-col items-center mr-4">
               <div  className="">
                 <div  className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg  className="w-4 text-purple"  className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                       <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                     </svg></span></div>
               </div>
               <div  className="w-px h-full bg-gray-300"></div>
             </div>
             <div  className="pt-1 pb-8">
               <p  className="mb-2 text-lg font-bold text-purple">Radang panggul</p>
               <p  className="">Radang Panggul atau pelvic inflammatory disease terjadi ketika bakteri menyebar dan meninginfeksi serviks, rahim, saluran tuba, dan ovarium.
                 Radang panggul bisa membuat seseorang menjadi tidak subur, mengalami nyeri panggul kronis, dan hamil anggur.</p>
             </div>
           </div>
           <div  className="flex">
             <div  className="flex flex-col items-center mr-4">
               <div  className="">
                 <div  className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg  className="w-4 text-purple"  className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                       <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                     </svg></span></div>
               </div>
               <div  className="w-px h-full bg-gray-300"></div>
             </div>
             <div  className="pt-1 pb-8">
               <p  className="mb-2 text-lg font-bold text-purple">Epididimitis</p>
               <p  className="">Epididimitis adalah kondisi saat saluran belakang testis yang membawa sperma menuju uretra meradang.
                 Peradangan ini muncul akibat infeksi bakteri chlamydia yang akhirnya menyebabkan demam, pembengkakan, dan nyeri pada skrotum.</p>
             </div>
           </div>
           <div  className="flex">
             <div  className="flex flex-col items-center mr-4">
               <div  className="">
                 <div  className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg  className="w-4 text-purple"  className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                       <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                     </svg></span></div>
               </div>
               <div  className="w-px h-full bg-gray-300"></div>
             </div>
             <div  className="pt-1 pb-8">
               <p  className="mb-2 text-lg font-bold text-purple">Prostatitis</p>
               <p  className="">Prostatitis atau infeksi kelenjar prostat adalah kondisi saat bakteri klamidia mulai masuk dan menyerang prostat.
                 Hal ini mengakibatkan seseorang akan merasa nyeri saat berhubungan seks, demam, meriang, sakit saat kencing, dan nyeri punggung bawah.</p>
             </div>
           </div>
           <div  className="flex">
             <div  className="flex flex-col items-center mr-4">
               <div  className="">
                 <div  className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg  className="w-4 text-purple"  className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                       <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                     </svg></span></div>
               </div>
               <div  className="w-px h-full bg-gray-300"></div>
             </div>
             <div  className="pt-1 pb-8">
               <p  className="mb-2 text-lg font-bold text-purple">Infeksi menular seksual lainnya</p>
               <p  className="">Orang yang sudah terkena chlamydia biasanya berisiko lebih tinggi terkena infeksi menular seks lainnya seperti gonore, sipilis, hingga HIV.
                 Oleh karena itu, segera periksakan ke dokter jika Anda memang berisiko tinggi dan mengalami berbagai gejala tak biasa beberapa waktu belakangan.</p>
             </div>
           </div>
           <div  className="flex">
             <div  className="flex flex-col items-center mr-4">
               <div  className="">
                 <div  className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg  className="w-4 text-purple"  className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                       <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                     </svg></span></div>
               </div>
               <div  className="w-px h-full bg-gray-300"></div>
             </div>
             <div  className="pt-1 pb-8">
               <p  className="mb-2 text-lg font-bold text-purple">Infertilitas</p>
               <p  className="">Chlamydia bisa menyebabkan jaringan parut dan sumbatan pada tuba falopi.Kondisi ini membuat seorang wanita bisa mengalami kesulitan untuk memiliki anak.Oleh katena itu, pengobatan dini sangat diperlukan untuk mencegah hal ini terjadi.</p>
             </div>
           </div>
           <div  className="flex">
             <div  className="flex flex-col items-center mr-4">
               <div  className="">
                 <div  className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg  className="w-4 text-purple"  className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                       <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                     </svg></span></div>
               </div>
               <div  className="w-px h-full bg-gray-300"></div>
             </div>
             <div  className="pt-1 pb-8">
               <p  className="mb-2 text-lg font-bold text-purple">Arthritis reaktif</p>
               <p  className="">Arthritis reaktif adalah kondisi saat sendi terasa nyeri dan bengkak akibat infeksi di bagian lain pada tubuh.
                 Penyakit yang dikenal dengan istilah sindrom Reiter ini juga menyerang mata dan uretra, yaitu tabung yang membawa urine dari kandung kemih ke luar tubuh Anda</p>
             </div>
           </div>
         </div>
         <div  className="relative"><Image alt="No alt" src={ils} width={960} height={1568}  className="inset-0 object-bottom w-full rounded h-96 object-fill lg:absolute lg:h-full" /></div>
       </div>
       </div>
      </SwiperSlide>
    </Swiper>
  );
};
