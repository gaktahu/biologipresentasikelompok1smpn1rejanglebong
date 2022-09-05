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
import kembar1 from '../../../assets/kutu.jpg'

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
                  <span  className="block text-indigo-600 xl:inline"> Kutu Kemaluan</span>
                </h1>
                <p  className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Bab 2.5 | Penyakit Kelamin</p>
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
      <div  className="py-6">
        <div  className="container mx-auto px-4">
          <div  className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1  className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">Pengertian</h1>
            <p  className="text-center text-lg mt-2">
              Kutu kemaluan atau Pthirus pubis adalah serangga parasit kecil yang dapat menempati area berambut di tubuh manusia, terutama di rambut kemaluan. Parasit ini hidup dengan cara menghisap darah melalui kulit dan dapat menimbulkan rasa gatal pada area yang dijangkitinya.
              <br/><br/>
              Kutu kemaluan memiliki ukuran tubuh yang lebih kecil daripada kutu kulit kepala. Oleh karena itu, kutu ini lebih dapat bertahan pada rambut yang bertekstur kasar dan tebal dibandingkan dengan rambut kepala yang cenderung lebih halus.
              <br/><br/>
              Selain di rambut kemaluan, kutu ini juga bisa mendiami bulu ketiak, bulu kaki, janggut, kumis, bulu dada, bulu punggung, serta bulu mata dan alis.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="py-6">
        <div  className="container mx-auto px-4">
          <div  className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1  className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">Penyebab</h1>
            <p  className="text-center text-lg mt-2">
              Kutu kemaluan umumnya menular melalui kontak langsung dengan orang yang terjangkit, terutama kontak langsung yang intim, seperti hubungan seksual. Selain itu, kutu kemaluan juga dapat menular melalui barang-barang yang terkontaminasi, seperti seprai, selimut, handuk, dan pakaian.
              <br/><br/>
              Pada anak-anak, penularan kutu kemaluan dapat terjadi ketika anak tidur di atas kasur yang sudah terpapar parasit ini dari orang yang terjangkit. Karena rambut kemaluan belum tumbuh, umumnya kutu kemaluan pada anak-anak bersarang di bulu mata dan alis.
              <br/><br/>
              Patut diketahui bahwa di kasus tertentu, ditemukannya kutu kemaluan pada alis dan bulu mata anak-anak juga dapat menandakan adanya kemungkinan pelecehan seksual sehingga perlu diselidiki lebih lanjut.
              <br/><br/>
              Kutu kemaluan memiliki tiga tahap perkembangan, yaitu telur, nimfa, dan kutu dewasa. Telur kutu biasanya melekat erat pada pangkal batang rambut dan berwarna putih kekuningan. Telur akan menetas dalam waktu 6–10 hari dan menjadi nimfa.
              <br/><br/>
              Bentuk nimfa serupa dengan kutu dewasa, tetapi ukurannya lebih kecil, sehingga sulit untuk dilihat. Perkembangan nimfa hingga menjadi kutu dewasa berkisar antara 2–3 minggu.
              <br/><br/>
              Kutu dewasa berwarna sedikit abu-abu, memiliki 6 kaki sehingga terlihat seperti kepiting, dan berukuran sekitar 2 mm. Kutu betina dapat mengeluarkan hingga 300 telur sepanjang hidupnya yang berkisar antara 1–3 bulan.
              <br/><br/>
              Kutu kemaluan harus hidup pada kulit manusia dan tidak akan menular dengan meloncat ke tubuh orang lain. Jika terlepas atau jatuh dari rambut, kutu kemaluan akan mati dalam waktu 1–2 hari.
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className="py-6">
          <div  className="container mx-auto px-4">
            <div  className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1  className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">Faktor Resiko</h1>
              <p  className="text-center text-lg mt-2">
                Kutu kemaluan dapat menular ke siapa saja. Akan tetapi, penularan lebih sering terjadi pada orang dewasa yang sudah aktif secara seksual. Selain itu, tinggal di lingkungan atau area yang ditempati banyak orang, seperti asrama, juga dapat meningkatkan risiko seseorang tertular kutu kemaluan.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">Gejala</h2>
          </div>
          <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Rasa gatal pada kulit, terutama pada malam hari, akibat reaksi alergi terhadap air liur kutu</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Bintik kecil berwarna biru keunguan pada kulit bekas gigitan kutu</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Bintik cokelat pada pakaian dalam, yang merupakan kotoran kutu kemaluan</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Telur kutu pada pangkal rambut atau kutu pada rambut-rambut terlihat</span>
            </div>
            <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
              <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Demam ringan</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-10 lg:py-12">
           <div className="max-w-7xl mx-auto px-4 lg:flex xl:items-center">
             <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:w-1/2">PENGOBATAN KUTU KEMALUAN</h1>
             <p className="text-lg mt-3 sm:mt-2 lg:w-1/2 lg:pl-20">Pengobatan kutu kemaluan dapat dilakukan dengan pemberian obat dan perawatan mandiri. Penjelasannya adalah sebagai berikut:</p>
           </div>
         </div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="relative md:col-span-2"></div>
              <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
                <div className="rounded lg:p-5 lg:transition lg:duration-300">
                  <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium text-white rounded bg-purple text-xs">1</span>
                    <p className="text-lg font-semibold sm:text-base">Pemberian obat-obatan</p>
                  </div>
                  <p className="text-sm">Kutu kemaluan dapat diatasi dengan obat luar, seperti losion, krim, atau sampo. Jenis obat antiparasit yang biasa digunakan adalah permethrin. terdapat beberapa efek samping yang bisa muncul akibat penggunaan obat antiparasit ini, yaitu gatal, merah, atau panas pada kulit. Bagi pasien yang terjangkit kutu kemaluan di bulu mata, dokter dapat menganjurkan pasien untuk mengoleskan petroleum jelly secara hati-hati di area yang terjangkit. Obat tetes mata juga akan diberikan untuk mengatasi keluhan pada mata.</p>
                </div>
                <div className="rounded lg:p-5 lg:transition lg:duration-300">
                  <div className="flex items-center mb-1"><span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">2</span>
                    <p className="text-lg font-semibold sm:text-base">Perawatan Mandiri</p>
                  </div>
                  <div className="">
                    <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                      <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-purple-500 hover:border-purple-500 rounded-global">
                        <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Mencuci dan mengeringkan rambut pada area yang terjangkit kutu kemaluan dengan bersih dan teratur</span>
                      </div>
                      <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                        <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Menggunakan pakaian dalam yang bersih dan menggantinya secara teratur</span>
                      </div>
                      <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                        <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Menyingkirkan kutu kemaluan yang terlihat pada rambut dengan sisir kutu atau dengan kuku</span>
                      </div>
                      <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                        <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Mencuci seluruh handuk, pakaian, atau seprai dengan air panas</span>
                      </div>
                      <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                        <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Membersihkan seluruh ruangan di rumah, terutama yang sering ditempati, seperti kamar tidur atau ruang keluarga</span>
                      </div>
                      <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                        <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Membersihkan kamar mandi atau toilet dengan cairan pembersih karbol atau disinfektan</span>
                      </div>
                      <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-purple-500 hover:bg-purple-500 rounded-global">
                        <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-purple-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Menghindari hubungan seks sebelum kutu kemaluan benar-benar sembuh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className="py-6">
          <div  className="container mx-auto px-4">
            <div  className="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1  className="text-3xl text-center font-bold text-purple-500 sm:text-4xl">Komplikasi</h1>
              <p  className="text-center text-lg mt-2">
              Meski jarang terjadi, seseorang yang terjangkit kutu kemaluan dapat mengalami sejumlah komplikasi jika kondisinya tidak segera diatasi. Komplikasi yang dapat timbul adalah:
              <br/>
              •	Infeksi, seperti impetigo atau bisul, akibat seringnya menggaruk area yang terjangkit
              <br/>
              •	Peradangan kelopak mata (blefaritis) atau konjungtivitis, akibat keberadaan kutu kemaluan di bulu mata
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
           <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">Pencegahan</h2>
         </div>
         <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
           <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-primary-500 hover:border-primary-500 rounded-global">
             <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                   <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                 </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Hindari berbagi penggunaan barang pribadi, seperti handuk dan pakaian.</span>
           </div>
           <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
             <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                   <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                 </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Hindari melakukan hubungan seksual yang tidak sehat, seperti sering berganti-ganti pasangan.</span>
           </div>
           <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
             <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                   <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                 </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Cuci seprai, handuk, dan pakaian dengan air panas secara berkala, idealnya 1–2 minggu sekali.</span>
           </div>
           <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
             <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                   <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                 </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Bersihkan kamar tidur, ruang keluarga, kamar mandi, dan area di rumah yang sering ditempati secara rutin.</span>
           </div>
           <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
             <div className="mr-2"><span><svg className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8" className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8" stroke="currentColor" viewBox="0 0 52 52">
                   <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                 </svg></span></div><span className="transition-colors duration-200 group-hover:text-white">• Jika terjangkit kutu kemaluan, jangan dulu berhubungan seksual hingga dinyatakan sembuh oleh dokter, dan ajak pasangan untuk memeriksakan diri ke dokter.</span>
           </div>
         </div>
       </div>
      </SwiperSlide>
    </Swiper>
  );
};
