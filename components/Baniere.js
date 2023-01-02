import React from 'react'
import Pulse from 'react-reveal/Pulse';
import  Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';


function Baniere() {
  return (
<>
    <div className='bg-white p-4 w-full'>
    
    <div className='flex justify-between mb-8 mt-8 sm:grid sm:grid-rows-1 gap-4 p-4  '>
            <div className='w-full order-last sm:order-first'>
            <img src="team.jpg" width="100%" height={10} alt="placehold images"/>

            </div>
            <div className='  w-full 'id='bienvenue'>
                <Pulse>
                <h1 className=' font-bold text-[60px] font-[Open Sans]  text-black flex justify-center items-center mb-4 iphone3:text-[30px]' >
                    <a href='#bienvenue' aria-hidden="true">
                    Bienvenue au PJL
                    </a>
                    </h1></Pulse>
                <Slide bottom >
                <p className='leading-7 text-gray-600 font-medium w-full overflow-hidden text-ellipsis text-lg'>
                    
                    Le Parti pour la Justice et la Liberté (PJL) est un jeune parti politique œvra pour le <strong>salut</strong> et la <strong>rédemption</strong> du peuple tchadien. En effet le <strong> PJL </strong> se fixe comme objectifs l'instauration d'institutions politiques démocratiques modernes, solides, adaptées aux réalités nationales d'une part et la consolidation de <strong> l'unité nationale </strong>, la <strong> sécurité</strong> du peuple tchadien, le <strong>libéralisme économique</strong>, et la <strong>promotion des PME, de l'agriculture, et de l'elevage</strong> d'autres part.
                </p>
                </Slide>

            </div>

            {/* //En Arabe */}

            <div className='  w-full 'id='bienvenue'>
                <Pulse>
                <h1 className=' font-bold text-[50px] font-[Open Sans]  text-black flex justify-center items-center mb-4 iphone3:text-[30px]' >
                    <a href='#bienvenue' aria-hidden="true">
                    مرحبا بكم في حزب العدالة والحرية
                    </a>
                    </h1></Pulse>
                <Slide bottom >
                <p className='leading-7 text-gray-600 font-medium w-full overflow-hidden text-ellipsis text-lg text-right'>
                    
                حزب العدالة والحرية هو حزب سياسي أنشأ بيد شباب تشاديين غيورين لإنقاذ الشعب التشادي  
                
                                
                حدد حزب العدالة والحرية لنفسه أهدافا تتمثل في الاتي:
                ,ترسيخ الوحدة الوطنية بين ابنا الوطن
                ,ترسيخ الديمقراطية وسيادة القانون والحكم الرشيد
                ,تحسين الظروف الإجتماعية والاقتصادية والثقافية لجميع الفئات من أبناء الوطن.
                تعزيز التنمية المستدامة في المناطق الريفية.
                تحقيق الحرية والعدالة من خلال الصوت الديمقراطي.
                توعية الشباب على المشاركة الفعالة في سياسة الوطن والمطالبة عن حقوقهم


 ترسيخ الوحدة الوطنية لمحاربة الجهوية والقبلية والعنصرية.
الممارسة الفعالة وتعزيز ثنائية اللغة والدفاع عنها بالطرق القانونية
 تعزيز التنمية الاقتصادية الذاتية والمتوازنة من خلال الأمثل لجميع الموارد المادية والبشرية والفكرية والمعنوية.

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
        <div className='bg-blue-400  w-full order-last sm:order-first p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-300 dark:text-white">Santé et Affaires sociales</h5>
                
            </div>
            <div>
                <p className='text-gray-200 font-[Open Sans] '>
                    Le parti mettra tout en œuvre afin que la <strong>santé pour tous</strong> soit possible. Pour cela, des actions cohérentes et concertés telles que la mise en place d'une couverture sanitaire nationale par la réhabilitation, la construction des infrastructures adequats sur toute l'étendu du territoire, la formation des cadres de tous les niveaux et la valorisation des medecins sont envisagées.
                </p>
            </div>
        </div>
        </Fade>
        <Fade left>
        <div className='bg-yellow-500  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">Education</h5>
            </div>
            <div>
                <p className='text-[#6976A0] font-[Open Sans] '>
                    Le savoir étant le meilleur moyen de l'épanouissement de l'homme et l'un de ses droits fondamentaux, le <strong>PJL</strong> mettra tout en œuvre pour généraliser l'enseignement élementaire en le rendant obligatoire sur toute l'étendu du territoire. Le metier de l'enseignement subira un changement notable avec la révalorisation des enseignants pour un meilleur rendement.
                </p>
                
            </div>
            
        </div>
        </Fade>
        <Fade left>
        <div className='bg-red-700  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">
                Culture
                </h5>
            </div>
            <div>
                <p className='text-black font-[Open Sans] '>
                    Le PJL luttera sans relâche pour réhabiliter et promouvoir les cultures et valeurs traditionnelles du <strong>Tchad</strong> afin de les mettre au service de l'unité nationale et l'épanouissement de l'homme tchadien dans le respect de la <strong>diversité complémentaire</strong> en œuvrant pour la promotion des langues nationales et en favorisant le sport des masses et le sport d'élite dans toutes les disciplinees pour le renom du pays.
                </p>
            </div>
            
        </div>
        </Fade>

        <Flip left>
        <div className='bg-slate-100  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">
                Environement
                </h5>
            </div>
            <div>
                <p className='text-black font-[Open Sans] '>
                    L'environement sera également parmi les préoccupations majeures du PJL.
                </p>
            </div>
            
        </div>
        </Flip>

        <Flip left>
        <div className='bg-slate-100  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">
                Jeunesse
                </h5>
            </div>
            <div>
                <p className='text-black font-[Open Sans] '>
                    Etant un pays où 80% de la population à moins de trente (30) ans, l'avenir du pays se dessinera autour de la jeunnesse.
                    <br/> Cette relance se fera à travers les formations adaptées aux besoins actuels du pays.
                </p>
            </div>
            
        </div>
        </Flip>
        <Roll left>
        <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900  max-w-[110px]">
            <a href='/ouverture'>
                Plus d'infos
                </a></button></Roll>


        
     </div>


    {/* En Arabe */}



     <div className='text-[40px] text-center justify-center flex font-[Open Sans] font-semibold text-orange-100' id='objectif'>
            <a href='#objectif' aria-hidden="true">
            البرنامج السياسي
            </a>
     </div>
    
    <div className=' p-4 flex justify-between  sm:flex-col gap-4 '>
    
        <Fade left>
        <div className='bg-blue-400  w-full order-last sm:order-first p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-300 dark:text-white">الشؤون الصحية والاجتماعي</h5>
                
            </div>
            <div>
                <p className='text-gray-200 font-[Open Sans] '>
                سيبذل الطرف قصارى جهده لضمان توفير الصحة للجميع.  لهذا الغرض ، يتم النظر في إجراءات متماسكة ومنسقة مثل إنشاء تغطية صحية وطنية من خلال إعادة التأهيل ، وبناء البنية التحتية المناسبة في جميع أنحاء الإقاليم ، وتدريب المديرين التنفيذيين على جميع المستويات وتطوير الأطباء.
                </p>
            </div>
        </div>
        </Fade>
        <Fade left>
        <div className='bg-yellow-500  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">التعليم</h5>
            </div>
            <div>
                <p className='text-[#6976A0] font-[Open Sans] '>
                هي أفضل وسيلة لتنمية الإنسان وأحد حقوقه الأساسية ، فإن PJL سيبذل قصارى جهده لتعميم التعليم الابتدائي بجعله إلزاميًا في جميع أنحاء الإقاليم.ويشجع  تعليم الفتيات وأبناء الرحل،ستخضع مهنة التدريس لتغيير كبير مع ترقية المعلمين وَتدريبهم لأداء أفضل.
                تطوير التعليم الفني والمهني، تأهيل وبناء البنية التحتية المدرسية وتجهيزها، تعزيز القدرة الاستيعابية ووسائل العمل لمؤسسات التعليم العالي من خلال إعادة تأهيل وبناء هياكلها ،تكييف محتوى التدريب الجامعي مع الاحتياجات الإجتماعية والاقتصادية لبلدنا ،العمل بحيث يكون التعليم العالي في متناول الجميع.
                </p>
                
            </div>
            
        </div>
        </Fade>
        <Fade left>
        <div className='bg-red-700  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">
            الثقافة
                </h5>
            </div>
            <div>
                <p className='text-black font-[Open Sans] '>
                النضال بلا هوادة من أجل تأهيل وتعزيز ثقافات وقيم تشاد التقليدية من أجل وضعها في خدمة الوحدة الوطنية وتنمية الرجل التشادي فيما يتعلق بالتنوع التكميلي.  - العمل على النهوض باللغات الوطنية.  - عدم إهمال أي شيء من أجل الترويج لرياضة الجماهير وتشجيع رياضة النخبة في جميع التخصصات من أجل سمعة البلاد.

                </p>
            </div>
            
        </div>
        </Fade>

        <Flip left>
        <div className='bg-slate-100  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">
            البيئة
                </h5>
            </div>
            <div>
                <p className='text-black font-[Open Sans] '>
                حماية النظم البيئية والحفاظ عليها والمهددة بشكل خطير من خلال الحد من الأسباب البشرية للتصحر ، وتصحيح عواقب الجفاف والبحث المستمر عن التوازن الاجتماعي، من أجل خلق بئية ملائمة لحياة المواطن والمخلوقات الأخرى.
                </p>
            </div>
            
        </div>
        </Flip>

        <Flip left>
        <div className='bg-slate-100  w-full p-4  rounded-[12px] border-[#EAEFFA] shadow-md'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#113EB6] ">
            الشباب
                </h5>
            </div>
            <div>
                <p className='text-black font-[Open Sans] '>
                كونها دولة تقل أعمار  80٪ من سكانها عن ثلاثين (30) عامًا ، فإن مستقبل البلاد سيتشكل حول الشباب.  سيتم هذا الإحياء من خلال التدريب المتكيف مع الاحتياجات الحالية للبلد.وتشجيع الشباب للمشاركة الفعالة في بناء الدولة.

                </p>
            </div>
            
        </div>
        </Flip>
        <Roll left>
        <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900  max-w-[110px]">
            <a href='/ouverture'>
            أكثر معلومات

                </a></button></Roll>


        
     </div>
     </div>




     
     

   
</>
  )
}

export default Baniere