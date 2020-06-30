import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import CryptoFarm from '../images/trade2.png';
import Gemsby from '../images/gemsby1.png';
import Foodies from '../images/foodies.png';
import DMART from '../images/mart.png';
import ReactLogo from '../images/react.png';
import GatsbyLogo from '../images/gatsby-icon.png';
import ReduxLogo from '../images/redux.png';
import ExpressLogo from '../images/expressjs.png';
import MongoLogo from '../images/mongo.png';
import NodeLogo from '../images/node.png';
import NestLogo from '../images/nestjs.png';
import MetamaskLogo from '../images/metamask.png';
import FirebaseLogo from '../images/firebase.png';
import GitLogo from '../images/git.png';
import DockerLogo from '../images/docker.png';
import NginxLogo from '../images/nginx.png';
import AwsLogo from '../images/aws.png';
import GcpLogo from '../images/gcp.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  max-width: 80%;
`;

const TechImg = styled.img`
  margin: 10px 20px;
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Khuzama Shahid" className="avatar" />
            <t.H1 primary align="center">
              Khuzama Shahid
            </t.H1>
            <t.LargeP align="center" max45>
              Hello! I'm a MERN STACK DEVELOPER with a passion to build eye catching and performant Web & Mobile Apps.
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Experience
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              I am Khuzama Shahid. I'm from Pakistan, PK. I'm a fullstack software engineer interested in architecting
              and building performant web and mobile applications with pixel-perfect, buttery-smooth user interfaces,
              backed by flexible, state-of-the-art APIs. I have experience in both enterprise and non-enterprise
              environments.
            </t.P>
            <t.H2 primary align="center" bold>
              Technologies I Have Worked With
            </t.H2>
            <Techs>
              <acronym title="React & React Native">
                <TechImg src={ReactLogo} alt="React" />
              </acronym>
              <acronym title="Redux">
                <TechImg src={ReduxLogo} alt="Redux" />
              </acronym>
              <acronym title="Gatsby">
                <TechImg src={GatsbyLogo} alt="Gatsby" />
              </acronym>
              <acronym title="Express.js">
                <TechImg src={ExpressLogo} alt="Express Js" />
              </acronym>
              <acronym title="Node.js">
                <TechImg src={NodeLogo} alt="Node Js" />
              </acronym>
              <acornym title="MongoDB">
                <TechImg src={MongoLogo} alt="MongoDB" />
              </acornym>
              <acornym title="Nest.js">
                <TechImg src={NestLogo} alt="Nest Js" />
              </acornym>
              <acornym title="Metamask">
                <TechImg src={MetamaskLogo} alt="Metamask" />
              </acornym>
              <acornym title="Firebase">
                <TechImg src={FirebaseLogo} alt="Firebase" />
              </acornym>
              <acronym title="Git">
                <TechImg src={GitLogo} alt="Git" />
              </acronym>
              <acornym title="Docker">
                <TechImg src={DockerLogo} alt="Docker" />
              </acornym>
              <acronym title="Amazon Web Services">
                <TechImg src={AwsLogo} alt="Aws" />
              </acronym>
              <acornym title="Google Cloud Platform">
                <TechImg src={GcpLogo} alt="Gcp" />
              </acornym>
              <acornym title="Nginx">
                <TechImg src={NginxLogo} alt="Nginx" />
              </acornym>
            </Techs>
            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={CryptoFarm} alt="Crypto Farm" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Crypto Farm</t.H2>
                <t.P>A decentralized crypto exchange for farm tokens.</t.P>
                <t.P>
                  In this Dapp, I handled the front-end and deployment on cloud. Technologies which i used for these
                  purposes was react & redux for front-end. Docker & Nginx for deployment on cloud.{' '}
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://trade.crypto.farm">
                  trade.crypto.farm
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Gemsby</t.H2>
                <t.P>A multi-vendor Gems & Jewellery store.</t.P>
                <t.P>
                  In this App in which sellers register them self and create their store to sell the gems & jewellery.
                  Buyers can select the gems they like and buy them also they can contact the sellers with realtime chat
                  which also support picture upload feature. I worked with react, redux and firebase to implement Chat
                  in this app.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://gemsby.com">
                  gemsby.com
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Gemsby} alt="Gemsby" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Foodies} alt="Foodies" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Foodies</t.H2>
                <t.P>A multi-vendor Food store for Foodies.</t.P>
                <t.P>
                  In this project resturant owners register their resturants and add their menu under their resturant
                  menu list. The user can login the app search the resturants near his location and order the food with
                  status of food delivery.{' '}
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://foodies-battle.firebaseapp.com/"
                >
                  foodies-battle.firebaseapp.com
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>D-MART</t.H2>
                <t.P>An E-Commerce platform.</t.P>
                <t.P>
                  D-Mart is an e-commerce platform with user-friendly & beautiful UI. Which have different category for
                  product which users can sell and buy. The app has features such as upload it's product to sell, save
                  other Ads for later view, offline support, chat to contact product owner and many other.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                  d-mart.com
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={DMART} alt="D-MART" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Fancy working with me? Contact me for more info! </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
