import React, { useEffect, useRef } from 'react';
import { Footer } from 'components/Footer';
import { Section } from 'components/Section';
import { Image } from 'components/Image';
import styles from './Skill.module.css'; // Import local module CSS

// Import logos for different technical skills
import solidityLogo from 'assets/solidity-logo.png';
import JavaScriptLogo from 'assets/JavaScript-Logo.png';
import ReactLogo from 'assets/react-logo.png';
import pythonLogo from 'assets/python-logo.png';
import nodeLogo from 'assets/nodejs-logo.jpg';
import foundryLogo from 'assets/foundry-logo.png';
import HardhatLogo from 'assets/hardhat-logo.png';
import TruffleLogo from 'assets/truffle-logo.png';
import EthereumLogo from 'assets/ethereum-logo.png';
import AWSLogo from 'assets/aws-logo.png';
import GithubLogo from 'assets/github-logo.png';
import DockerLogo from 'assets/docker-logo.png';
import kubernetesLogo from 'assets/kubernetes-logo.png';
import CircleCILogo from 'assets/circleci-logo.png';
import AnsibleLogo from 'assets/ansible-logo.png';
import TerraformLogo from 'assets/terraform-logo.png';
import JenkinsLogo from 'assets/jenkins-logo.png';
import JmeterLogo from 'assets/jmeter-logo.png';
import JiraLogo from 'assets/jira-logo.jpg';

const technicalSkills = [
  { name: 'Solidity', image: solidityLogo },
  { name: 'JavaScript', image: JavaScriptLogo },
  { name: 'React.js', image: ReactLogo },
  { name: 'python', image: pythonLogo },
  { name: 'Node', image: nodeLogo },
  { name: 'Foundry', image: foundryLogo },
  { name: 'Hardhat', image: HardhatLogo },
  { name: 'Truffle', image: TruffleLogo },
  { name: 'Ethereum', image: EthereumLogo },
  { name: 'AWS', image: AWSLogo },
  { name: 'Github', image: GithubLogo },
  { name: 'Docker', image: DockerLogo },
  { name: 'kubernetes', image: kubernetesLogo },
  { name: 'CircleCI', image: CircleCILogo },
  { name: 'Ansible', image: AnsibleLogo },
  { name: 'Terraform', image: TerraformLogo },
  { name: 'Jenkins', image: JenkinsLogo },
  { name: 'Jmeter', image: JmeterLogo },
  { name: 'Jira', image: JiraLogo },

  // Add more skills with images here
];

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem-solving',
  // 'Time management',
  'Adaptability',
  'Creativity',
  'Leadership',
];

export const Skill = () => {
  const cardContainerRef = useRef(null);

  useEffect(() => {
    // Animation effect on mount
    const cardContainer = cardContainerRef.current;
    cardContainer.classList.add('bounce'); // Adding bounce animation class

    const timeoutId = setTimeout(() => {
      cardContainer.classList.remove('bounce'); // Remove animation class after delay
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, []);

  const renderTechnicalSkills = (skill, index) => (
    <li key={index} className={styles.skillItem}>
      <div className={styles.skillContainer}>
        <Image src={skill.image} alt={skill.name} className={styles.skillImage} />
        <span className={styles.skillName}>{skill.name}</span>
      </div>
    </li>
  );

  const renderSoftSkills = (skill, index) => (
    <li key={index} className={styles.skillItem}>
      <div className={styles.skillContainer}>
        <span className={styles.skillName}>{skill}</span>
      </div>
    </li>
  );

  return (
    <div className={styles.skillContainer}>
      <Section className={styles.skill}>
        <div ref={cardContainerRef} className={`${styles.cardContainer} cardContainer`}>
          <div className={styles.technicalSkills}>
            <h3>Frameworks/Tools</h3>
            <div className={styles.skillsList}>
              <ul className={styles.columns}>
                {technicalSkills.map((skill, index) =>
                  renderTechnicalSkills(skill, index)
                )}
              </ul>
            </div>
          </div>
          <div className={styles.learningStatement}>
            <p>
              I am always learning and growing, with a powerful ability to quickly grasp
              and apply new knowledge.
            </p>
          </div>{' '}
          {/* <div className={styles.divider}></div>
          <div className={styles.softSkills}>
            <h3>Soft Skills</h3>
            <div className={styles.skillsList}>
              <ul className={styles.columns}>
                {softSkills.map((skill, index) => renderSoftSkills(skill, index))}
              </ul>
            </div>
          </div> */}
        </div>
        <Footer className={styles.footer} />
      </Section>
    </div>
  );
};

export default Skill;
