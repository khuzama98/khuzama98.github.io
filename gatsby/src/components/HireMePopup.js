import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import * as t from '../Typography';
import Colors from '../Colors';
import LN from '../images/ln.png';
import Close from '../images/close-popup-grey.png';
import { media } from '../MediaQueries';
import Helmet from 'react-helmet';
import GH from '../images/github.png';
import FV from '../images/fiverr.png';
import UW from '../images/rsz_upwork.png';

const HireMePopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Colors.white};
  z-index: 1000;
  display: flex;
  flex-direction: row;
  ${props =>
    props.open === false &&
    `
    display: none;
  `}
  ${media.tablet`
    flex-direction: column;
    overflow-y: auto;
  `};
`;

const Link = styled.a`
  font-size: 18px;
  padding: 16px 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.tablet`
    display: block;
    padding: 0;
    margin: 0 30px;
  `};
`;

const Burger = styled.div`
  width: 22px;
  height: 22px;
  align-self: center;
  position: absolute;
  right: 25px;
  top: 25px;
  color: ${Colors.closeIcon};
  z-index: 2;
  color: ${props => props.scrolled && Colors.darkest};
  &:hover {
    ${props => (props.scrolled || props.theme === 'white' ? lighten(0.3, Colors.darkest) : darken(0.1, Colors.white))};
    cursor: pointer;
    opacity: 0.9;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

class HireMePopup extends React.Component {
  closePopup = e => {
    this.props.handleClose(false);
  };

  render() {
    const { open } = this.props;
    const overflow = open ? 'hidden' : 'auto';
    return (
      <HireMePopupWrapper open={open}>
        <Helmet>
          <body style={{ overflow: overflow }} />
        </Helmet>
        <ContentWrapper>
          <Burger onClick={this.closePopup}>
            <img alt="Close popup" src={Close} />
          </Burger>
          <t.H3>Contact me on</t.H3>
          <Link primary bold target="_blank" href="https://www.linkedin.com/in/khuzama-shahid-56179a16a/">
            <img src={LN} alt="Your Linkedin profile" />
          </Link>
          <Link primary bold target="_blank" href="https://github.com/khuzama98">
            <img src={GH} alt="Your Github profile" />
          </Link>
          {/* <Link
            primary
            bold
            target="_blank"
            href="https://www.upwork.com/o/profiles/users/~012d4cf54a95debda5/"
          >
            <img src={UW} alt="Your Upwork profile" />
          </Link> */}
          <Link primary bold target="_blank" href="https://www.fiverr.com/khuzamashahid98">
            <img src={FV} alt="Your Fiverr profile" />
          </Link>
        </ContentWrapper>
      </HireMePopupWrapper>
    );
  }
}

export default HireMePopup;
