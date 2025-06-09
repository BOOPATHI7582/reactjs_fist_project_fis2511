import React from 'react';
 import ServiceSlide from '../Common/ServicesSlider';
  import ServiceForm from '../Common/ServiceForm';
// import Footer from './Footer';




const Service = () => {
  return (
    <section className='w-full  flex flex-col gap-14'>


      <div className='relative h-120'>
        <img
          src='https://www.nextwebi.com/assets/images/hero-bg5.jpg'
          alt='background'
          className='w-full h-full object-cover'
        />
        <div className='absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center bg-blue/40 gap-4 text-center px-4'>
          <h1 className='text-white text-5xl font-medium'>Our Services</h1>
          <p className='text-white font-bold max-w-3xl'>
            Creativity is our heartbeat. We constantly challenge ourselves to further our technical prowess and help our customers to deliver exceptional customer experiences.
          </p>
        </div>
      </div>


      <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#fff3f8] flex p-8 gap-6 items-center'>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>Software Development</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>Offshore Software Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Web Application Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Full-Stack Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Ecommerce Application Development</a></li>
              <li><a href='' className='underline hover:font-bold'>ERP Application Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Microsoft SharePoint Customizations</a></li>
              <li><a href='' className='underline hover:font-bold'>Custom Software Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Mobile App Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Application Migration & Re-Engineering</a></li>
              <li><a href='' className='underline hover:font-bold'>On Premise App Development</a></li>
              <li><a href='' className='underline hover:font-bold'>CRM Application Development</a></li>
            </ul>
          </nav>
        </div>

        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/software-development-service/software-development.png'
            alt='software development'
            className='w-full h-auto object-contain'
          />
        </div>
      </div>

      <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#e9fef1] flex p-8 gap-6 items-center justify-center'>
        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/web-development-service/web-developemnt-service-1.png'
            alt='IT'
            className='w-full h-auto object-contain'/>
        </div>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>Web Development Services</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>Website Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Shopify eCommerce Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Landing Page Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Custom Portal Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Application Wireframing</a></li>
              <li><a href='' className='underline hover:font-bold'>Custom eCommerce Application Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Website Revamp</a></li>
              <li><a href='' className='underline hover:font-bold'>WordPress Development</a></li>
              <li><a href='' className='underline hover:font-bold'>UI/UX Development</a></li>
              <li><a href='' className='underline hover:font-bold'>Maintenance & Support</a></li>
            </ul>
          </nav>
        </div>

        
      </div>
       <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#efedf1] flex p-8 gap-6 items-center'>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>IT Consulting</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>Cloud Consulting</a></li>
              <li><a href='' className='underline hover:font-bold'>Digital Asset Audit & Management</a></li>
              <li><a href='' className='underline hover:font-bold'>Resource Augmentation</a></li>
              <li><a href='' className='underline hover:font-bold'>Branding and Strategy Consulting</a></li>
              <li><a href='' className='underline hover:font-bold'>Master Data Management</a></li>
              <li><a href='' className='underline hover:font-bold'>Essential Business Services</a></li>
             
            </ul>
          </nav>
        </div>

        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/Services-img/security-engineering-service/IT-Consulting.png'
            alt='software'
            className='w-full h-auto object-contain rounded-2xl'
          />
        </div>
      </div>
       
        <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#e9f6fe] flex p-8 gap-6 items-center justify-center'>
        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/Services-img/security-engineering-service/Security.png'
            alt='IT'
            className='w-full h-auto object-contain rounded-2xl'/>
        </div>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>Security Engineering</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>CyberSecurity Consulting</a></li>
              <li><a href='' className='underline hover:font-bold'>Web Application Security Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>Mobile Application Security Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>API Security Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>Security Architecture Review</a></li>
              <li><a href='' className='underline hover:font-bold'>VAPT Security Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>DevSecOps Services</a></li>
              <li><a href='' className='underline hover:font-bold'>Network/Infrastructure Security Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>Cloud Security</a></li>
              <li><a href='' className='underline hover:font-bold'>Security Solutions</a></li>
            </ul>
          </nav>
        </div>

        
      </div>

           <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#fbfcec] flex p-8 gap-6 items-center'>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>Cloud & Hosting Services</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>Hosting Services</a></li>
              <li><a href='' className='underline hover:font-bold'>Cloud Integration & Migration</a></li>
              <li><a href='' className='underline hover:font-bold'>Cloud Support And Maintenance</a></li>
              <li><a href='' className='underline hover:font-bold'>Azure Cloud Services</a></li>
              <li><a href='' className='underline hover:font-bold'>Digital Asset Management</a></li>
              <li><a href='' className='underline hover:font-bold'>Cloud Staging & Production Deployment</a></li>
              <li><a href='' className='underline hover:font-bold'>Azure Training</a></li>
              <li><a href='' className='underline hover:font-bold'>AWS Cloud Services</a></li>
              <li><a href='' className='underline hover:font-bold'>DevOps Consulting</a></li>
             
            </ul>
          </nav>
        </div>

        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/Services-img/security-engineering-service/Cloud.png'
            alt='software'
            className='w-full h-auto object-contain rounded-2xl'
          />
        </div>
      </div>

             <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#fff3f8] flex p-8 gap-6 items-center justify-center'>
        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/Services-img/security-engineering-service/Testing.png'
            alt='IT'
            className='w-full h-auto object-contain rounded-2xl'/>
        </div>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>Testing & QA</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>Web Application Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>Usability Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>Performance Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>VAPT Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>Mobile Application Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>API Testing</a></li>
              <li><a href='' className='underline hover:font-bold'>Software Testing</a></li>
            </ul>
          </nav>
        </div>

        
      </div>

            <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#e9fef1] flex p-8 gap-6 items-center'>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>Digital Marketing</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>360 Degree Digital Marketing</a></li>
              <li><a href='' className='underline hover:font-bold'>Social Media Management(SMM)</a></li>
              <li><a href='' className='underline hover:font-bold'>Performance Marketing</a></li>
              <li><a href='' className='underline hover:font-bold'>Google My Business Management</a></li>
              <li><a href='' className='underline hover:font-bold'>Email Marketing Services</a></li>
              <li><a href='' className='underline hover:font-bold'>Search Engine Optimization(SEO)</a></li>
              <li><a href='' className='underline hover:font-bold'>Social Media Marketing(SMM)</a></li>
              <li><a href='' className='underline hover:font-bold'>Paid Ads management</a></li>
              <li><a href='' className='underline hover:font-bold'>Online Reputation Management (ORM)</a></li>
               <li><a href='' className='underline hover:font-bold'>Marketing Automation</a></li>
             
            </ul>
          </nav>
        </div>

        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/Services-img/security-engineering-service/Digital.png'
            alt='software'
            className='w-full h-auto object-contain rounded-2xl'
          />
        </div>
      </div>

       <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#efedf1] flex p-8 gap-6 items-center'>
  <div className='w-1/3 flex items-center justify-center'>
    <img
      src='https://www.nextwebi.com/assets/images/services/Services-img/security-engineering-service/Platform.png'
      alt='IT'
      className='w-full h-auto object-contain rounded-2xl'
    />
  </div>

  <div className='w-2/3 mb-4'>
    <h1 className='text-blue-700 text-3xl font-bold mb-10'>Platform</h1>
    <div className='grid grid-cols-2'>
      <div className=''>        
        <nav>
          <ul className='list-disc list-inside space-y-2'>
            <h2 className='font-bold'>Microsoft</h2>
            <li><a href='' className='underline hover:font-bold'>Sharepoint</a></li>
            <li><a href='' className='underline hover:font-bold'>Office 365</a></li>
          </ul>
        </nav>
      </div>
      <div className=''>
        <nav>
          <ul className='list-disc list-inside space-y-2'>
            <h2 className='font-bold'>Others</h2>
            <li><a href='' className='underline hover:font-bold'>Salesforce</a></li>
            <li><a href='' className='underline hover:font-bold'>Shopify</a></li>
            <li><a href='' className='underline hover:font-bold'>Amadeus</a></li>
            <li><a href='' className='underline hover:font-bold'>Wordpress</a></li>
            <li><a href='' className='underline hover:font-bold'>SAP</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>

       <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#e9f6fe] flex p-8 gap-6 items-center'>
        <div className='w-2/3 mb-4'>
          <h1 className='text-blue-700 text-3xl font-bold mb-10'>RFID Service</h1>
          <nav>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside'>
              <li><a href='' className='underline hover:font-bold'>RFID Solution Service</a></li>
             
            </ul>
          </nav>
        </div>

        <div className='w-1/3 flex items-center justify-center'>
          <img
            src='https://www.nextwebi.com/assets/images/services/Services-img/security-engineering-service/RFID.png'
            alt='software'
            className='w-full h-auto object-contain rounded-2xl'
          />
        </div>
      </div>
     <header>
      <div className='border border-none w-full mx-auto bg-[#efedf1] flex p-8 mt-10 gap-6 items-center text-center'>
        <div className='p-5'>
          <div className='font-bold text-3xl '>
            <h1>Absolutely, We have thoroughly mastered the technologies you prefer.</h1>
          </div>
          <div className='mt-10'>
            <p>Our exceptionally skilled IT specialists are proficient in both classic and modern programming languages, as well as frameworks. We aim for excellence, choosing only the top-tier candidates when selecting our IT specialists.</p>
          </div>
          <ServiceSlide />
          <ServiceSlide />
          <ServiceSlide />
        </div>
      </div>
      
     </header>
     <div className='w-full mx-auto  p-8 gap-6 items-center text-center'>
      <div className=''>
        <div>
          <h1 className='text-blue-700 font-bold text-3xl'>Hire Tech Experts</h1>
        </div>
        <div>
          <p className='mt-10 mx-auto max-w-4xl text-center'>
            Grow your development team by hiring tech experts from us, we align with your project requirements and timezone, deploying resources for both short-term and long term contracts.
          </p>
        </div>
      </div>
     </div>


    <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#fff3f8] flex p-8 gap-6 items-center'>
<div className="flex flex-wrap justify-evenly  w-full">
  <div className=" flex items-center">
    <h1 className="text-3xl font-bold">Frontend Development</h1>
  </div>
  <div className="flex justify-end">
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-5">
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/reactjs.png' className='w-6'/> React Js</a>
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/nextjs.png' className='w-6'/> Next Js</a>
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/vuejs.png' className='w-6'/> Vue Js</a>
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/angular.png' className='w-6'/> Angular Js</a>
      </div>
      <div className="flex gap-5">
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/html5.webp' className='w-6'/> HTML5</a>
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/css3.png' className='w-6'/> CSS3</a>
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/worpress.png' className='w-6'/> Wordpress</a>
        <a href='' className='shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex gap-2'><img src='https://www.nextwebi.com/assets/images/technologies/webflow.png' className='w-6'/> Webflow</a>
      </div>
    </div>
  </div>
</div>


</div>


    <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#e9fef1] flex p-8 gap-6 items-center'>
<div className="flex flex-wrap justify-around w-full">
  <div className=" flex items-center">
    <h1 className="text-3xl font-bold">Backend Development</h1>
  </div>
  <div className="flex justify-end">
    <div className="flex flex-col items-center gap-5">
     <div className="flex gap-5 h-10">
  <a href='' className='flex items-center gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white'><img src='https://www.nextwebi.com/assets/images/technologies/node-js.png' className='w-6'/>Node Js</a>
  <a href='' className='flex items-center gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white'><img src='https://www.nextwebi.com/assets/images/technologies/dot-net.png' className='w-6'/>.Net</a>
  <a href='' className='flex items-center gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white'><img src='https://www.nextwebi.com/assets/images/technologies/java.png' className='w-6'/>Java</a>
  <a href='' className='flex items-center gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white'><img src='https://www.nextwebi.com/assets/images/technologies/python.png' className='w-6'/> Python</a>
</div>

<div className="flex gap-5 mt-4">
  <a href='' className='flex items-center gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white'><img src='https://www.nextwebi.com/assets/images/technologies/c-sharp.png' className='w-6'/>C#</a>
  <a href='' className='flex items-center gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white'><img src='https://www.nextwebi.com/assets/images/home/tech-icons/php.png' className='w-6'/>PHP</a>
  <a href='' className='flex items-center gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white'><img src='https://www.nextwebi.com/assets/images/home/tech-icons/go-lang.png' className='w-6'/>Go-Lang</a>
</div>
    </div>
  </div>
</div>


</div>
   
       <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#e9f6fe] flex p-8 gap-6 items-center'>
<div className="flex flex-wrap justify-around w-full">
  <div className=" flex items-center">
    <h1 className=" text-3xl font-bold">Mobile Frameworks</h1>
  </div>
  <div className="flex justify-end ">
    <div className="flex flex-col items-center gap-5  ">
      <div className="flex gap-5 ">
        <a href='' className='gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/home/tech-icons/go-lang.png' className='w-6'/>IOS</a>
        <a href='' className='gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/android.png' className='w-6'/>Android</a>
        <a href='' className='gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/flutter.png' className='w-6'/>Flutter</a>
        <a href='' className='gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/kotlin.png' className='w-6'/>Kotlin</a>
      </div>
      <div className="flex gap-5">
        <a href='' className='gap-2 shadow-2xl px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/reactjs.png' className='w-6'/>  React Native</a>
      </div>
    </div>
  </div>
</div>


</div>
   
       <div className='border border-none rounded-2xl w-[90%] mx-auto bg-[#fbfcec] flex p-8 gap-6 items-center'>
<div className="flex flex-wrap justify-evenly  w-full">
  <div className=" flex items-center">
    <h1 className="text-3xl font-bold">Cloud & DevOps</h1>
  </div>
  <div className="flex justify-end">
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-5">
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/azure.png' className='w-6'/>Azure</a>
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/aws.png' className='w-6'/>AWS</a>
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/google-cloud.png' className='w-6'/>Google Cloud</a>
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/docker.png' className='w-6'/>Docker</a>
      </div>
      <div className="flex gap-5">
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/bit-bucket.webp' className='w-6'/>Bitbukegt</a>
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/github.png' className='w-6'/>Gitub</a>
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/technologies/gitlab.webp' className='w-6'/>Gitlab</a>
        <a href='' className='shadow-2xl gap-2 px-2 py-1 text-lg rounded-3xl bg-white flex'><img src='https://www.nextwebi.com/assets/images/home/tech-icons/sharepoint.png' className='w-6'/>Sharepoint</a>
      </div>
    </div>
  </div>
</div>


</div>
<div className='w-full mx-auto flex flex-col p-8 mt-10 gap-6 items-center justify-center text-center'>
  <div>
    <h1 className='font-bold text-3xl'>Learn from our Resources</h1>
  </div>
  <div>
    <p>Stay updated with the latest happenings in the world of emerging technologies.</p>
  </div>
</div>
<div className=' w-[90%] mx-auto flex  gap-6 items-center'>
<div className="relative h-65 w-110 text-center">

  <img
    src="https://www.nextwebi.com/assets/images/home/home-blog.png"
    alt="Blog"
    className="absolute top-0 left-0 w-full h-full object-cover"/>

  <div className="relative z-10 flex flex-col items-start justify-around h-full  bg-blue-800/40 text-white gap-2 pl-2">
    <h2 className="text-lg">BLOGS</h2>
    <h1 className="text-2xl text-start">Explore what our experts have to share with you</h1>
    <button>Reade More</button>
  </div>
</div>
<div className="relative h-65 w-110 text-center">

  <img
    src="https://www.nextwebi.com/assets/images/home/home-case-study.png"
    alt="Blog"
    className="absolute top-0 left-0 w-full h-full object-cover"/>

  <div className="relative z-10 flex flex-col items-start justify-around h-full  bg-yellow-800/40 text-white gap-2 pl-2">
    <h2 className="text-lg">CASE STUDY</h2>
    <h1 className="text-2xl text-start">Read to find out how we turned challenges to milestone</h1>
    <button>Reade More</button>
  </div>
</div>
<div className="relative h-65 w-110 text-center">

  <img
    src="https://www.nextwebi.com/assets/images/home/home-our-work.png"
    alt="Blog"
    className="absolute top-0 left-0 w-full h-full object-cover"/>

  <div className="relative z-10 flex flex-col items-start justify-around h-full  bg-blue-800/40 text-white gap-2 pl-2">
    <h2 className="text-lg">OUR WORK</h2>
    <h1 className="text-2xl text-start">View the glimpse of tech and design expertise</h1>
    <button>Reade More</button>
  </div>
</div>
</div>


<ServiceForm/>




    </section>
  )
}

export default Service