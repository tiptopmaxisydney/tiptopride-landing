"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const Herobanner3 = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const chooseContent = [
    { img: '/assets/img/suv.webp' },
    { img: '/assets/img/sedan.webp' },
    { img: '/assets/img/maxi-cab.webp' },
  ];

  return (
    <section className="cs_hero cs_style_3 cs_bg_filed position-relative" data-background="/assets/img/homebg.webp">
      <div className="container-fluid">
        <div className="cs_hero_content">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_white_color text-uppercase cs_mb_29 wow fadeInDown">
              {/* <span className="cs_video_block cs_style_2 cs_center cs_bg_filed" data-background="/assets/img/tiptopride-app.png">                
                </span> */}
              <span>PREMIUM<span className="cs_stroke_text"> TAXI</span></span>
              <span>SERVICE</span>
            </h1>
            <p className="cs_hero_subtitle cs_medium cs_white_color cs_mb_32 wow fadeInUp">Experience reliable, comfortable, and on-time maxi cab transfers across Sydney. Our professional drivers, spacious vehicles, and easy booking system ensure a smooth travel experience for airport trips, events, business travel, or everyday rides—any time you need us.</p>
            <div className="cs_btn_group">
              <Link href="https://bookings.tiptopride.com.au/" aria-label="Contact button" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>Book Now</span></Link>
              <div className="cs_client_info_wrapper wow fadeInRight">

                <div className="cs_client_info_wrapper wow fadeInRight">

                  {/* App Store */}
                  <Link href="https://apps.apple.com/us/app/tiptop-ride/id6739037902" target="_blank">
                    <Image
                      src="/assets/img/app-store.webp"
                      alt="App Store"
                      width={150}
                      height={42}
                      className="click-img"
                    />
                  </Link>

                  {/* Google Play */}

                  <Link href="https://play.google.com/store/apps/details?id=com.tiptop.ride" target="_blank">
                    <Image
                      src="/assets/img/google-play.webp"
                      alt="Google Play"
                      width={150}
                      height={42}
                      className="click-img"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="cs_hero_slider_wrapper">
              <div className="cs_slider cs_style_1 position-relative">
                <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="1" data-add-slides="1" data-slides-per-view="responsive">
                  <div className="cs_slider_wrapper">
                  <Slider {...settings}>
                  {chooseContent.map((item, i) => (
                    <div key={i} className="cs_slide">
                      <div className="cs_slider_item">
                        <Image src={item.img} alt="img" width={870} height={704}   />
                      </div>
                    </div>
                    ))}
                    </Slider>
                  </div>
                </div>
                <div className="cs_pagination cs_style_1"></div>
              </div>
            </div> */}
        </div>
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      ></VideoModal>

    </section>
  );
};

export default Herobanner3;