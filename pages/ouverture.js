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


function ouverture() {
  return (
    <>
    <Head>
    <title>Parti pour la Justice et la Liberté</title>
        <meta name="description" content="PJL-TCHAD" />
        <link rel="icon" href="/abdoulay_page.jpg" />
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
        <h1 className='text-[30px] font-extrabold text-[Open Sans] mt-8 mb-4 dark:text-black'>Point de Prese </h1>
        <div className='text-[20px] dark:text-black'>
            Lancement ce jour du 31 Decembre à 16h de notre parti politique le <strong>Parti pour la Justice et la Liberté </strong>.
            En effet le parti <strong>PJL</strong> vient officiellement rejoindre le rang des parti politiques tchadiens.
            <br />Le <strong> PJL </strong> se fixe comme objectifs l'instauration d'institutions politiques démocratiques modernes, solides, adaptées aux réalités nationales d'une part et la consolidation de <strong> l'unité nationale </strong>, la <strong> sécurité</strong> du peuple tchadien, le <strong>libéralisme économique</strong>, et la <strong>promotion des PME, de l'agriculture, et de l'elevage</strong> d'autres part.
            
        </div>
     </div>

      

      <Footer />
</>
  )
}

export default ouverture