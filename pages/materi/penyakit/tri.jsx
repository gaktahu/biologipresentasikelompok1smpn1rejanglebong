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
import kembar1 from '../../../assets/trik.jpg'
import trip from '../../../assets/trip.jpg'
import tril from '../../../assets/tril.jpg'

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
                  <span  className="block text-indigo-600 xl:inline"> Trikomoniasis</span>
                </h1>
                <p  className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.8 | Penyakit Kelamin</p>
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
      <div className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:flex xl:items-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-100 sm:text-4xl lg:w-1/2">Trikomoniasis</h1>
          <p className="text-lg mt-3 sm:mt-2 lg:w-1/2 lg:pl-20">Trikomoniasis adalah penyakit menular seksual yang disebabkan oleh parasit Trichomonas vaginalis. Trikomoniasis dapat dicegah dengan perilaku seksual yang aman, yaitu tidak bergonta-ganti pasangan seksual dan menggunakan kondom.</p>
        </div>
      </div>
      <div className="py-11">
        <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl">
          <h1 className="font-bold text-3xl text-slate-900 dark:text-gray-100 sm:text-4xl">Gejala</h1>
          <p className="text-base sm:text-lg">Kebanyakan penderita trikomoniasis tidak merasakan gejala apa pun. Meski begitu, penderita tetap bisa menularkan trikomoniasis kepada orang lain. Bila terdapat gejala, biasanya keluhan akan muncul 5–28 hari setelah terinfeksi.</p>
        </div>
        <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto lg:max-w-4xl">
          <div className="col-span-2 sm:col-span-1"><Image alt="No alt" src={trip} width={1024} height={683} className="w-full bg-gray-50" /></div>
          <div className="col-span-2 px-3 pb-3 dark:border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:border-t lg:border-r">
            <h1 className="font-semibold text-gray-700 tracking-tight text-xl dark:text-gray-200 dark:divide-undefined sm:mb-2 md:my-1">
              <div className="">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
                <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                  <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
                    <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                          <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg></span></div><span className="transition-colors duration-200 text-white">• Keputihan yang banyak dan membuat vagina bau amis</span>
                  </div>
                  <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                    <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                          <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg></span></div><span className="transition-colors duration-200 text-white">Keputihan berwarna kuning, kehijauan, bisa kental atau encer, serta berbusa</span>
                  </div>
                  <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                    <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                          <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg></span></div><span className="transition-colors duration-200 text-white">• Gatal yang disertai kemerahan dan rasa terbakar di area vagina</span>
                  </div>
                  <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                    <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                          <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg></span></div><span className="transition-colors duration-200 text-white">• Nyeri saat berhubungan seksual atau saat buang air kecil</span>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold">Diatas adalah gejala perempuan</h1>
              </div>
            </h1>
          </div>
          <div className="col-span-2 px-3 pb-3 order-3 dark:border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:border-b lg:border-l">
            <h1 className="font-semibold text-gray-700 tracking-tight text-xl dark:text-gray-200 dark:divide-undefined sm:mb-2 md:my-1">Gejala Laki Laki</h1>
            <div className="">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
              <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
                  <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg></span></div><span className="transition-colors duration-200 text-white">• Sakit, bengkak, dan kemerahan di area ujung penis</span>
                </div>
                <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                  <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg></span></div><span className="transition-colors duration-200 text-white">• Keluar cairan putih dari penis</span>
                </div>
                <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                  <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg></span></div><span className="transition-colors duration-200 text-white">• Nyeri saat buang air kecil atau setelah ejakulasi</span>
                </div>
                <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                  <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg></span></div><span className="transition-colors duration-200 text-white">• Lebih sering buang air kecil dari biasanya</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 order-2 sm:col-span-1 sm:order-none"><Image alt="No alt" src={tril} width={673} height={373} className="w-full bg-gray-50" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Komplikasi</h1>
            <p className="text-center text-lg mt-2">
              Bila tidak ditangani, trikomoniasis bisa menimbulkan komplikasi serius, terutama pada ibu hamil. Komplikasi yang dapat terjadi adalah bayi terlahir prematur atau terlahir dengan berat badan rendah, dan penularan trikomoniasis ke bayi pada proses persalinan.
              <br/>
              Di samping itu, trikomoniasis yang terjadi pada wanita dapat membuat penderitanya lebih rentan terkena infeksi HIV.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">PENCEGAHAN TRIKOMONIASIS</h1>
            <p className="text-center text-lg mt-2">
            Guna mengurangi risiko terinfeksi trikomoniasis dan penyakit menular seksual lainnya, lakukanlah beberapa langkah di bawah ini:
            <br/>
            •	Tidak bergonta-ganti pasangan seksual
            <br/>
            •	Menggunakan kondom saat berhubungan intim
            <br/>
            •	Tidak berbagi pakai alat bantu atau mainan seks dan membersihkannya setiap selesai digunakan
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};
