import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import PrivacyPolicy from '../../Components/PrivacyPolicy/PrivacyPolicy1';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/bg-1.webp"
                Title="Privacy Policy"
            ></BreadCumb> 
            <PrivacyPolicy></PrivacyPolicy>
    </div>
  );
};

export default page;