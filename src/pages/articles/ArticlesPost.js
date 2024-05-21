// articles/ArticlesPost.js

import { useState } from 'react';
import ExperienceDetail from './ExperienceDetail';
import styles from './Articles.module.css'; // Ensure you import the CSS file

const ArticlesPost = ({ slug, title, abstract, featured, banner, index }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (
    companyName,
    role,
    experienceDetails,
    startMonthYear,
    endMonthYear,
    logo
  ) => {
    setSelectedExperience({
      companyName,
      role,
      experienceDetails,
      startMonthYear,
      endMonthYear,
      logo,
    });
  };

  const renderPostLink = (
    index,
    companyName,
    role,
    experience,
    startMonthYear,
    endMonthYear,
    logo
  ) => {
    return (
      <div
        key={index}
        className={styles.postLink}
        onClick={() =>
          handleExperienceClick(
            companyName,
            role,
            experience,
            startMonthYear,
            endMonthYear,
            logo
          )
        }
      >
        {/* Your existing code for rendering experience links */}
      </div>
    );
  };

  return (
    <article className={styles.post}>
      {/* Render the list of experiences */}
      {renderPostLink(/* pass necessary props */)}

      {/* Render the detailed experience */}
      {selectedExperience && (
        <ExperienceDetail
          companyName={selectedExperience.companyName}
          role={selectedExperience.role}
          experienceDetails={selectedExperience.experienceDetails}
          startMonthYear={selectedExperience.startMonthYear}
          endMonthYear={selectedExperience.endMonthYear}
          logo={selectedExperience.logo}
        />
      )}
    </article>
  );
};

export default ArticlesPost;
