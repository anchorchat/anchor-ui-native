import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import listItem from './images/list-item.jpg';
import listItemLarge from './images/list-item-large.jpg';
import listItemSettings from './images/list-item-settings.jpg';

const componentData = find(components, { displayName: 'ListItem' });

const ListItemDoc = () => (
  <section className="page">
    <h1 className="heading-large">ListItem</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.container}>
      <img style={style.image} src={listItem} alt="ListItem" />
      <img style={style.image} src={listItemLarge} alt="large ListItem" />
      <img style={style.image} src={listItemSettings} alt="ListItem with icon" />
    </section>
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/touchablehighlight.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/touchablehighlight.html#props</a> for available props.
      </Text>
    </span>
  </section>
);

export default ListItemDoc;
