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
import kembar1 from '../../../assets/kembar1.jpg'
import kembar2 from '../../../assets/kembar2.jpg'

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
        <section class="px-2 py-32 md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="text-white block xl:inline">Bayi</span>
                  <span class="block text-indigo-600 xl:inline"> Kembar</span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 1.1 | Bayi Kembar</p>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                  <Image src={kembar1} width={728} height={455}/>
                </div>
            </div>
          </div>
        </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <div class="py-20 dark:bg-gray-900">
          <div class="max-w-7xl mx-auto px-4 lg:flex xl:items-center">
            <h1 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:w-1/2">Apa Itu Bayi Kembar?</h1>
            <p class="text-lg mt-3 dark:text-gray-400 sm:mt-2 lg:w-1/2 lg:pl-20">Dilansir dari wikipedia Kembar atau anak kembar adalah dua atau lebih individu yang membagi uterus yang sama dan biasanya, tetapi tidak selalu, dilahirkan dalam hari yang sama. Kelahiran kembar dapat terjadi saat dua sel telur yang berbeda dibuahi oleh dua sel sperma. Meski begitu, bayi kembar juga dapat terjadi karena satu sel telur yang dibuahi oleh satu sel sperma membelah diri menjadi dua. Kelahiran kembar bisa memiliki jenis kelamin yang berbeda, tetapi bisa juga sama.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="py-6">
          <div class="container mx-auto px-4">
            <div class="text-center md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 class="text-3xl text-center font-bold text-white sm:text-4xl">Faktor Terbentuknya Bayi Kembar</h1>
            </div>
          </div>
        </div>
        <ul class="list-disc list-inside"></ul>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div class="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
              <div class="rounded lg:p-5 lg:transition lg:duration-300">
                <div class="flex items-center mb-1"><span class="flex items-center justify-center w-4 h-4 mr-2 font-medium text-white rounded bg-primary text-xs">1</span></div>
                <p class="text-sm">• Usia, wanita yang lebih tua (lebih dari 35 tahun) berpotensi lebih besar untuk melahirkan anak kembar. Ini karena di usia tersebut, wanita cenderung mengeluarkan lebih dari satu folikel sel telur saat masa subur (ovulasi).</p>
              </div>
              <div class="rounded lg:p-5 lg:transition lg:duration-300">
                <div class="flex items-center mb-1"><span class="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">2</span></div>
                <p class="text-sm">• Faktor keturunan, sebuah studi menemukan bahwa genotip ibu lebih berperan karena adanya ovulasi ganda yang diturunkan, sehingga ibu kembar berpotensi lebih besar untuk melahirkan anak kembar.</p>
              </div>
              <div class="rounded lg:p-5 lg:transition lg:duration-300">
                <div class="flex items-center mb-1"><span class="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-primary text-white text-xs">3</span></div>
                <p class="text-sm">• Metode bayi tabung atau in vitro fertilization (IVF). Ini karena melalui metode bayi tabung, rahim wanita ditanami lebih dari satu embrio, sehingga meningkatkan peluang terjadinya kehamilan kembar.</p>
              </div>
              <div class="rounded lg:p-5 lg:transition lg:duration-300">
                <div class="flex items-center mb-1"><span class="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">4</span></div>
                <p class="text-sm">• Riwayat Kehamilan, wanita yang sudah beberapa kali mengalami kehamilan disebut lebih berpeluang melahirkan bayi kembar.</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <section class="px-2 pt-32 md:px-0">
          <div class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
              <h1 class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
                  <span class="text-white block">Video Ilustrasi <span class="block mt-1 text-purple-500 lg:inline lg:mt-0">Fertilisasi</span></span>
              </h1>
              <p class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                  Yuk lihat ilustrasi fertilisasi berikut untuk menambah wawasan mu di slide selanjutnya!
              </p>
          </div>
          <div class="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
      <section class="px-2 py-32 md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <iframe className="w-5/6 aspect-video" src="https://www.youtube.com/embed/FEt0Wkpp5Mo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};
