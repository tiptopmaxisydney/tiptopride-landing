import Image from 'next/image';
import React from 'react';

const HowWeDo = () => {
    return (
    <section className="position-relative overflow-hidden">
      <div className="cs_height_60 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 align-items-center">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
              Lets Go With Us!<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0 wow fadeInUp">Book Your Sydney Maxi Taxi in 4 Easy Steps</h2>
          </div>
          
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="row cs_gap_y_40 cs_tab_reverse align-items-center position-relative z-1">
          <div className="col-lg-7">
            <div className="cs_iconbox_wrapper wow fadeInLeft">
              <div className="cs_iconbox cs_style_1">
                <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                  <Image src="/assets/img/icons/mobile1.svg" alt="img" width={32} height={32}   />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_24 cs_mb_4">1. Enter Your Destination</h3>
                  <p className="cs_fs_18 cs_light mb-0">Heading to Sydney Airport, a cruise terminal, or suburbs? Type your drop-off – we cover all of Sydney! Whether it’s a last-minute airport pickup or a pre-planned corporate transfer, our system instantly matches you with the nearest available maxi taxi or sedan.</p>
                </div>
              </div>
              <div className="cs_iconbox cs_style_1">
                <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                  <Image src="/assets/img/icons/map1.svg" alt="img" width={32} height={32}   />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_24 cs_mb_4">2. Confirm Pickup Location</h3>
                  <p className="cs_fs_18 cs_light mb-0">Share your address, hotel, or landmark (e.g., Sydney CBD, Bondi Beach, or Sydney Airport pickup). Our app auto-detects your location for accuracy, or manually pin your spot for hassle-free pickup. Need a wheelchair taxi or baby seat? Mention it here!</p>
                </div>
              </div>
              <div className="cs_iconbox cs_style_1">
                <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                  <Image src="/assets/img/icons/car1.svg" alt="img" width={32} height={32}   />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_24 cs_mb_4">3. Select Vehicle & Extras</h3>
                  <p className="cs_fs_18 cs_light mb-0">Choose a maxi taxi (1-11 seats), sedan, or accessible cab. Customize your ride with add-ons like extra luggage space, child seats, or flight tracking for Sydney airport transfers. Upfront pricing means no surprises!</p>
                </div>
              </div>
              <div className="cs_iconbox cs_style_1">
                <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                  <Image src="/assets/img/icons/gps.svg" alt="img" width={32} height={32}   />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_24 cs_mb_4">4. Driver En Route - Relax</h3>
                  <p className="cs_fs_18 cs_light mb-0">Track your maxi cab Sydney in real-time via the app. Receive driver details, ETA alerts, and SMS updates. For airport pickups, we monitor flight delays to ensure perfect timing. Sit back - your Sydney ride is sorted!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cs_working_thumbnail_wrapper cs_center position-relative">
              
              <div className="cs_working_thumbnail position-relative wow fadeInUp">
                <Image src="/assets/img/tiptop-ride-app2.png" alt="img" width={279} height={369}   />
               
                <span className="cs_wheel_shape position-absolute">
                  <Image src="/assets/img/wheel_1.svg" alt="img" width={121} height={116}   />
                </span>
              </div>              
            </div>
          </div>
        </div>
        <div className="cs_blob_1 position-absolute">
          <Image src="/assets/img/mission_shape_1.svg" alt="img" width={449} height={1274}   />
        </div>
        <div className="cs_blob_2 position-absolute">
          <Image src="/assets/img/mission_shape_2.svg" alt="img" width={463} height={1274}   />
        </div>
        <div className="cs_wave_1 position-absolute">
          <Image src="/assets/img/spiral_1.svg" alt="img" width={63} height={132}   />
        </div>
        <div className="cs_wave_2 position-absolute">
          <Image src="/assets/img/waves.svg" alt="img" width={197} height={44}   />
        </div>
        <div className="cs_rings position-absolute">
          <Image src="/assets/img/rings.svg" alt="img" width={191} height={161}   />
        </div>
      </div>
      <div className="cs_height_60 cs_height_lg_80"></div>
    </section>
    );
};

export default HowWeDo;