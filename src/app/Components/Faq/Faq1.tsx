"use client"
import React, { useEffect, useRef, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Image from 'next/image';

const Faq1 = () => {

  const faqContent = [
    { title: "How many people can a MAXI TAXI fit?", content: "A MAXI TAXI is an 11-seat Maxi cab, which means it has room for up to 11 passengers and our driver. If youre heading overseas and have a lot of luggage, we recommend bookings for no more than 6 passengers." },
    { title: 'What is different about a MAXI TAXI?', content: 'A maxi taxi is a larger version of a regular taxi. While a standard taxi can usually accommodate up to 4 passengers, a Maxi-Taxi is designed to carry more people, usually up to 11 passengers.' },
    { title: 'How many luggage can fit in a taxi?', content: 'A normal-sized taxi boot space can handle up to two pieces of luggage with length of about 27 inches to 29 inches.' },
    { title: 'How many passengers are allowed in a taxi?', content: "A typical saloon-car taxi can seat up to four adult passengers. Premium taxi services accommodate more people or luggage and offer a more luxurious ride. Find out more about each operator's services by visiting their websites." },
    { title: 'What is difference between taxi and maxi?', content: "A taxi is typically a hatchback or a sedan and are permitted to carry 3–4 people. SUVs are also in business as taxis now-a-days and offer 1–2 more seats and of course more space. A maxi is also a taxi but with a riding capacity of 12 or more." },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index: number) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

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

  return (
    <section className="position-relative overflow-hidden">
      <div className="cs_height_60 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_30 position-relative z-1">
          <div className="col-lg-5">
            <div className="cs_faq_header">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                  FAQ<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 wow fadeInUp mb-10">Frequently Asked Questions</h2>

                {/* <p className="cs_section_heading_text">We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly
            master new technologies.</p> */}
              </div>
              <div className="cs_height_51 cs_height_lg_50"></div>
              <div className="cs_video_block cs_style_2 cs_center cs_bg_filed cs_radius_20 position-relative wow fadeInDown" data-background="/assets/img/sydney_airport_sedan.jpg">

              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_accordians">

              {faqContent.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div onClick={() => handleItemClick(index)} className="cs_accordian_head position-relative">
                    <h2 className="cs_accordian_title cs_fs_20 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggler cs_heading_color position-absolute"><i className="bi bi-chevron-double-right"></i></span>
                  </div>
                  <div ref={accordionContentRef} className="cs_accordian_body">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="cs_faq_shape_1 position-absolute">
          <Image src="/assets/img/faq_shape_1.svg" alt="img" width={381} height={1044} />
        </div>
        <div className="cs_faq_shape_2 position-absolute">
          <Image src="/assets/img/faq_shape_2.svg" alt="img" width={71} height={48} />
        </div>
      </div>
      <div className="cs_height_60 cs_height_lg_80"></div>



    </section>
  );
};

export default Faq1;