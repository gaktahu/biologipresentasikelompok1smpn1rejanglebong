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
import kembar1 from '../../../assets/kutil.jpeg'

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
                  <span className="block text-indigo-600 xl:inline"> Kutil Kelamin</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.4 | Penyakit Kelamin</p>
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
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:w-1/2">Kutil Kelamin</h1>
            <p className="text-lg mt-3 sm:mt-2 lg:w-1/2 lg:pl-20">Kutil kelamin adalah penyakit kelamin yang mengakibatkan timbulnya benjolan kecil lembut di daerah kelamin. Penyebab utama timbulnya kutil di kelamin adalah infeksi human papillomavirus (HPV). Ada lebih dari 200 jenis virus HPV yang bisa menginfeksi tubuh manusia.</p>
          </div>
        </div>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <p className="text-center text-lg mt-2">Kutil di kelamin umumnya menyerang tidak pandang bulu, baik perempuan dan laki-laki bisa terkena. Akan tetapi, biasanya perempuan lebih rentan terkena HPV genital ini. Pertumbuhan kutil ini sangat lembut karena pada awalnya tidak terdeteksi secara kasat mata. Lama kelamaan kutil akan muncul dengan sendirinya. Tumbuhnya kutil di kelamin ini bisa menimbulkan rasa sakit perih, cenderung tidak nyaman, dan gatal.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-12 dark:divide-undefined">
        <div className="md:flex md:items-center lg:flex-row lg:inline lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 xl:gap-x-14">
          <div className="px-4 mt-5 md:flex md:flex-col md:gap-y-3 md:ml-2 lg:col-span-1">
            <div className="flex items-baseline">
              <h1 className="font-black text-8xl text-purple-500">Penyebab</h1>
              <p className="font-black text-6xl text-purple-500">.</p>
            </div>
            <h1 className="font-bold my-5 tracking-tight text-slate-100 dark:divide-undefined text-2xl md:my-1">Hubungan seks yang tidak aman</h1>
            <p className="dark:divide-undefined text-gray-300">Kutil di kelamin ini menyebar melalui kontak fisik pada hubungan seksual, terutama yang tidak terlindungi dengan kondom. Hal ini biasanya melibatkan aktivitas seksual seperti:</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
            <div className="rounded lg:p-5 lg:transition lg:duration-300">
              <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium text-white rounded bg-purple text-xs">1</span>
                <p className="text-lg font-semibold sm:text-base">Penetrasi seks</p>
              </div>
              <p className="text-sm">Penyebab utama penularan kutil kelamin adalah penetrasi seks, yaitu ketika penis masuk ke dalam vagina. Penularan juga akan lebih mudah terjadi jika penetrasi dilakukan tanpa kondom. Ditambah lagi, apabila Anda aktif melakukan hubungan seks dengan lebih dari satu orang atau bergonta-ganti pasangan tanpa memakai kondom, risiko untuk tertular kutil kelamin jauh lebih tinggi. Pasalnya, Anda tidak tahu betul bagaimana riwayat kesehatan pasangan seks Anda.</p>
            </div>
            <div className="rounded lg:p-5 lg:transition lg:duration-300">
              <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">2</span>
                <p className="text-lg font-semibold sm:text-base">Seks anal</p>
              </div>
              <p className="text-sm">Penularan kutil kelamin juga tak hanya dilakukan dengan penetrasi penis ke vagina, tetapi juga melalui seks anal.
                Jadi, ketika Anda melakukan anal seks, risiko untuk mengalami kutil kelamin semakin besar.</p>
            </div>
            <div className="rounded lg:p-5 lg:transition lg:duration-300">
              <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-purple text-white text-xs">3</span>
                <p className="text-lg font-semibold sm:text-base">Alat seks mainan (sex toys)</p>
              </div>
              <p className="text-sm">Pemakaian alat bantu seks seperti sex toys juga meningkatkan risiko Anda tertular kutil kelamin.
                Risiko Anda bisa menjadi lebih besar jika sex toys digunakan oleh lebih dari satu orang atau kebersihannya tidak dijaga dengan baik.</p>
            </div>
            <div className="rounded lg:p-5 lg:transition lg:duration-300">
              <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">4</span>
                <p className="text-lg font-semibold sm:text-base">Oral seks</p>
              </div>
              <p className="text-sm">Oral seks juga termasuk salah satu penyebab penyebaran kutil, namun kasus ini lebih jarang terjadi.
                Penting juga untuk diingat bahwa kutil kelamin tidak selalu menular lewat cairan dari kelamin.
                Penyebaran kutil di kelamin juga dapat ditularkan dari orang ke orang melalui kontak kulit ke kulit, terutama jika seseorang secara sengaja atau tidak menyentuh kutil tersebut.
                Kutil di kelamin tidak menular melalui ciuman, berpelukan atau berbagi handuk, pakaian dan barang-barang sehari-hari.
                Namun, penggunaan kondom dapat membantu melindungi penis atau vagina terhadap penularan kutil kelamin.</p>
            </div>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1 className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">Ada faktor-faktor lainnya yang berperan dalam proses penyebaran kutil kelamin.</h1>
            <p className="text-center text-lg mt-2">
            •	Penderita kencing manis atau diabetes mellitus yang mudah mengalami infeksi di dalam organ vital.
            <br/><br/>
            •	Pernah menderita penyakit menular seksual lain sebelumnya.
            <br/><br/>
            •	Stres yang menyebabkan keringat keluar terus.
            <br/><br/>
            •	Imunitas tubuh yang menurun sehingga mudah terserang virus, misalnya mengonsumsi obat tertentu, baru menerima donor organ, atau menderita HIV.
            <br/><br/>
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-slate-100 sm:text-4xl md:mx-auto">Komplikasi</h2>
            <p className="text-base md:text-lg">Kutil yang bersifat ringan sebenarnya dapat hilang dengan sendirinya.
              Namun, jika kutil kelamin menimbulkan gejala yang tidak nyaman dan tidak segera diatasi, ia berisiko menimbulkan bahaya.</p>
          </div>
          <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
            <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 1 </p>
                <p className="text-lg font-bold leading-5">Kanker</p>
              </div>
              <p className="text-sm">Kanker serviks telah dikaitkan erat dengan infeksi HPV genital, termasuk yang menjadi penyebab kutil kelamin.
                Beberapa jenis kanker seperti kanker vulva, kanker anus, kanker penis, kanker mulut, dan kanker tenggorokan juga termasuk komplikasi dari kutil kelamin.</p>
            </div>
            <div className="p-5 duration-300 transform   border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 2 </p>
                <p className="text-lg font-bold leading-5">Gangguan Kehamilan</p>
              </div>
              <p className="text-sm">Kutil kelamin bisa juga menjadi penyebab masalah selama kehamilan. Ketika kutil jadi membesar, ibu hamil sulit untuk buang air kecil.
                Kutil pada dinding vagina dapat mengurangi kemampuan jaringan vagina untuk meregang saat proses melahirkan normal.
                Kutil besar pada vulva atau di vagina dapat menyebabkan perdarahan saat proses persalinan.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1 className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">Pencegahan</h1>
            <p className="text-center text-lg mt-2">
            •	Tidak bergonta-ganti pasangan dan melakukan hubungan seks hanya dengan 1 pasangan.
            <br/><br/>
            •	Gunakan kondom untuk mengurangi risiko terkena penyakit menular seksual apa pun.
            <br/><br/>
            •	Mendapatkan vaksin HPV.
            <br/><br/>
            •	Menjalani tes skrining secara berkala, terutama jika Anda cukup aktif secara seksual.
            <br/><br/>
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};
