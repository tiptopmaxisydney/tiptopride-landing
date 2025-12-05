"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

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
    { breakpoint: 1399, settings: { slidesToShow: 1 } },
    { breakpoint: 1199, settings: { slidesToShow: 1 } },
    { breakpoint: 575, settings: { slidesToShow: 1 } }
  ]
};

const chooseContent = [
  { img: '/assets/img/app/1.png', alt: 'App Image 1' },
  { img: '/assets/img/app/2.png', alt: 'App Image 2' },
  { img: '/assets/img/app/3.png', alt: 'App Image 3' },
  { img: '/assets/img/app/4.png', alt: 'App Image 4' },
  { img: '/assets/img/app/5.png', alt: 'App Image 5' },
  { img: '/assets/img/app/6.png', alt: 'App Image 6' },
  { img: '/assets/img/app/7.png', alt: 'App Image 7' },
  { img: '/assets/img/app/8.png', alt: 'App Image 8' },
  { img: '/assets/img/app/9.png', alt: 'App Image 9' },
  { img: '/assets/img/app/10.png', alt: 'App Image 10' },
  { img: '/assets/img/app/11.png', alt: 'App Image 11' },
  { img: '/assets/img/app/12.png', alt: 'App Image 12' },
  { img: '/assets/img/app/13.png', alt: 'App Image 13' },
  { img: '/assets/img/app/14.png', alt: 'App Image 14' },
  { img: '/assets/img/app/15.png', alt: 'App Image 15' },
  { img: '/assets/img/app/16.png', alt: 'App Image 16' },
  { img: '/assets/img/app/17.png', alt: 'App Image 17' },
  { img: '/assets/img/app/18.png', alt: 'App Image 18' },
  { img: '/assets/img/app/19.png', alt: 'App Image 19' },
  { img: '/assets/img/app/20.png', alt: 'App Image 20' },
  { img: '/assets/img/app/21.png', alt: 'App Image 21' },
  { img: '/assets/img/app/22.png', alt: 'App Image 22' },
];

const About2 = () => {
  return (
    <section className="cs_about cs_style_1 cs_type_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="container">
        <div className="row cs_gap_y_40">

          {/* Left Image Slider */}
          <div className="col-lg-5 wow fadeInLeft">
            <div className="cs_hero_slider_wrapper">
              <Slider {...settings}>
                {chooseContent.map((item, i) => (
                  <div key={i} className="cs_slide">
                    <div className="cs_slider_item">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width={870}
                        height={704}
                        priority={i === 0}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-7">
            <div className="cs_about_content">

              <div className="cs_section_heading cs_style_1 cs_mb_28">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                  About Our Company
                  <span className="cs_shape_right"></span>
                </p>

                <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">
                  Quick, Comfortable, and Budget-Friendly Rides with Tiptop Ride App – Book Online Today!
                </h2>

                <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">
                  Experience Sydney with Tiptop Maxi Cabs – Book Online Today! Need a 1–11 seater maxi taxi in Sydney for airport transfers, group trips, corporate events, rides with baby seats, or wheelchair access? 
                  We offer safe, spacious, and on-time travel with 24/7 service, upfront pricing, and instant booking. Whether you're traveling to Sydney Airport, cruise terminals, or planning a weekend getaway — we ensure a seamless ride every time!
                </p>
              </div>

              {/* Mission + Vision */}
              <div className="cs_features_wrapper">
                <div className="cs_feature_item">
                  <h3 className="cs_fs_24 cs_mb_4">Our Mission</h3>
                  <p className="cs_fs_18 mb-0">Empowering brands through strategy and innovation.</p>
                </div>
                <div className="cs_feature_item">
                  <h3 className="cs_fs_24 cs_mb_4">Our Vision</h3>
                  <p className="cs_fs_18 mb-0">Shaping the future of travel with reliability and comfort.</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="cs_about_btn_group">
                <Link
                  href="/about"
                  aria-label="About page visit button"
                  className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"
                >
                  <span>About More</span>
                </Link>

                <div className="cs_client_info_wrapper wow fadeInRight">
                  <div className="cs_client_info_header cs_mb_1">
                    <span className="cs_fs_20 cs_semibold">(6k) Highest rated</span>
                  </div>

                  <div className="cs_client_review_content">
                    <div className="cs_client_thumb">
                      <Image
                        src="/assets/img/upwork.svg"
                        alt="Upwork Rating"
                        width={73}
                        height={22}
                      />
                    </div>

                    <div className="cs_rating" data-rating="4.5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default About2;
