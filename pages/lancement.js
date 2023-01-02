import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Accueil from '../components/Acceuil'
import Section from '../components/Section'
import Baniere from '../components/Baniere'
import Team from '../components/Team'
import Lancement from '../components/Lancement';


function lancement() {
  return (
    <>
    <Head>
    <title>Lancement d'un nouveau parti politique</title>
        <meta name="description" content="PJL-TCHAD" />
        <link rel="icon" href="/lancement2.jpg" />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
      </Head>
    <Nav />
    <Lancement />
    
        {/* <Accueil /> */}

    <div className='p-4 dark:bg-slate-300 bg-slate-200'>
        <h1 className='text-[30px] font-extrabold text-[Open Sans] mt-8 mb-4 dark:text-black text-right'>توجيهات </h1>
        <div className='text-[20px] dark:text-black'>
        يخبر حزب العدالة والحرية الرأي العام الداخلي والخارجي، بانطلاق أنشطته داخل الوطن بعد تصريح الحكومة له، لقد انضم حزب العدالة والحرية إلى صفوف الأحزاب السياسية التي تناضل من أجل كرامة الشعب التشادي، ويضع الحزب أهدافه لإنشاء دولة مؤسسات سياسية ديمقراطية حديثة ومتينة ،تتكيف مع الحقائق الوطنية من ناحية، وتوطيد الوحده الوطنية ،وأمن الشعب التشادي ،والليبرالية الاقتصادية وتعزيز الشركات الصغيرة والمتوسطة للرقي بطموحات الشباب ، والزراعة والثروة الحيوانية من ناحية أخرى. يدعوا الحزب الشعب التشادي للاستمرار على النضال حتى تحقيق الأهداف الغالية للنهوض ببلدنا إلى بر الأمان
            
        </div>
     </div>

      

      <Footer />
</>
  )
}

export default lancement