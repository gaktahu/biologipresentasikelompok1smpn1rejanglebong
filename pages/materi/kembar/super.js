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
import kembar1 from '../../../assets/super.jpg'
import kembar2 from '../../../assets/super1.jpg'
import kembar3 from '../../../assets/super2.jpg'
import dan from '../../../assets/dan.jpg'
import fek from '../../../assets/fek.jpg'

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
                  <span className="text-white block xl:inline">Superfekundasi</span>
                  <span className="block text-indigo-600 xl:inline"> dan superfetasi</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 1.2 | Bayi Kembar</p>
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
        <div className="py-11">
          <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl">
            <p className="text-3xl sm:max-w-md sm:mx-auto md:font-heading text-gray-200">Pengertian Bayi Kembar Superfetasi dan Superfekundasi</p>
          </div>
          <div className="grid text-center mt-6 sm:grid-cols-2 lg:max-w-7xl xl:max-w-6xl xl:mx-auto">
            <div className="px-5 py-6 bg-yellow-100 sm:bg-gradient-to-l sm:from-yellow-100 sm:to-white">
              <h1 className="font-semibold text-2xl text-black">Bayi Kembar Superfetasi</h1>
              <p className="text-base mt-4 text-gray-700 lg:max-w-xs lg:mx-auto">Adalah bayi kembar dengan usia janin yang berbeda. Kondisi ini cukup langkah</p>
            </div>
            <div className="px-5 py-6 bg-teal-100 from-teal-100 sm:bg-gradient-to-r sm:to-white">
              <h1 className="font-semibold text-2xl text-black">Bayi Kembar Superfekundasi</h1>
              <p className="text-base mt-4 text-gray-700 lg:max-w-xs lg:mx-auto">Adalah bayi kembar dengan ciri yang berbeda satu sama lain karena berbeda ayah</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-11">
        <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl">
          <h1 className="font-bold text-3xl text-gray-100 sm:text-4xl">Kembar Superfetasi</h1>
          <p className="text-base dark:text-gray-400 sm:text-lg">Kembar superfetasi terjadi ketika ibu yang sedang hamil mengalami ovulasi atau pelepasan sel telur. Bila saat ovulasi ibu dan pasangan melakukan hubungan intim kemudian sel sperma lepas di dalam rahim, pembuahan bisa terjadi lebih dari satu kali.</p>
        </div>
        <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto lg:max-w-4xl">
          <div className="col-span-2 sm:col-span-1"><Image src={kembar2} width={640} height={427}/></div>
          <div className="col-span-2 px-3 pb-3 dark:border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:border-t lg:border-r">
            <h1 className="font-semibold text-gray-700 tracking-tight text-xl dark:text-gray-200 dark:divide-undefined sm:mb-2 md:my-1">Umur</h1>
            <p className="text-base font-normal tracking-tight leading-relaxed dark:divide-undefined dark:text-gray-300">Mengingat janin terbentuk dari proses pembuahan yang berbeda, terdapat rentang usia antara janin satu dan dua. Usia janin mungkin beda hitungan hari atau minggu sesuai waktu pembuahan terjadi. Namun, bayi kembar superfetasi bisa lahir pada waktu yang bersamaan.</p>
          </div>
          <div className="col-span-2 px-3 pb-3 order-3 dark:border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:border-b lg:border-l">
            <h1 className="font-semibold text-gray-700 tracking-tight text-xl dark:text-gray-200 dark:divide-undefined sm:mb-2 md:my-1">Resiko</h1>
            <p className="text-base font-normal tracking-tight leading-relaxed dark:divide-undefined dark:text-gray-300">Namun, yang menjadi masalah adalah ketika kedua janin memiliki rentang waktu perkembangan yang sangat jauh. Dikhawatirkan, ketika satu bayi siap dilahirkan, janin lainnya mungkin belum siap dan nantinya ia berisiko lahir prematur.</p>
          </div>
          <div className="col-span-2 order-2 sm:col-span-1 sm:order-none"><Image src={kembar3} width={800} height={427}/></div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="max-h-full sm:relative sm:py-12 py-12">
        <div className="z-0 absolute bottom-2/3 h-80 inset-0 bg-primary sm:w-1/2 sm:h-full"><Image src={dan} width={1568} height={960} className="w-11/12 mx-auto my-4 rounded-global relative object-fit bg-blue-100 lg:w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl" />
        </div>
        <div className="grid relative sm:grid-cols-2 lg:max-w-6xl xl:mx-auto 2xl:max-w-7xl">
          <div className="py-7 px-5 text-white sm:flex sm:flex-col sm:justify-center sm:px-7 lg:px-20">
            <h1 className="text-3xl font-bold sm:text-4xl">Kelahiran prematur menempatkan bayi pada risiko lebih tinggi mengalami masalah kesehatan, seperti:</h1>
          </div>
          <div className="">
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="px-10 py-6">
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">1</p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-100">• Kesulitan bernapas.</h1>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="px-10 py-2">
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">2</p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-100">• Berat badan lahir rendah.</h1>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="px-10 py-2">
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">3</p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-100">• Masalah gerakan dan koordinasi..</h1>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="px-10 py-2">
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">4</p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-100">•	Kesulitan makan</h1>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="px-10 py-2">
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">5</p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-100">•	Pendarahan otak.</h1>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="px-10 py-2">
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">6</p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-100">•	Sindrom gangguan pernapasan neonatal, yaitu masalah pernapasan akibat paru-paru yang kurang berkembang.</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="text-center md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Komplikasi</h1>
              <p className="text-center text-lg mt-2">Selain itu, wanita yang mengandung lebih dari satu bayi berisiko lebih tinggi mengalami komplikasi tertentu, termasuk:
                <br/>
                • Tekanan darah tinggi dan terdapat protein pada urine (preeklamsia).
                <br/>
                • Diabetes gestasional.
                <br/><br/>
                Bayi-bayi pada kehamilan superfetasi mungkin perlu dilahirkan melalui persalinan caesar. Namun, operasi ini harus atas keputusan dokter. Biasanya, tindakan ini bergantung pada perbedaan perkembangan kedua bayi dan keadaan sang ibu.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto sm:text-center lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div className="">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-secondary text-white">Bab 1.2</p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-100 sm:text-4xl md:mx-auto">Bayi kembar superfekundasi</h2>
              <p className="text-base md:text-lg">
                Jenis kembar  lainnya adalah Kembar heteropaternal superfekundasi. Kembar heteropaternal superfekundasi adalah satu dari macam-macam bayi kembar ketika ibu mengandung janin kembar beda ayah.
                <br/>
                Kembar beda ayah adalah kondisi kembar dizigotik (dua sel sperma dan dua sel telur yang berbeda) dari hasil hiperovulasi. Kondisi ini terjadi ketika ada lebih dari satu sel telur yang dilepaskan oleh tubuh wanita. Polanya, pria pertama melepaskan sperma dan menempel pada sel. Selang beberapa hari atau waktu kemudian, pria kedua membuahi sel telur berikutnya.
              </p>
            </div>
            <div className="mb-4 lg:mb-6"><Image src={fek} width={1821} height={1024} className="object-cover w-full h-56 rounded sm:h-64 md:h-80 lg:h-96 lg:object-contain" /></div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
