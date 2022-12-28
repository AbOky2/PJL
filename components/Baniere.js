import React from 'react'
import Pulse from 'react-reveal/Pulse';
import  Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';


function Baniere() {
  return (
<>
    <div className='bg-gray-100 p-4 w-full'>
    
    <div className='flex justify-between mb-8 mt-8 sm:grid sm:grid-rows-1 gap-4 p-4  '>
            <div className='w-full order-last sm:order-first'>
            <img src="law.png" width="100%" height={10} alt="placehold images"/>

            </div>
            <div className='  p-4  w-full 'id='bienvenue'>
                <Pulse>
                <h1 className=' font-bold text-[60px] font-[Open Sans]  text-black flex justify-center items-center mb-4 iphone3:text-[40px]' >
                    <a href='#bienvenue' aria-hidden="true">
                    Bienvenue au PJL
                    </a>
                    </h1></Pulse>
                <Slide bottom >
                <p className='leading-7 text-black'>
                    
                    Le Parti pour la Justice et la Liberté (PJL) est un jeune parti politique œvra pour le <strong>salut</strong> et la <strong>rédemption</strong> du peuple tchadien. En effet le <strong> PJL </strong> se fixe commme objectifs l'instauration d'institutions politiques démocratiques modernes, solides, adaptées aux réalités nationales d'une part et la consolidation de <strong> l'unité nationale </strong>, la <strong> sécurité</strong> du peuple tchadien, le <strong>libéralisme économique</strong>, et la <strong>promotion des PME, de l'agriculture, et de l'elevage</strong> d'autres part.
                </p>
                </Slide>

            </div>
        </div>
    </div>

    

    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='text-[40px] text-center justify-center flex font-[Open Sans] font-semibold text-orange-100' id='objectif'>
            <a href='#objectif' aria-hidden="true">
            Nos objectifs
            </a>
     </div>
    
    <div className=' p-4 flex justify-between  sm:flex-col gap-4 '>
    
        <Fade left>
        <div className='bg-white dark:bg-gray-900 w-full order-last sm:order-first p-4 border-[1px] rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] dark:text-white">Santé et Affaires sociales</h5>
                
            </div>
            <div>
                <p className='text-[#6976A0] font-[Open Sans] '>
                    Le parti mettra tout en œuvre afin que la <strong>santé pour tous</strong> soit possible. Pour cela, des actions cohérentes et concertés telles que la mise en place d'une couverture sanitaire nationale par la réhabilitation, la construction des infrastructures adequats sur toute l'étendu du territoire, la formation des cadres de tous les niveaux et la valorisation des medecins sont envisagées.
                </p>
            </div>
        </div>
        </Fade>
        <Fade left>
        <div className='bg-white w-full p-4 border-[1px] rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] dark:text-white">Education</h5>
            </div>
            <div>
                <p className='text-[#6976A0] font-[Open Sans] '>
                    Le savoir étant le meilleur moyen de l'épanouissement de l'homme et l'un de ses droits fondamentaux, le <strong>PJL</strong> mettra tout en œuvre pour généraliser l'enseignement élementaire en le rendant obligatoire sur toute l'étendu du territoire. Le metier de l'enseignement subira un changement notable avec la révalorisation des enseignants pour un meilleur rendement.
                </p>
                
            </div>
            
        </div>
        </Fade>
        <Fade left>
        <div className='bg-white w-full p-4 border-[1px] rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] dark:text-white">
                Culture
                </h5>
            </div>
            <div>
                <p className='text-[#6976A0] font-[Open Sans] '>
                    Le PJL luttera sans relâche pour réhabiliter et promouvoir les cultures et valeurs traditionnelles du <strong>Tchad</strong> afin de les mettre au service de l'unité nationale et l'épanouissement de l'homme tchadien dans le respect de la <strong>diversité complémentaire</strong> en œuvrant pour la promotion des langues nationales et en favorisant le sport des masses et le sport d'élite dans toutes les disciplinees pour le renom du pays.
                </p>
            </div>
            
        </div>
        </Fade>
        <Roll left>
        <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900  max-w-[110px]">Plus d'infos</button></Roll>


        
     </div>
     </div>
     

   
</>
  )
}

export default Baniere