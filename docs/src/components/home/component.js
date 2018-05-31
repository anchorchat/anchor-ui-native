import React from 'react';
import Text from '../../anchor-ui-native/text';
import Avatar from '../../anchor-ui-native/avatar';

const Home = () => (
  <section className="page">
    <h1 className="heading-large">React Native UI kit for Chat Engines</h1>
    <h2><Text type="heading">Getting started</Text></h2>
    <span><Text>Install from npm</Text></span>
    <span><Text type="body-accent">npm i -S anchor-ui-native</Text></span>
    <Avatar text="PK" color="hotpink" />
  </section>
);

export default Home;
