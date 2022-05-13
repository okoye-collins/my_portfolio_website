import './testimonials.css';
import ME from '../../assets/ME.jpg'; 

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
     {
        avatar:ME,
        name:'Tina Snow',
        review: 'lorem iksj dolor wit componentsm ck lorem iksj dolor wit componentsm ck  iusto  lorem iksj dolor wit componentsm ck iusto lorem iksj dolor wit componentsm',
    },
    {
       avatar:ME,
       name:'Randy Arry',
       review: 'lorem iksj dolor wit componentsm ck lorem iksj dolor wit componentsm ck  iusto  lorem iksj dolor wit componentsm ck iusto lorem iksj dolor wit componentsm',
   },
   {
      avatar:ME,
      name:'Okoye Colins',
      review: 'lorem iksj dolor wit componentsm ck lorem iksj dolor wit componentsm ck  iusto  lorem iksj dolor wit componentsm ck iusto lorem iksj dolor wit componentsm',
  },
  {
     avatar:ME,
     name:'Enow Flowdena',
     review: 'lorem iksj dolor wit componentsm ck lorem iksj dolor wit componentsm ck  iusto  lorem iksj dolor wit componentsm ck iusto lorem iksj dolor wit componentsm',
 }
]

const Testimonials = () => {
    return ( 
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
                // install Swiper modules
                modules={[ Pagination ]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                {
                    data.map(({avatar,name,review}, index) => {
                        return(
                            <SwiperSlide key={index} className='testimonal'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt='one'/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
     );
}
 
export default Testimonials;