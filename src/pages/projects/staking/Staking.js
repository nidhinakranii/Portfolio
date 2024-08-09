import stakingcompundimg from 'assets/staking-compound-1.png';
import testsimg from 'assets/tests.png';
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
import styles from './Staking.module.css';

const title = 'Staking Auto Compound';
const description =
  'A decentralized staking platform on Ethereum, utilizing a burnable, mintable, and pausable ERC20 token for rewards. The platform offers dynamic and static staking options with autocompounding features.';
const roles = ['Ethereum', 'Solidity', 'Foundry'];

export const Staking = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        {/* <ProjectBackground
          src={stakingcompundimg}
          srcSet={`${stakingcompundimg.src} 1280w, ${stakingcompundimg.src} 2560w`}
          placeholder={stakingcompundimg}
          opacity={0.8}
        /> */}
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/nidhinakranii/Staking-Autocompound"
          
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[stakingcompundimg, stakingcompundimg]}
              placeholder={stakingcompundimg}
              alt="The Staking web application showing a selected user annotation."
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
                    <strong>ERC20 Token</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Burnable:</strong> Allows tokens to be destroyed (burned)
                        to reduce the total supply.
                      </li>
                      <li>
                        <strong>Mintable:</strong> Enables the creation of new tokens,
                        adjustable by the contract owner.
                      </li>
                      <li>
                        <strong>Pausable:</strong> Provides the ability to pause all token
                        transfers for enhanced security.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Dynamic and Static Staking Options</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Dynamic Staking:</strong> Allows for automatic compounding
                        of rewards, where earned rewards are reinvested to maximize
                        returns.
                      </li>
                      <li>
                        <strong>Static Staking:</strong> Fixed staking where rewards are
                        not automatically compounded.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Customizable Parameters</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Reward Rate:</strong> Adjustable rate at which rewards are
                        distributed to stakers.
                      </li>
                      <li>
                        <strong>Staking Duration:</strong> Configurable time period for
                        staking, affecting how rewards are accumulated.
                      </li>
                      <li>
                        <strong>Lock Times:</strong> Minimum and maximum periods during
                        which tokens must remain staked.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Security Features</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Owner-Controlled Operations:</strong> Only the contract
                        owner can mint, burn, or pause the contract, ensuring secure
                        management.
                      </li>
                      <li>
                        <strong>Pause Functionality:</strong> The ability to pause all
                        operations in case of security concerns.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Scalability</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Efficient Handling:</strong> Designed to handle a large
                        number of tokens and transactions efficiently.
                      </li>
                      <li>
                        <strong>Performance Optimization:</strong> Ensures the system
                        remains stable and responsive under high load.
                      </li>
                    </ul>
                  </li>
                </ul>{' '}
              </ProjectSectionText>
              {/* <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText> */}
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[stakingcompundimg, stakingcompundimg]}
                placeholder={stakingcompundimg}
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
                    <strong>
                      Ensuring Secure and Accurate Handling of Token Operations
                    </strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Minting and Burning:</strong> Implementing mechanisms to
                        securely mint and burn tokens while preventing unauthorized
                        actions.
                      </li>
                      <li>
                        <strong>Pausable Operations:</strong> Ensuring the pause
                        functionality is robust and can be toggled safely without
                        affecting system integrity.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Implementing Dynamic Autocompounding Logic</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Compounding Mechanics:</strong> Developing and testing the
                        logic for automatically reinvesting rewards to maximize returns.
                      </li>
                      <li>
                        <strong>Edge Cases:</strong> Handling various scenarios and
                        ensuring that the autocompounding feature works as intended in all
                        cases.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Managing Contract Scalability</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Transaction Volume:</strong> Ensuring the contract can
                        handle high transaction volumes without performance degradation.
                      </li>
                      <li>
                        <strong>Complex Operations:</strong> Addressing the challenges of
                        complex operations within the contract to maintain efficiency and
                        stability.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Adjusting Parameters for Balance and Stability</strong>
                    <ul style={{ paddingLeft: '50px' }}>
                      <li>
                        <strong>Reward Rates:</strong> Fine-tuning the reward rates to
                        achieve a balanced system that provides fair returns while
                        maintaining stability.
                      </li>
                      <li>
                        <strong>Lock Times:</strong> Setting appropriate lock times to
                        prevent abuse and ensure the system operates effectively.
                      </li>
                    </ul>
                  </li>
                </ul>{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[testsimg, testsimg]}
              placeholder={testsimg}
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
