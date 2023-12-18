import React , { useEffect }from 'react';
import Slider from 'react-slick';
import "./css/Main.css";

const Main = () => {
  useEffect(() => {
    // Your Swiper initialization logic
    const swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });

    // Cleanup function
    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <>
<div class="container-new">
  {/* <!-- Side infos --> */}
  <div class="side-info">
    
    <h1>Procurepilot</h1>
    <span>Charting Compliance, Empowering Governance</span>

    {/* <hr /> */}

    
    <p>
    Revolutionize governmental contract management with ProcurePilot, an intuitive tool tailored for public officials. Navigating the regulatory skies, it becomes the strategic ally for government procurers, ensuring meticulous compliance and smooth procurement journeys.
      
     </p>
    
    <a href="#">Browse More</a>
  </div>
  {/* <!-- Swiper slider --> */}
  <div class="swiper">
    <div class="swiper-wrapper">
      {/* <!-- Content 1 --> */}
      <div class="swiper-slide slide-one">
        <div>
          <h2 style={{textAlign:"center"}}>Centralized Repository</h2>
          <p>
          procurepiolet organizes all essential documents and regulations in one place for easy access.
          </p>
          {/* <a href="#">View Detail</a> */}
        </div>
      </div>
      {/* <!-- Content 2 --> */}
      <div class="swiper-slide slide-two">
        <div className='mb-3'>
          <h2 style={{textAlign:"center"}}>Get tender score</h2>
          <p style={{textAlign:"center"}} >
          procurepiolet mark adopted documents on the basis of compliance with the guidelines and provide a Tender score on the basis. It further asses the compliance of the tender.
          </p>
          {/* <a href="#">View Detail</a> */}
        </div>
      </div>
      {/* <!-- Content 3 --> */}
      <div class="swiper-slide slide-three">
        <div>
          <h2 style={{textAlign:"center"}}>Advance Search & Filter</h2>
          <p>
          procurepiolet effortlessly find specific documents through powerful search and custom filters.
          </p>
          {/* <a href="#">View Detail</a> */}
        </div>
      </div>
      {/* <!-- Content 4 --> */}
      <div class="swiper-slide slide-four">
        <div>
          <h2 style={{textAlign:"center"}}>Interactive Chatbots</h2>
          <p>
          Unlock knowledge effortlessly! Our interactive chatbox seamlessly searches through our repository and knowledge base, delivering accurate answers to your queries. Experience a smarter way to access information and stay informed.
          </p>
          {/* <a href="#">View Detail</a> */}
        </div>
      </div>
    </div>
    {/* <!-- Add Pagination --> */}
    <div class="swiper-pagination"></div>
  </div>
</div>

</>
  
  );
};

export default Main;
