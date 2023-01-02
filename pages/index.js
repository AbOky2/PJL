import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Accueil from '../components/Acceuil'
import Section from '../components/Section'
import Baniere from '../components/Baniere'
import Team from '../components/Team'

export default function Home() {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Parti pour la Justice et la Liberté</title>
        <meta name="description" content="PJL-TCHAD" />
        <link rel="icon" href="/lancementT.jpg" />
      </Head>

      
        <Nav />
        {/* <Accueil /> */}
        <Baniere />
        

          <Team />
      

      <Footer />


      
    </>
  )
}
