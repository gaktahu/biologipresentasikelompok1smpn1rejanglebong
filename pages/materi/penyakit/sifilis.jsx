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
                  <span  className="block text-indigo-600 xl:inline"> Sifilis</span>
                </h1>
                <p  className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.7 | Penyakit Kelamin</p>
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
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Sifilis</h1>
            <p className="text-center text-lg mt-2">
            Raja singa atau sifilis adalah penyakit menular seksual yang disebabkan oleh bakteri. Gejala sifilis diawali dengan munculnya luka yang tidak terasa sakit di area kelamin, mulut, atau dubur.
            <br/>
            Luka atau ulkus pada area kelamin yang menjadi gejala sifilis (sipilis) sering kali tidak terlihat dan tidak terasa sakit sehingga tidak disadari oleh penderitanya. Meski begitu, pada tahap ini, infeksi sudah bisa ditularkan ke orang lain.
            <br/>
            Tanpa penanganan yang cepat dan tepat, sifilis dapat merusak otak, jantung, dan organ lain. Pada ibu hamil, infeksi juga berbahaya karena dapat menyebabkan kondisi janin tidak normal, bahkan kematian pada bayi. Oleh karena itu, kondisi ini perlu didiagnosis dan diobati sedini mungkin.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">PENYEBAB</h1>
            <p className="text-center text-lg mt-2">
              Sifilis disebabkan oleh infeksi bakteri Treponema pallidum yang menyebar melalui hubungan seksual dengan penderita raja singa. Bakteri penyebab sifilis juga bisa menyebar melalui melalui kontak fisik dengan luka di tubuh penderita.
              <br/><br/>
              Melihat cara penularannya, ada beberapa kondisi yang membuat seseorang berisiko tertular penyakit sipilis atau sifilis, yaitu:
              <br/>
              1)	Bergonta-ganti pasangan seksual, contohnya menjalani hubungan poliamori
              <br/>
              2)	Berhubungan seksual tanpa kondom
              <br/>
              3)	Memiliki pasangan seksual penderita sifilis
              <br/>
              4)	Memiliki orientasi seksual lelaki seks lelaki
              <br/>
              5)	Positif terinfeksi HIV
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Gejala</h1>
            <p className="text-center text-lg mt-2">
            Gejala sipilis digolongkan sesuai dengan tahap perkembangan penyakitnya. Tiap jenis sifilis memiliki gejala yang berbeda. Berikut adalah penjelasannya:
            <br/><br/>
              1.	Sifilis primer
              <br/>
              Sifilis jenis ini ditandai dengan luka (chancre) di tempat bakteri masuk.
              <br/><br/>
              2.	Sifilis sekunder
              <br/>
              Sifilis jenis ini ditandai dengan munculnya ruam pada tubuh.
              <br/><br/>
              3.	Sifilis laten
              <br/>
              Sifilis ini tidak menimbulkan gejala, tetapi bakteri ada di dalam tubuh penderita.
              <br/><br/>
              4.	Sifilis tersier
              <br/>
              Sifilis ini dapat menyebabkan kerusakan otak, saraf, jantung, atau organ lain.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Pengobatan</h1>
            <p className="text-center text-lg mt-2">
            Secara umum, pengobatan utama sifilis adalah dengan suntikan antibiotik penisilin yang dosisnya tergantung pada kondisi tiap penderita. Pada sifilis yang masih di tahap awal, suntik penisilin cukup dilakukan satu kali (dosis tunggal). Sedangkan pada sifilis tahap lanjut, diperlukan dosis tambahan sesuai petunjuk dokter.
            <br/><br/>
            Sipilis termasuk penyakit yang dapat disembuhkan, terutama jika cepat terdeteksi dan ditangani. Bila sifilis baru diobati saat sudah terjadi kerusakan organ, pengobatan sifilis tidak bisa memperbaiki kerusakan organ.
            <br/><br/>
            Antibiotik penisilin juga diberikan kepada ibu hamil yang menderita sifilis dan bayi yang dilahirkan dari ibu penderita sifilis. Bagi penderita yang alergi terhadap penisilin, diskusikan kembali manfaat dan risiko penggunaan penisilin, serta tanyakan kepada dokter kulit mengenai pengganti obat penisilin.
            <br/><br/>
            Setelah disuntik antibiotik penisilin, beberapa penderita bisa merasakan reaksi Jarisch-Herxheimer. Reaksi ini dapat menimbulkan gejala berupa demam, sakit kepala, dan nyeri otot atau sendi. Reaksi ini bukan suatu kondisi yang serius dan biasanya hanya berlangsung selama 1 hari.
            <br/><br/>
            Selama pengobatan berlangsung, penderita tidak boleh berhubungan seksual sampai dinyatakan sembuh. Untuk mencegah penularan, beri tahu pasangan tentang kondisi yang dialami agar pasangan segera melakukan tes sifilis dan segera diobati.
            <br/><br/>
            Setelah pengobatan, penderita tetap diminta untuk menjalani tes darah secara berkala. Tujuannya adalah untuk memastikan bahwa infeksi telah sembuh total. Penderita juga harus tetap waspada karena masih bisa terinfeksi sifilis kembali, meski sudah diobati dan dinyatakan sembuh.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Komplikasi</h1>
            <p className="text-center text-lg mt-2">
            Komplikasi dapat timbul jika sipilis sudah memasuki tahap tersier. Komplikasi yang dapat terjadi antara lain:
            <br/><br/>
            1.	Benjolan kecil atau gumma
            <br/>
            Kondisi ini bisa muncul di area kulit, tulang, hati, atau organ lain.
            <br/><br/>
            2.	Infeksi HIV
            <br/>
            Orang-orang yang menderita sifilis dan sering bergonti-ganti pasangan berisiko terkena HIV dua kali lipat dari orang biasa.
            <br/><br/>
            3.	Gangguan saraf
            <br/>
            Gangguan saraf yang dapat terjadi adalah impotensi, gangguan berkemih, gangguan penglihatan, kehilangan pendengaran, stroke, atau meningitis.
            <br/><br/>
              4.	Gangguan jantung
              <br/>
            Kelainan jantung yang dapat terjadi akibat sifilis adalah aneurisma aorta dan kerusakan katup jantung.
            <br/><br/>
            5.	Komplikasi kehamilan
            <br/>
            Komplikasi yang dapat dialami ibu hamil antara lain keguguran, kematian janin dalam kandungan, atau kematian bayi beberapa saat setelah persalinan.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl text-center font-bold text-white sm:text-4xl">Pencegahan</h1>
            <p className="text-center text-lg mt-2">
            Upaya paling ampuh untuk mencegah penularan sifilis yang menular lewat hubungan seksual adalah dengan berhubungan seksual dengan aman. Caranya adalah dengan setia pada satu pasangan dan menggunakan kondom saat berhubungan seksual.
            Sifilis juga bisa dicegah dengan membatasi konsumsi minuman beralkohol dan tidak menyalahgunakan NAPZA. Hal ini karena alkohol dan NAPZA dapat menurunkan kesadaran dan membuat seeseorang menjadi agresif atau impulsif. Akibatnya, risiko untuk berhubungan seksual dengan cara yang tidak aman akan meningkat.
            Di samping itu, penting bagi ibu hamil untuk memeriksakan kehamilannya secara rutin. Saat pemeriksaan rutin kehamilan, dokter kandungan akan melakukan skrining penyakit sifilis, biasanya saat trimester pertama kehamilan dan trimester akhir kehamilan
            Skrining sifilis juga perlu dilakukan secara rutin pada kelompok yang berisiko tinggi, seperti kelompok lelaki seks lelaki (LSL) atau pekerja seks komersial. Pemeriksaan pada kelompok ini sebaiknya dilakukan setiap 3 bulan sekali.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};
