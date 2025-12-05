"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Team2 = () => {

  const teamContent = [
    { img: '/assets/img/sedan.webp', name: 'Sedan', head1: 'Passengers:', content1: '1-4 People', head2: 'Large suitcases:', content2: '2', head3: 'Hand luggage:', content3: '2', head4: 'Babyseat:', content4: '0', head5: 'Babycapsule:', content5: '0', head6: 'Wheelchair:', content6: '0' },
    { img: '/assets/img/suv.webp', name: 'SUV', head1: 'Passengers:', content1: '1-5 People', head2: 'Large suitcases:', content2: '5', head3: 'Hand luggage:', content3: '3', head4: 'Babyseat:', content4: '1', head5: 'Babycapsule:', content5: '1', head6: 'Wheelchair:', content6: '0' },
    { img: '/assets/img/maxi-cab.webp', name: 'Mini Bus(Van)', head1: 'Passengers:', content1: '1-10 People', head2: 'Large suitcases:', content2: '10', head3: 'Hand luggage:', content3: '6', head4: 'Babyseat:', content4: '2', head5: 'Babycapsule:', content5: '2', head6: 'Wheelchair:', content6: '2' },
  ];

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="cs_bg_filed position-relative" data-background="/assets/img/team_bg.svg">
      <div className="cs_height_60 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
            <span className="cs_shape_left"></span>Let’s Go! Choose Your Perfect Sydney Ride!<span className="cs_shape_right"></span>
          </p>
          <h2 className="our_taxi_h2 cs_fs_48 cs_mb_21 wow fadeInUp">Maxi Taxis, Baby Seat Taxis & Wheelchair-Friendly Cabs - Book in Seconds!</h2>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-1">

          {teamContent.map((item, i) => (
            <div key={i} className="col-lg-4 wow fadeInDown">
              <div className="cs_team cs_style_2 cs_white_bg cs_radius_20 position-relative">
                <Link href="/team/team-details" aria-label="Click to visit team details" className="cs_team_thumbnail cs_radius_20">
                  <Image src={item.img} alt="img" width={330} height={366} />
                </Link>
                <div className="cs_tean_info">
                  <h3 className="cs_fs_22 cs_semibold text-capitalize cs_mb_2">
                    <Link href="/team/team-details" aria-label="Click to visit team details">{item.name}</Link>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td><p className="mb-0">{item.head1}</p></td>
                        <td><p className="mb-0">{item.content1}</p></td>
                      </tr>
                      <tr>
                        <td><p className="mb-0">{item.head2}</p></td>
                        <td><p className="mb-0">{item.content2}</p></td>
                      </tr>
                      <tr>
                        <td><p className="mb-0">{item.head3}</p></td>
                        <td><p className="mb-0">{item.content3}</p></td>
                      </tr>
                      <tr>
                        <td><p className="mb-0">{item.head4}</p></td>
                        <td><p className="mb-0">{item.content4}</p></td>
                      </tr>
                      <tr>
                        <td><p className="mb-0">{item.head5}</p></td>
                        <td><p className="mb-0">{item.content5}</p></td>
                      </tr>
                      <tr>
                        <td><p className="mb-0">{item.head6}</p></td>
                        <td><p className="mb-0">{item.content6}</p></td>
                      </tr>
                    </tbody>
                  </table>




                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="cs_height_60 cs_height_lg_80"></div>
    </section>
  );
};

export default Team2;