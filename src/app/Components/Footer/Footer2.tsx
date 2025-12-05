"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Footer2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
        <footer className="cs_footer cs_style_1 cs_type_1 cs_bg_filed cs_heading_bg" data-background="/assets/img/texture.png">
        <div className="container">
          <div className="cs_footer_top">
            <div className="cs_footer_top_content_list">
              <div className="cs_brand wow zoomIn">
                 <Image src="/assets/img/logo-dark.webp" alt="img" width={112} height={28}   />
              </div>
              <div className="cs_iconbox_wrapper">
                <div className="cs_iconbox cs_style_4">
                  <span className="cs_iconbox_icon cs_center cs_white_bg cs_accent_color cs_radius_50">
                  <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <p className="cs_iconbox_subtitle cs_fs_14 cs_white_color_2 cs_mb_1">Office location</p>
                    <p className="cs_iconbox_title cs_fs_20 cs_bold cs_white_color mb-0">Sydney, NSW, Australia</p>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_4">
                  <span className="cs_iconbox_icon cs_center cs_white_bg cs_accent_color cs_radius_50">
                  <i className="bi bi-envelope-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <p className="cs_iconbox_subtitle cs_fs_14 cs_white_color_2 cs_mb_1">send email</p>
                    <a href="mailTo:bookings@tiptopride.com.au" aria-label="Send email link" className="cs_iconbox_title cs_fs_20 cs_bold cs_white_color">bookings@tiptopride.com.au</a>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_4">
                  <span className="cs_iconbox_icon cs_center cs_white_bg cs_accent_color cs_radius_50">
                  <i className="bi bi-telephone-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <p className="cs_iconbox_subtitle cs_fs_14 cs_white_color_2 cs_mb_1">call emergency</p>
                    <a href="tel:+61296699390" aria-label="Phone call button" className="cs_iconbox_title cs_fs_20 cs_bold cs_white_color">+61 296699390</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_main_footer cs_white_color_2">
            <div className="cs_footer_row">
              <div className="cs_footer_widget cs_footer_text">
                <div className="cs_text_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">About Company</h2>
                  <p className="cs_mb_30">We excel in handling tasks of all complexities, provide reliable guarantees, and continually embrace new technologies.</p>
                </div>
                <div className="cs_social_btns cs_style_1">
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-instagram"></i>
                </a>
                </div>
              </div>
              <div className="cs_footer_links_wrapper">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">Quick Links</h2>
                  <ul className="cs_footer_menu cs_mp_0">
                  <li><Link href="/about" aria-label="Page link">About Us</Link></li>
                  <li><Link href="/service" aria-label="Page link">Cancellation Policy</Link></li>
                  <li><Link href="/privacy-policy" aria-label="Page link">Privacy Policy</Link></li>
                   <li><Link href="/blog" aria-label="Page link">Terms of Service</Link></li>
                  <li><Link href="/contact" aria-label="Page link">Contact Us</Link></li>
                  <li><Link href="#" aria-label="Page link">Login / Register</Link></li>
                  </ul>
                </div>
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">Our Services</h2>
                  <ul className="cs_footer_menu cs_mp_0">
                    <li><Link href="/service/service-details" aria-label="Page link">Sydney Airport Transfer</Link></li>
                    <li><Link href="/service/service-details" aria-label="Page link">Baby Seat Taxi</Link></li>
                    <li><Link href="/service/service-details" aria-label="Page link">Wheelchair Taxi</Link></li>
                    <li><Link href="/service/service-details" aria-label="Page link">Group Transfer</Link></li>                    
                  </ul>
                </div>
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_18 cs_semibold cs_white_color cs_mb_27 position-relative">TipTop Cabby App</h2>
                  <div className="cs_img_gallery">
                    <a href="https://apps.apple.com/us/app/tiptop-cabby/id6739037939" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                    <Image src="/assets/img/app-store.webp" alt="img" width={300} height={150}   />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute"></span>
                    </a>
                    </div>
                    <div className="cs_img_gallery">
                    <a href="https://tiptopride.com.au/assets/img/google-play.svg" target="_blank" aria-label="Click to visit instagram" className="cs_instagram_thumb cs_center cs_radius_10">
                    <Image src="/assets/img/google-play.webp" alt="img" width={300} height={150}  />
                    <span className="cs_instagram_icon cs_center cs_white_color position-absolute"></span>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_footer_bottom cs_white_color_2">
            <div className="cs_footer_copyright cs_center">&copy; © 2025 TipTop Transport Solutions All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer2;