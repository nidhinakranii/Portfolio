// articles/ExperienceDetail.js

import React from 'react';
import { motion } from 'framer-motion';

const ExperienceDetail = ({
  companyName,
  role,
  experienceDetails,
  startMonthYear,
  endMonthYear,
  logo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.5 }}
      className="experience-detail"
    >
      <div className="detail-content">
        <img src={logo} alt={`${companyName} Logo`} className="company-logo" />
        <h2>{companyName}</h2>
        <h3>{role}</h3>
        <p>{`${startMonthYear} to ${endMonthYear}`}</p>
        <p>{experienceDetails}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceDetail;
