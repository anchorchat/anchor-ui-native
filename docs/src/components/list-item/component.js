import React from 'react';
import faker from 'faker';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import ListItem from '../../anchor-ui-native/list-item';
import Avatar from '../../anchor-ui-native/avatar';
import style from './style';
import components from '../../components.json';
import Props from '../props';

const componentData = find(components, { displayName: 'ListItem' });

const ListItemDoc = () => (
  <section className="page">
    <h1 className="heading-large">ListItem</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
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
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/touchablehighlight.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/touchablehighlight.html#props</a> for all available props.
      </Text>
    </span>
  </section>
);

export default ListItemDoc;
