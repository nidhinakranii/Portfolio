import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useState } from 'react';
import { cssProps } from 'utils/style';
import styles from './Experience.module.css';
import { Image } from 'components/Image';

// Import logos for different companies
import logo1 from 'assets/niqox-logo.png';
import logo2 from 'assets/chainsense-logo.png';
import logo3 from 'assets/freelance-logo.png';

const ExperiencePost = ({ slug, title, abstract, featured, banner, index }) => {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const renderPostLink = (
    index,
    companyName,
    role,
    experience,
    startMonthYear,
    endMonthYear,
    logo // Pass the logo as a parameter
  ) => {
    return (
      <RouterLink href={`/Experience/${slug}`} scroll={false}>
        <a
          className={styles.postLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={e => {
            e.preventDefault();
          }}
        >
          <div className={styles.postDetails}>
            <div aria-hidden className={styles.postDate}>
              <Divider notchWidth="64px" notchHeight="8px" />
            </div>

            <div className={styles.horizontalContainer}>
              <div className={styles.item}>
                <div className={styles.companyLogoContainer}>
                  <Image src={logo} alt="logo" />
                </div>
              </div>
              <div className={styles.companyInfo}>
                <div className={styles.centeredItem}>
                  <Heading
                    as="h2"
                    level={featured ? 2 : 4}
                    className={styles.companyRole}
                  >
                    <span className={styles.companyName}>{companyName}</span>
                    <span className={styles.role}>{role}</span>
                  </Heading>
                </div>

                <div className={styles.item} style={{ marginTop: '4px' }}>
                  <Text size="xs" as="p">
                    {`${startMonthYear} - ${endMonthYear}`}
                  </Text>
                </div>
              </div>
            </div>
            <Text size={featured ? 'l' : 's'} as="p">
              {experience}
            </Text>
            <div className={styles.postFooter}></div>
          </div>
        </a>
      </RouterLink>
    );
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {renderPostLink(
        0,
        'Freelancing',
        'Full-stack Developer',
        <>
          <ul>
            <li>
              Initiated freelancing during my undergraduate days as a smart contract
              developer.
            </li>
            <li>
              Transitioned into a versatile full-stack developer, providing expertise in
              Defi projects, NFT initiatives, and NFT marketplace development.
            </li>
            <li>
              Offered robust and scalable solutions for various freelancing projects,
              ensuring optimal functionality.
            </li>
            <li>
              Provided blockchain solutions for diverse projects, contributing to their
              success.
            </li>
            <li>
              Collaborated as one of the team members as an AI developer on a project for
              a 4-month duration, contributing to the Simcoe County Projection Growth
              based on 911 Calls.
            </li>
          </ul>
        </>,
        '2020',
        'Present',
        logo3 // Pass the logo as a prop for Company Name2
      )}
      {renderPostLink(
        2,
        'Chainsence',
        'Blockchain Developer',
        <>
          <ul>
            <li>
              Continued evolution in this field at Chainsense, wearing multiple hats as a
              Blockchain Developer, Smart Contract Developer, and Auditor.{' '}
            </li>
            <li>
              Actively contributed to open-source projects, specializing in smart contract
              auditing and architecture.{' '}
            </li>
            <li>
              Developed and audited smart contracts for Defi, Ethereum-based tokens, NFTs,
              NFTs Marketplaces, Staking, Swapping.{' '}
            </li>
            <li>
              Contributed to the development of a public blockchain based on Proof of
              Stake.
            </li>
            <li>
              Made significant contributions to Metaverse projects by building scalable
              smart contract architecture and development.{' '}
            </li>
            <li>
              Actively contributed in Defi initiatives as smart contract developement{' '}
            </li>
            <li>
              Contributed valuable insights to enhance various facets of smart contract
              development, including scalability, security, efficiency, and adaptability.{' '}
            </li>
          </ul>
        </>,
        '5/2022',
        '5/2023',
        logo2 // Pass the logo as a prop for Company Name2
      )}
      {renderPostLink(
        3,
        'Niqox',
        'Blockchain Developer - Trainee',
        <>
          <ul>
            <li>
              Joined Niqox as a Blockchain Developer Trainee, initiating my professional
              journey in blockchain development.
            </li>
            <li>
              Honed expertise in public blockchain, delving into smart contract
              development, NFTs, marketplaces, staking, swapping, and more.
            </li>
            <li>
              Explored React and Web3 during my internship, expanding my skill set to
              incorporate frontend development and blockchain integration.
            </li>
            <li>
              Learned and applied critical problem-solving, scalability, adaptability, and
              security principles, ensuring a well-rounded expertise in crafting robust
              and efficient blockchain solutions.{' '}
            </li>
          </ul>
        </>,
        '12/2022',
        '5/2023',
        logo1 // Pass the logo as a prop for Company Name3
      )}
    </article>
  );
};

export const Experience = ({ posts, featured }) => {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading
        className={styles.heading}
        style={{ display: 'flex', justifyContent: 'center' }}
        level={3}
        as="h1"
      >
        Experience
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      {posts.map(({ slug, title, abstract, featured }, index) => (
        <ExperiencePost
          key={slug}
          slug={slug}
          index={index}
          title={title}
          abstract={abstract}
          featured={featured}
        />
      ))}
    </div>
  );

  return (
    <article className={styles.Experience}>
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div
            className={styles.grid}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {postList}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postsHeader}
            {postList}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
};
