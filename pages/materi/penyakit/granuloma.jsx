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
import kembar1 from '../../../assets/gran.jpg'
import ingu from '../../../assets/ingu.jpg'
import bac from '../../../assets/bac.jpg'
import gay from '../../../assets/gay.jpg'

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
                  <span className="block text-indigo-600 xl:inline"> Granuloma Inguinale</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.3 | Penyakit Kelamin</p>
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
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Granuloma Inguinale</h1>
              <p className="text-center text-lg mt-2">Granuloma Inguinale atau donovanosis merupakan penyakit menular seksual yang disebabkan oleh infeksi bakteri menahun, bersifat progresif, dan destruktif yang menyerang kulit pada area genital dan sekitarnya berbentuk ulkus atau luka. Meskipun penyakit ini terutama menular melalui hubungan intim, tapi penyakit ini dapat menular bila orang sehat terkena cairan luka pengidap.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Gejala</h1>
              <p className="text-center text-lg mt-2">Perkembangan penyakit ini lambat, biasanya sekitar 17 hari setelah bakteri masuk kedalam tubuh hingga menimbulkan gejala dan diperlukan hingga 12 minggu sampai terdapat luka di kulit yang nyata. Tidak ditemukan gejala demam pada penyakit ini.
                Lesi kulit berkembang melalui 3 tahapan, yaitu:</p>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="">
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg className="w-4 text-purple" className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                          <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                        </svg></span></div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-purple">Tahap Pertama</p>
                  <p className="">pada kulit kelamin atau sekitar anus akan terlihat benjolan merah kecil seperti jerawat kemudian warnanya berubah menjadi merah muda atau merah pudar. Benjolan ini akan membesar membentuk nodul halus berwarna merah. Benjolan ini tidak terasa sakit, tapi benjolan ini mudah berdarah.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="">
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg className="w-4 text-purple" className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                          <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                        </svg></span></div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-purple">Tahap Kedua</p>
                  <p className="">bakteri mulai merusak kulit yang terlihat dari benjolan berubah menjadi luka dangkal (ulkus) menyebar dari alat kelamin dan anus ke paha bagian bawah. Kemudian berkembang menjadi luka kering yang besar, mirip seperti kutil kelamin. Luka tersebut berbau busuk.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="">
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span><svg className="w-4 text-purple" className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                          <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                        </svg></span></div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-purple">Tahap Ketiga</p>
                  <p className="">infeksi terus berlanjut dan kerusakan yang terjadi lebih parah lagi sehingga luka yang besar tadi menjadi lebih dalam dan menimbulkan jaringan parut.</p>
                </div>
              </div>
            </div>
            <div className="relative"><Image alt="No alt" src={ingu} width={1000} height={1500} className="inset-0 object-bottom w-full rounded h-96 object-fill lg:absolute lg:h-full" /></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">Jika dibiarkan dan infeksi terus berlanjut maka akan terjadi komplikasi dari Granuloma Inguinale, diantaranya :</h2>
          </div>
          <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">1) Infeksi dapat menyebar hingga ke kelenjar getah bening di lipat paha menimbulkan benjolan di lipat paha dan menyebabkan jaringan parut didalam kelenjar getah bening sehingga menimbulkan bengkak yang permanen.</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">2) Infeksi juga dapat menyebar melalui darah, kemudian bakteri dapat menginfeksi organ tubuh lain seperti tulang, sendi, paru-paru, dan hati.</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-12 dark:divide-undefined">
          <div className="md:flex md:items-center lg:flex-row lg:inline lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 xl:gap-x-14">
            <div className="px-4 lg:col-span-1"><Image width={750} height={500} alt="No alt" src={bac} className="w-full" /></div>
            <div className="px-4 mt-5 md:flex md:flex-col md:gap-y-3 md:ml-2 lg:col-span-1">
              <div className="flex items-baseline">
                <h1 className="font-black text-8xl text-purple-500">Penyebab</h1>
                <p className="font-black text-6xl text-purple-500">.</p>
              </div>
              <p className="dark:divide-undefined text-gray-300">Penyakit ini disebabkan oleh bakteri Klebsiella granulomatis yang hidup di dalam sel. Cara penularan terutama terjadi melalui kontak seksual, tapi diduga bakteri ini memiliki kemampuan menular yang rendah jadi diperlukan paparan berulang untuk terjadinya penyakit ini.
                Selain itu penyakit ini dapat ditularkan melalui anus pada orang yang melakukan anal seks atau melalui jalan lahir normal pada ibu yang terinfeksi ke bayinya.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <h1 className="font-black text-8xl text-purple-500">Faktor Resiko</h1>
          <p className="font-black text-6xl text-purple-500">.</p>
          <div className="relative md:col-span-2"><Image alt="No alt" src={gay} width={640} height={415} className="inset-0 object-cover object-bottom w-full h-56 lg:absolute lg:h-full" /></div>
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
            <div className="rounded lg:p-5 lg:transition lg:duration-300">
              <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium text-white rounded bg-purple text-xs">1</span>
                <p className="text-lg font-semibold sm:text-base">Hubungan Intim</p>
              </div>
              <p className="text-sm">1) Melakukan hubungan intim yang tidak aman, seperti tidak memakai kondom, memiliki banyak pasangan seks.</p>
            </div>
            <div className="rounded lg:p-5 lg:transition lg:duration-300">
              <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">2</span>
                <p className="text-lg font-semibold sm:text-base">Homoseksual</p>
              </div>
              <p className="text-sm">2) Homoseksual, melakukan hubungan seks pria dengan pria memiliki risiko lebih tinggi terkena penyakit ini dibanding dengan heteroseksual.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-11">
        <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl">
          <p className="text-3xl sm:max-w-md sm:mx-auto md:font-heading text-gray-200">Diagnosa dan Pencegahan</p>
        </div>
        <div className="grid text-center mt-6 sm:grid-cols-2 lg:max-w-7xl xl:max-w-6xl xl:mx-auto">
          <div className="px-5 py-6 bg-yellow-100 sm:bg-gradient-to-l sm:from-yellow-100 sm:to-white">
            <h1 className="font-semibold text-2xl text-gray-800">Diagnosa</h1>
            <p className="text-base mt-4 text-gray-700 lg:mx-auto">Granuloma Inguinale sulit untuk dideteksi pada tahap awal. Baru dicurigai Granuloma Inguinale apabila timbul luka (ulkus). Pemeriksaan laboratorium yang dilakukan untuk membantu menegakkan diagnosis dengan cara swab, yaitu mengambil sampel cairan pada luka (ulkus) dengan cotton bud.
              Setelah itu, cotton bud tersebut dioles pada kaca preparat dan diperiksa dibawah mikroskop untuk menemukan bakteri. Biopsi dilakukan apabila luka tidak kunjung sembuh atau tidak ditemukan bakteri setelah pemeriksaan swab</p>
          </div>
          <div className="px-5 py-6 bg-teal-100 from-teal-100 sm:bg-gradient-to-r sm:to-white">
            <h1 className="font-semibold text-2xl text-gray-800">Pencegahan</h1>
            <p className="text-base mt-4 text-gray-700 lg:mx-auto">Penyakit Granuloma Inguinale merupakan salah satu penyakit yang menular lewat hubungan intim, maka dari itu melakukan hubungan seks yang aman merupakan upaya pencegahan yang dapat dilakukan, seperti penggunaan kondom, tidak berganti-ganti pasangan seksual, tidak melakukan hubungan intim dengan pekerja seks komersial.</p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:flex xl:items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:w-1/2">Pengobatan</h1>
            <p className="text-lg mt-3 sm:mt-2 lg:w-1/2 lg:pl-20">Pengobatan dini dari Granuloma Inguinale bertujuan untuk membunuh bakteri penyebab dan mencegah terjadinya komplilasi seperti terbentuknya jaringan parut dan pembengkakan permanen di area genital, anus, dan lipat paha. Pengobatan penyakit ini menggunakan antibiotik. Menurut Center for Disease Control and Prevention (CDC) antibiotik yang direkomendasikan pertama kali untuk penyakit ini adalah Azithromycin. Antibiotik alternatif lainnya dapat diberikan doxycycline, ciprofloksasin, erythromycin, dan kotrimoksazol.</p>
          </div>
        </div>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <p className="text-center text-lg mt-2">Lama pengobatan dengan antibiotik tersebut minimal 3 minggu dan dilanjutkan sampai luka sembuh sempurna dan semua gejala hilang. Kekambuhan dari penyakit ini dapat terjadi dalam 6-18 bulan setelah terapi antibiotik dan terapi antibiotik ulangan dibutuhkan dengan antibiotik yang lebih kuat dari sebelumnya. Sebaiknya diskusikan dengan dokter sebelum menggunakan antibiotik tersebut diatas, agar diagnosis tepat dan penggunaan antibiotik ini juga tepat.
                Apabila telah terbentuk jaringan parut dan telah terjadi pembengkakan permanen dari genital, anus, dan lipat paha, setelah infeksi sembuh, terapi pembedahan dapat dilakukan untuk mengoreksi keadaan tersebut</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
