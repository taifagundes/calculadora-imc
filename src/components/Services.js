import React, {useEffect, useState} from 'react';

//aos
import aos from 'aos';
import 'aos/dist/aos.css';

//blog
import BlogData from './BlogData';

//modal
import Modal from './Modal';

const Services = () => {
  useEffect(() => {
    aos.init(); // Inicie o AOS quando o componente montar
  }, []);

  //modal
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveId] = useState(null);
  //modal
  const showModalHandler = id => {
    setShowModal(true)
    setActiveId(id)
  }
 
  return (
    <section id='services' className='bg-accent flex items-center justify-center min-h-screen'>
      <div className='container mx-auto'>        

          {/* title */}
          <div className='flex-1 items-center justify-center h-full text-center mb-5 pt-8'>
            <h2 className='btn-link py-4'>
              <span className='text-gradient leading-tight md:leading-normal '>
                Blog <br>
                </br> Vida e Saúde
              </span>
            </h2>
          </div>

          {/* Blog */}          
          <div className='flex items-center gap-4 flex-wrap mt-12'>
            {BlogData?.map((services, index) => (
              <div 
                key={services.id} 
                data-aos='fade-zoon-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative'>
                  <figure>
                    <img 
                      className='rounded-xl w-full h-full object-cover' 
                      src={services.imgUrl} 
                      alt='image' />
                  </figure>
                
                {/* button */}
                <div className='absolute inset-0 flex items-center justify-center bg-custom-color rounded-xl bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <button
                      onClick={() => showModalHandler(services.id)}
                      className='text-white bg-primary hover:bg-red-500 
                      py-2 px-4 rounded-[8] font-[500] aese-in duration-200'
                      >
                        See Details
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
        {
          showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
        }

    </section>
  )
}
export default Services;