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
import kembar1 from '../../../assets/conjoi.jpg'
import thor from '../../../assets/thor.png'
import om from '../../../assets/om.png'
import pyo from '../../../assets/pyo.jpg'
import cran from '../../../assets/cran.jpg'
import is from '../../../assets/is.jpg'
import para from '../../../assets/para.png'
import cep from '../../../assets/cep.jpg'
import rac from '../../../assets/rac.jpg'
import par from '../../../assets/par.jpg'

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
                  <span className="text-white block xl:inline">Bayi Kembar</span>
                  <span className="block text-indigo-600 xl:inline"> Siam</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 1.3 | Bayi Kembar</p>
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
      <section className="">
        <div className="px-4 py-32 mx-auto lg:items-center lg:flex lg:max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-slate-100 lg:text-5xl">
              <p className="">Apa itu</p>
              <p className="bg-gradient-to-r from-indigo-500 to-green-500 bg-clip-text text-transparent">Kembar  Siam?</p>
            </h1>
            <p className="mt-4 sm:leading-relaxed sm:text-xl lg:text-lg">Kembar siam adalah kelainan di mana bayi kembar dengan salah satu atau beberapa bagian tubuh saling menempel atau terhubung satu sama lain. Kembar siam tergolong kondisi langka.</p>
          </div>
        </div>
        <div className="py-2 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:flex xl:items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:w-1/2">Kondisi Tubuh</h1>
            <p className="text-lg mt-3 dark:text-gray-400 sm:mt-2 lg:w-1/2 lg:pl-20">Pada kondisi kembar siam, tubuh kedua bayi dapat menyatu atau terhubung pada salah satu atau beberapa bagian tubuh. Bagian tubuh yang paling sering menyatu adalah kepala, dada, perut, punggung, dan panggul. Kondisi ini terjadi akibat tidak sempurnanya proses pembelahan pada kehamilan kembar monozigot (satu sel telur).</p>
          </div>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-14">
        <div className="xl:mx-auto xl:max-w-7xl xl:px-4">
          <h5 className="mb-2 font-extrabold leading-none text-center text-2xl md:pl-2 lg:text-3xl">
            <p className="text-slate-100">Jenis Jenis</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-50 via-indigo-300">Kembar Siam</p>
          </h5>
          <p className="text-center lg:max-w-xl lg:mx-auto">Berikut beberapa jenis kembar siam :</p>
          <div className="grid gap-3 row-gap-3 mt-8 lg:grid-cols-3">
            <ul className="space-y-3">
              <ul className="list-disc list-inside flex flex-col gap-y-4">
                <li className="flex items-center gap-x-3">
                  <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Thoracopagus
                </li>
                <li className="flex items-center gap-x-3">
                  <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Omphalopagus
                </li>
                <li className="flex items-center gap-x-3">
                  <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Pygopagus
                </li>
              </ul>
            </ul>
            <ul className="space-y-3">
              <ul className="list-disc list-inside flex flex-col gap-y-4">
                <li className="flex items-center gap-x-3">
                  <div ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Craniopagus
                </li>
                <li className="flex items-center gap-x-3">
                  <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Ischiopagus
                </li>
                <li className="flex items-center gap-x-3">
                  <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Parapagus
                </li>
              </ul>
            </ul>
            <ul className="space-y-3">
              <ul className="list-disc list-inside flex flex-col gap-y-4">
                <li className="flex items-center gap-x-3">
                  <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Cephalopagus
                </li>
                <li className="flex items-center gap-x-3">
                  <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg></div>Rachipagus
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Thoracopagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika dada bayi saling menempel. Dada merupakan bagian tubuh yang paling sering terhubung pada kasus bayi kembar siam. Umumnya, mereka hanya memiliki satu jantung, satu liver, dan satu usus.</p>
            </div>
          </div>
          <div className=""><Image src={thor} alt="No alt" src={thor} width={800} height={909} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Omphalopagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika perut kedua bayi saling menempel. Umumnya, bayi kembar siam ini hanya memiliki satu liver, satu usus halus bagian bawah, dan satu usus besar.</p>
            </div>
          </div>
          <div className=""><Image src={om} alt="No alt" width={850} height={638} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Pygopagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika punggung bawah dan bokong bayi saling menempel. Umumnya, mereka hanya memiliki satu saluran pencernaan, satu alat kelamin, dan satu organ kemih.</p>
            </div>
          </div>
          <div className=""><Image src={pyo} alt="No alt" width={388*1.8} height={283*1.8} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Craniopagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika kepala bayi saling menempel di bagian samping atau bagian atas kepala. Umumnya, mereka memiliki satu tengkorak, tapi memiliki otak yang berbeda.</p>
            </div>
          </div>
          <div className=""><Image src={cran} alt="No alt" width={300*1.8} height={168*1.8} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Ischiopagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika panggul bayi saling menempel, baik saling berhadapan maupun saling membelakangi.</p>
            </div>
          </div>
          <div className=""><Image src={is} alt="No alt" width={567} height={393} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Parapagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika panggul, perut, dan dada bayi saling menempel dengan posisi menyamping.</p>
            </div>
          </div>
          <div className=""><Image src={para} alt="No alt" width={684} height={600} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Cephalopagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika wajah bayi saling menempel. Umumnya, wajah mereka berada di sisi saling berlawanan dan hanya memiliki satu otak. Bayi yang mengalami kondisi ini sangat sulit untuk bertahan hidup.</p>
            </div>
          </div>
          <div className=""><Image src={cep} alt="No alt" width={580} height={811} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl sm:leading-none"><span className="undefined">Kembar Siam</span><span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div><span className="relative inline-block text-primary"> Rachipagus</span>
                </span></h2>
              <p className="text-base md:text-lg">Kembar siam ini terjadi ketika tulang belakang kedua bayi saling menempel. Kasus ini sangat jarang ditemukan.</p>
            </div>
          </div>
          <div className=""><Image src={rac} alt="No alt" width={700} height={393} className="object-cover w-full h-56 sm:h-96" /></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Kembar Parasit</h1>
              <p className="text-center text-lg mt-2">Kembar parasit adalah jenis kembar jenis kembar siam yang salah satu kembarannya tidak berkembang secara normal.
                Selanjutnya, kembaran yang tidak berkembang secara normal tersebut berhenti tumbuh dan dalam masih menempel pada kembarannya.</p>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className=""><Image width={1000} height={1000} alt="No alt" src={par} className="object-cover w-full h-56 sm:h-96" /></div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl sm:leading-none"><br /><span className="">Perbedaan Kembar Siam dan Parasit</span></h2>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="border-l-4">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5 text-slate-100">Tubuh</h6>
                    <p className="text-sm">Bayi kembar siam akan memiliki dua tubuh yang bernyawa. Tapi, parasitic twin hanya memiliki satu nyawa dengan bagian tubuh kembarannya yang gagal tumbuh saat di janin.</p>
                  </div>
                </div>
                <div className="shadow-sm border-l-4">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5 text-slate-100">Pertumbuhan</h6>
                    <p className="text-sm">Kembar parasit terjadi ketika salah satu dari janin kembar berhenti berkembang namun masih melekat pada janin lainnya yang masih berkembang.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
