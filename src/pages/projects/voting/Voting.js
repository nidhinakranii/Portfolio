import sliceAppLarge from 'assets/Screenshot1.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Voting.module.css';

const title = 'E-Vote System on Ethereum Blockchain';
const description =
  'A decentralized voting application built on the Ethereum blockchain, providing a secure and transparent platform for conducting electronic voting.';
const roles = ['Ethereum', 'Solidity', 'React', 'Web3.js'];

export const Voting = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceAppLarge}
          srcSet={`${sliceAppLarge.src} 1280w, ${sliceAppLarge.src} 2560w`}
          placeholder={sliceAppLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceAppLarge, sliceAppLarge]}
              placeholder={sliceAppLarge}
              alt="The Voting web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Features</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    Voter registration and authentication through MetaMask integration.
                  </li>
                  <li>
                    Secure and transparent voting process powered by Ethereum smart
                    contracts.
                  </li>
                  <li>Real-time display of voting results and winner determination.</li>
                  <li>Owner-controlled candidate management for fair elections.</li>
                </ul>
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceAppLarge, sliceAppLarge]}
                placeholder={sliceAppLarge}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Challenges Faced </ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    Handling multiple transactions and ensuring atomicity in the voting
                    process.{' '}
                  </li>
                  <li>
                    Integrating with different Ethereum providers for enhanced user
                    accessibility.{' '}
                  </li>
                  <li>
                    {' '}
                    Designing a user-friendly interface for both desktop and MetaMask
                    mobile users.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceAppLarge, sliceAppLarge]}
              placeholder={sliceAppLarge}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
