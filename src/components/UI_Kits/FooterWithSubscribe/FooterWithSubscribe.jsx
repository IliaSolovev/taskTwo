import React from "react";
import injectSheet from 'react-jss';
import FooterList from "./FooterList";
import Logo from '../images/Logo.png';
import {Body, H3} from "../ColorsAndTypes/Fonts";
import SubscriptionTextField from "../FormElements/Fields/SubscriptionTextField/SubscriptionTextField";
import Links from "../Links/Links";
import {DarkShade50} from "../ColorsAndTypes/Colors";
import {mediaPadding, rootMediaPadding} from "../../Media";

const classes = {
  ...mediaPadding,
  bigFooter: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    flexWrap: 'wrap',
    padding: '113px 0 100px 0',

  },
  logoBlock: {
    '& div': {
      maxWidth: 260
    }
  },
  logo: {
    marginBottom: 20,
  },
  text: {
    ...Body
  },
  subscribe: {
    maxWidth: 260,
    '& div': {
      marginBottom: 20,

    }
  },
  subscribeTitle: {
    ...H3,
  },
  links: {
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  }
};

const FooterWithSubscribe = ({classes, ...rest}) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.bigFooter}>

          <div className={classes.logoBlock}>
            <div className={classes.logo}><img src={Logo} alt=""/></div>
            <div className={classes.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam
              pellentesque aliquam curabitur cociis.
            </div>
          </div>

          <FooterList items={['About Us', 'News', 'Support', 'Products']} title='Navigation'/>
          <FooterList items={['Who we are', 'Our team', 'Careers', 'Investors']} title='ABOUT US'/>
          <FooterList items={['Documentation', 'Community', 'Get in Touch']} title='Support'/>

          <div className={classes.subscribe}>
            <div className={classes.subscribeTitle}>Subscribe to our newsletter</div>
            <div className={classes.text}>Receive our latest news and promotions in your inbox!</div>
            <SubscriptionTextField placeholder='Your email address'/>
          </div>

        </div>
      </div>

      <hr/>

      <div className={classes.container}>
        <div className={classes.links}>
          <div className={classes.text}>Copyright © 2018 Toxin отель. Все права зачищены.</div>
          <Links/>
        </div>
      </div>
    </>
  )
};

export default injectSheet(classes)(FooterWithSubscribe);
