import React from 'react';
import faker from 'faker';
import Text from '../../anchor-ui-native/text';
import ListItem from '../../anchor-ui-native/list-item';
import Avatar from '../../anchor-ui-native/avatar';
import style from './style';

const Home = () => (
  <section className="page">
    <h1 className="heading-large">ListItem</h1>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.list}>
      <ListItem
        primaryText={faker.internet.userName()}
        divider
        dividerStyle={style.divider}
      />
      <ListItem
        primaryText={faker.internet.userName()}
        secondaryText={faker.hacker.phrase()}
        divider
        dividerStyle={style.divider}
      />
      <ListItem
        primaryText={`${faker.name.firstName()} ${faker.name.lastName()}`}
        secondaryText={`${faker.hacker.phrase()} ${faker.hacker.phrase()}`}
        divider
        dividerStyle={style.dividerAvatar}
        icon={<Avatar text="LI" color="blue" />}
        time="14:41"
      />
    </section>
  </section>
);

export default Home;
