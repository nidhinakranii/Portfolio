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
import logo4 from 'assets/simcoe-logo.jpeg';
import logo5 from 'assets/metis-logo.png';
import logo6 from 'assets/cryptochicks-logo.jpeg';

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
    logo
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
            <Text size={featured ? 'l' : 's'} as="div">
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
        'Cryptochicks',
        'AI & Blockchain Educator',
        <ul>
          <li>
            Delivering live and virtual workshops on AI, Blockchain, and autonomous
            agents.
          </li>
          <li>
            Educating high school and secondary school students, educators, and tech
            newcomers globally.
          </li>
          <li>
            Created beginner-friendly material on Ethereum, AI agents, and real-world Web3
            use cases.
          </li>
          <li>
            Partnered with schools and non-profits to increase youth and educator
            awareness of emerging tech.
          </li>
          <li>
            Taught over 500+ learners across multiple formats (bootcamps, seminars, and
            1:1 mentoring).
          </li>
        </ul>,
        '04/2025',
        'Present',
        logo6
      )}
      {renderPostLink(
        1,
        'MetisL2',
        'Developer Relations Lead (LazAI & Alith)',
        <ul>
          <li>
            Leading DevRel efforts for LazAI and Alith, supporting developer growth
            through content, tooling, and outreach.
          </li>
          <li>
            Created and maintained technical documentation, blog posts, and GitHub
            tutorials for integrations.
          </li>
          <li>
            Organized and hosted weekly livestreams and hands-on workshops focused on
            LazAI and Alith technologies.
          </li>
          <li>
            Acted as technical mentor during the Hyperion Hackathon, assisting teams with
            Alith integration strategies.
          </li>
          <li>
            Built out structured tutorial pipelines and onboarding flows to ease developer
            adoption.
          </li>
          <li>
            Collaborated with core engineering to translate roadmap features into
            actionable developer resources.
          </li>
          <li>
            Engaged with community through feedback loops and AMAs to improve developer
            experience and retention.
          </li>
        </ul>,
        '12/2024',
        'Present',
        logo5
      )}
      {renderPostLink(
        2,
        'MetisL2',
        'Technical Content Writer',
        <ul>
          <li>
            Produced technical content for MetisDevs X handle, improving reach and
            developer engagement.
          </li>
          <li>
            Crafted developer-focused documentation, tutorials, and blog posts to support
            Metis Layer-2 adoption.
          </li>
          <li>
            Led a targeted outreach program that boosted developer participation by 40%.
          </li>
          <li>
            Refined MetisL2’s official docs to enhance readability and dev onboarding
            efficiency.
          </li>
          <li>
            Spearheaded plugin integration documentation and developer tooling tutorials.
          </li>
          <li>
            Organized and hosted high-engagement AMAs and workshops, including during CCIP
            Week.
          </li>
          <li>
            Contributed to a 46% growth in X (Twitter) engagement through consistent,
            technical social content.
          </li>
        </ul>,
        '09/2024',
        '12/2024',
        logo5
      )}
      {renderPostLink(
        4,
        'County of Simcoe',
        'AI Developer (Projection Growth Team)',
        <ul>
          <li>
            Provided projection growth predictions for Simcoe County emergency service
            (911) based on population and call data.
          </li>
          <li>Enhanced prediction accuracy by training and optimizing CNN models.</li>
          <li>
            Improved emergency response strategies through AI-driven insights and data
            analysis.
          </li>
          <li>
            Contributed as one of four selected AI developers, supporting county-wide
            strategic planning.
          </li>
        </ul>,
        '09/2023',
        '12/2023',
        logo4
      )}
      {renderPostLink(
        5,
        'Freelancing',
        'Full-stack Developer',
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
            Collaborated as one of the team members as an AI developer on a project for a
            4-month duration, contributing to the Simcoe County Projection Growth based on
            911 Calls.
          </li>
        </ul>,
        '2020',
        'Present',
        logo3
      )}
      {renderPostLink(
        6,
        'Chainsense',
        'Blockchain Developer / Smart Contract Auditor',
        <ul>
          <li>
            Achieved 10k+ transactions in early launch of a multichain metaverse project
            through contract design, testing, and deployment.
          </li>
          <li>
            Audited over 150 smart contracts and identified 40+ critical vulnerabilities
            using MythX, Slither, Foundry, and Hardhat.
          </li>
          <li>
            Deployed 150+ smart contracts on mainnet, enhancing functionality and security
            of the ecosystem.
          </li>
          <li>
            Developed interactive dApps using ReactJS, Node.js, Web3.js, and integrated
            them with Ethereum-based platforms.
          </li>
          <li>
            Utilized Docker for scalable deployment, and integrated decentralized storage
            via IPFS and Sia.
          </li>
          <li>
            Implemented Oracle-based data access to connect smart contracts with external
            systems.
          </li>
        </ul>,
        '05/2022',
        '05/2023',
        logo2
      )}
      {renderPostLink(
        7,
        'Niqox',
        'Blockchain Developer',
        <ul>
          <li>
            Developed 80+ secure smart contracts using Solidity for ERC20, ERC721,
            ERC1155, DeFi, and NFT marketplaces.
          </li>
          <li>
            Created a full-stack platform using Web3.js, MetaMask, Node.js, and IPFS for
            blockchain interactions and storage.
          </li>
          <li>
            Led testing, debugging, and optimization to ensure robust and efficient
            blockchain architecture.
          </li>
          <li>
            Delivered technical presentations on blockchain trends to internal teams and
            stakeholders.
          </li>
        </ul>,
        '12/2021',
        '04/2022',
        logo1
      )}{' '}
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
