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
import kembar1 from '../../../assets/mono.jpeg'

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
                  <span  className="block text-indigo-600 xl:inline"> Mononukleosis</span>
                </h1>
                <p  className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.6 | Penyakit Kelamin</p>
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
              <h1 className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">MONONUKLEOSIS</h1>
              <p className="text-center text-lg mt-2">
              Mononukleosis adalah penyakit menular yang disebabkan oleh infeksi virus Epstein-Barr (EBV). Penyebaran EBV terjadi melalui cairan tubuh, terutama air liur. Maka dari itu, penyakit ini sering dikenal dengan nama “kissing disease”.
              <br/><br/>
              Mononukleosis atau demam kelenjar dapat dialami oleh siapa saja, tetapi penyakit ini lebih sering menyerang remaja. Mononukleosis bukan termasuk penyakit serius. Namun, jika dibiarkan, gejalanya bisa memburuk dan menghambat aktivitas sehari-hari.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">Penyebab</h1>
              <p className="text-center text-lg mt-2">
                Penyebab utama mononukleosis adalah virus Epstein-Barr (EBV). Penyebaran virus dapat terjadi melalui kontak langsung dengan air liur dari orang yang terinfeksi. Virus juga dapat menular melalui cairan tubuh lain, seperti dahak, darah, sperma, atau cairan vagina.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">Beberapa aktivitas yang dapat meningkatkan risiko penyebaran mononukleosis adalah:</h2>
        </div>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
            <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Berciuman</span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Batuk atau bersin</span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Hubungan seksual</span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Berbagi pakai peralatan makan atau minum</span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Transfusi darah</span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
            <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Transplantasi organ</span>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <p className="text-center text-lg mt-2">
            Selain EBV, mononukleosis juga bisa disebabkan oleh jenis virus lainnya, seperti Cytomegalovirus (CMV), Toxoplasma, HIV, Rubella, Hepatitis (A, B, atau C), dan Adenovirus. Namun, mononukleosis akibat virus-virus tersebut lebih jarang terjadi jika dibandingkan dengan EBV.
            <br/>
            Terdapat beberapa kelompok orang yang rentan terhadap mononukleosis, yaitu:
            <br/><br/>
            •	Dewasa muda berusia 15–30 tahun, terutama yang sering melakukan kontak langsung dengan banyak orang dan sibuk beraktivitas
            <br/>
            •	Pasien yang mengonsumsi obat imunosupresif
            <br/>
            •	Dokter dan perawat
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <p className="text-center text-lg mt-2">
            Beberapa gejala lain yang dapat muncul adalah:
            <br/>
            •	Demam
            <br/>
            •	Sakit kepala
            <br/>
            •	Badan terasa lemas dan mudah lelah
            <br/>
            •	Pembengkakan amandel
            <br/>
            •	Nafsu makan menurun
            <br/>
            •	Ruam di kulit
            <br/>
            •	Nyeri otot
            <br/>
            <br/>
            Sebagian penderita mononukleosis juga dapat mengalami pembengkakan pada limpa (splenomegali) atau hati (liver), yang dapat terjadi setelah 2 atau 3 minggu mengalami penyakit ini. Hal ini dapat menimbulkan nyeri di perut bagian kiri atas.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-slate-100 sm:text-4xl md:mx-auto">Pengobatan</h2>
          <p className="text-base md:text-lg">Belum ada metode pengobatan untuk mengatasi mononukleosis. Namun demikian, tindakan medis juga tidak diperlukan, karena penyakit ini umumnya dapat sembuh dengan sendirinya dalam beberapa minggu.</p>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 1 </p>
              <p className="text-lg font-bold leading-5">• Beristirahat yang cukup</p>
            </div>
            <p className="text-sm">Istirahat yang cukup dapat membantu meningkatkan daya tahan tubuh dan membantu tubuh melawan infeksi. Perbanyak istirahat, terutama di minggu ke–1 hingga ke–2 sejak gejala awal muncul.</p>
          </div>
          <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 2 </p>
              <p className="text-lg font-bold leading-5">• Mencukupi kebutuhan cairan tubuh</p>
            </div>
            <p className="text-sm">Banyak minum air putih dapat membantu meredakan demam, mengatasi radang tenggorokan, dan mencegah dehidrasi.</p>
          </div>
          <div className="relative p-5 duration-300 transform  border-2 shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 3 </p>
              <p className="text-lg font-bold leading-5">• Menghindari aktivitas berat</p>
            </div>
            <p className="text-sm">Tidak melakukan aktivitas berat selama 4–6 minggu setelah terdiagnosis mononukleosis dapat menurunkan risiko pembengkakan limpa. Limpa yang membengkak dapat pecah dan mengalami perdarahan jika terjadi benturan yang cukup keras saat beraktivitas.</p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
          </div>
          <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500">4</p>
              <p className="text-lg font-bold leading-5">• Berkumur dengan air garam</p>
            </div>
            <p className="text-sm">Berkumur dengan air garam beberapa kali dalam sehari dapat meredakan sakit tenggorokan. Caranya adalah dengan melarutkan 1,5 sendok teh garam ke dalam segelas air hangat.</p>
          </div>
          <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500">5</p>
              <p className="text-lg font-bold leading-5">• Melakukan kompres dingin atau panas</p>
            </div>
            <p className="text-sm">Kompres dingin atau panas dapat dilakukan untuk meredakan gejala pegal atau nyeri otot. Namun, jika gejala tidak juga mereda, lakukan pemeriksaan ke dokter</p>
          </div>
          <div className="relative p-5 duration-300 transform  border-2 shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 6 </p>
              <p className="text-lg font-bold leading-5">• Menghindari konsumsi minuman beralkohol</p>
            </div>
            <p className="text-sm">Konsumsi minuman beralkohol dapat memperburuk gangguan pada fungsi hati. Oleh sebab itu, kebiasaan tersebut harus dihindari.</p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <p className="text-center text-lg mt-2">
            Selain upaya mandiri di atas, dokter juga akan meresepkan obat untuk meredakan gejala yang dialami penderita, yaitu:
            <br/>
            •	Obat pereda nyeri, seperti paracetamol atau ibuprofen, untuk meredakan nyeri otot dan demam
            <br/>
            <br/>
            •	Kortikosteroid, untuk meredakan pembengkakan di amandel dan peradangan di tenggorokan
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-slate-100 sm:text-4xl md:mx-auto">Komplikasi</h2>
            <p className="text-base md:text-lg">Mononukleosis bukan penyakit yang serius. Namun, pada kasus yang jarang terjadi, komplikasi dapat terjadi pada penderita mononukleosis yang memiliki daya tahan tubuh lemah, misalnya karena menderita HIV/AIDS atau sedang mengonsumsi obat-obatan tertentu.
              Komplikasi yang dapat terjadi akibat mononukleosis antara lain:</p>
          </div>
          <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
            <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 1 </p>
                <p className="text-lg font-bold leading-5">• Gangguan pernapasan</p>
              </div>
              <p className="text-sm">Pembengkakan amandel (tonsillitis) pada penderita mononukelosis berisiko menyebabkan penyempitan di saluran pernapasan sehingga menyebabkan penderitanya sulit bernapas.</p>
            </div>
            <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 2 </p>
                <p className="text-lg font-bold leading-5">• Robekan pada limpa</p>
              </div>
              <p className="text-sm">Mononukleosis dapat menyebabkan organ limpa membengkak. Pada kasus yang parah, kondisi tersebut bisa mengakibatkan limpa robek. Hal ini akan menyebabkan perdarahan di dalam perut dan dapat membahayakan nyawa penderitanya.</p>
            </div>
            <div className="relative p-5 duration-300 transform  border-2 shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 3 </p>
                <p className="text-lg font-bold leading-5">• Peradangan hati</p>
              </div>
              <p className="text-sm">Penderita mononukleosis berisiko mengalami peradangan hati (hepatitis), yang ditandai dengan penyakit kuning (jaundice).</p>
              <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
            </div>
            <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500">3</p>
                <p className="text-lg font-bold leading-5">• Penurunan jumlah sel darah dalam tubuh</p>
              </div>
              <p className="text-sm">Kekurangan sel darah merah (anemia hemolitik) dapat menyebabkan sesak napas dan kelelahan, sedangkan kekurangan sel darah putih (neutropenia) bisa menyebabkan tubuh rentan terserang infeksi. Sementara penurunan jumlah sel keping darah (trombositopenia) bisa menyebabkan tubuh rentan mengalami perdarahan.</p>
            </div>
            <div className="p-5 duration-300 transform  border-2 border-dashed shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500">4</p>
                <p className="text-lg font-bold leading-5">• Gangguan jantung</p>
              </div>
              <p className="text-sm">Penderita mononukleosis dapat mengalami gangguan pada jantung, seperti peradangan pada otot jantung (miokarditis), atau gangguan irama jantung (aritmia).</p>
            </div>
            <div className="relative p-5 duration-300 transform  border-2 shadow-sm hover:-translate-y-2 border-purple-500 dark:bg-gray-900 rounded-global">
              <div className="flex items-center mb-2">
                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-500"> 3 </p>
                <p className="text-lg font-bold leading-5">• Gangguan saraf</p>
              </div>
              <p className="text-sm">Contoh gangguan saraf yang dapat terjadi akibat mononukleosis antara lain sindrom Guillain-Barré, radang selaput otak (meningitis),Multiple sclerosis, radang otak (ensefalitis), dan kejang.</p>
              <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"></p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
