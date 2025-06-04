import alithmcpimg from 'assets/AI-Agent-mcp-main.png';
import aliagentimg from 'assets/Aiagent.png';
import soliditygasoptimg from 'assets/soliditygasopt.png';
import educatorworkshopimg from 'assets/Educatorworkshop.png';
import stakingimg from 'assets/staking-compound-1.png';
import cryptoloopimg from 'assets/cryptoloop-1.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

// const disciplines = ['Developer', 'Researcher', 'Analyst', 'Strategist', 'Advisor'];

const disciplines = [
  'Developer Relations',
  'Technical Content Writer',
  'Technical Strategist',
  'Community Builder',
  'AI + Blockchain Educator',
  'Blockchain Developer',
  'Smart Contract Developer',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer Relations and Blockchain Developer"
        description="Design portfolio of Nidhi Nakrani — DevRel and Developer."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Blockchain 101 for Educators
        "
        subtitle="From Concept to Smart Contracts"
        description={
          <>
            This workshop with Peel District School Board brought blockchain to life for
            educators — from fundamentals to hands-on Solidity exercises. In just one
            session, participants explored smart contracts and even deployed their first
            token. A fun, curiosity-driven introduction to onchain development for
            teachers and leaders shaping tomorrow’s classrooms.
          </>
        }
        buttonText="View Post"
        buttonLink="https://www.linkedin.com/feed/update/urn:li:activity:7333211242620215330/"
        model={{
          type: 'laptop',
          alt: 'Alith Aiagent onchain main banner',
          textures: [
            {
              srcSet: [educatorworkshopimg, educatorworkshopimg],
              placeholder: educatorworkshopimg,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="MCPs for AI Agents"
        description={
          <>
            This session introduces the integration of Modular Contract Patterns (MCPs) in
            building onchain autonomous AI agents using Alith. Through a hands-on
            walkthrough, I demonstrated how developers can scaffold AI behaviors within
            secure, composable smart contracts.
            <br />
            <a
              href="https://github.com/nidhinakranii/Alith_MCP_Agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub tutorial
            </a>
          </>
        }
        buttonText="Watch livestream"
        buttonLink="https://www.youtube.com/watch?v=w9OTH5JOGTA&t=1750s"
        model={{
          type: 'laptop',
          alt: 'Alith MCP main banner',
          textures: [
            {
              srcSet: [alithmcpimg, alithmcpimg],
              placeholder: alithmcpimg,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Solidity Gas Optimization"
        subtitle="Practical Techniques for Efficient Smart Contracts"
        description={
          <>
            This session explores practical techniques for writing gas-optimized smart
            contracts in Solidity. From storage packing to minimizing state changes, I
            demonstrate how to reduce execution costs and boost performance.
            <br />
            {/* <a
              href="https://github.com/nidhinakranii/Solidity-Gas-Optimization"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub tutorial
            </a> */}
          </>
        }
        buttonText="GitHub tutorial"
        buttonLink="https://github.com/nidhinakranii/Solidity-Gas-Optimization"
        model={{
          type: 'laptop',
          alt: 'Alith MCP main banner',
          textures: [
            {
              srcSet: [soliditygasoptimg, soliditygasoptimg],
              placeholder: soliditygasoptimg,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Onchain AI Agents with Alith
        "
        subtitle="Building Telegram Bots with LazAI SDK"
        description={
          <>
            Learn how to create your own AI-powered Telegram bot using the Alith framework
            and LazAI SDK. In this session, I walk through building an onchain agent that
            can interact with the Metis Sepolia network to deploy and manage tokens—all
            through natural language. Whether it’s checking balances or deploying
            ERC20/ERC721/ERC1155 contracts, this hands-on guide shows how to empower your
            bot with autonomous blockchain logic using Alith.
            <br />
            <a
              href="https://github.com/nidhinakranii/Alith-AI-Agent-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub tutorial
            </a>
          </>
        }
        buttonText="Watch livestream"
        buttonLink="https://www.youtube.com/watch?v=zpi732FBh-8&t=239s"
        model={{
          type: 'laptop',
          alt: 'Alith Aiagent onchain main banner',
          textures: [
            {
              srcSet: [aliagentimg, aliagentimg],
              placeholder: aliagentimg,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Staking-Autocompound"
        description="Designed a smart cotract for staking compound with testing script"
        buttonText="View project"
        buttonLink="/projects/staking"
        model={{
          type: 'laptop',
          alt: 'Staking Compound image',
          textures: [
            {
              srcSet: [stakingimg, stakingimg],
              placeholder: stakingimg,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Cryptoloop (ongoing)"
        description="Designing a platform for social trading on web3!"
        buttonText="View website"
        buttonLink="/projects/cryptoloo"
        model={{
          type: 'Laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [cryptoloopimg, cryptoloopimg],
              placeholder: cryptoloopimg,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="E-Vote System on Ethereum Blockchain"
        description="A decentralized voting application built on the Ethereum blockchain, providing a secure and transparent platform for conducting electronic voting."
        buttonText="View project"
        buttonLink="/projects/voting"
        model={{
          type: 'laptop',
          alt: 'E-vote system on Ethreum..!',
          textures: [
            {
              srcSet: [votingmainimg, votingmainimg],
              placeholder: votingmainimg,
            },
          ],
        }}
      /> */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
