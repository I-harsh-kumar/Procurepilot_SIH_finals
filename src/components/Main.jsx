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
    <span>Welcome to Our Guidelines Hub!</span>
    <h1>Elevate Procurement</h1>
    <hr />
    <p>
    Charting the Course for Progress
Discover a Centralized Repository of Insights and Expertise for Informed Decision-Making.
    </p>
    <a href="#">Browse More</a>
  </div>
  {/* <!-- Swiper slider --> */}
  <div class="swiper">
    <div class="swiper-wrapper">
      {/* <!-- Content 1 --> */}
      <div class="swiper-slide slide-one">
        <div>
          <h2>Get Guidelines</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
            laborum adipisci quis aut consequuntur eum?
          </p>
          <a href="#">View Detail</a>
        </div>
      </div>
      {/* <!-- Content 2 --> */}
      <div class="swiper-slide slide-two">
        <div>
          <h2>Get your tender score</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
            laborum adipisci quis aut consequuntur eum?
          </p>
          <a href="#">View Detail</a>
        </div>
      </div>
      {/* <!-- Content 3 --> */}
      <div class="swiper-slide slide-three">
        <div>
          <h2>Dummy 03</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
            laborum adipisci quis aut consequuntur eum?
          </p>
          <a href="#">View Detail</a>
        </div>
      </div>
      {/* <!-- Content 4 --> */}
      <div class="swiper-slide slide-four">
        <div>
          <h2>Dummy 04</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
            laborum adipisci quis aut consequuntur eum?
          </p>
          <a href="#">View Detail</a>
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
