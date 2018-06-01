import React from 'react';
import IconHome from 'anchor-ui/icons/icon-home';
import Text from '../../anchor-ui-native/text';
import Button from '../../anchor-ui-native/button';
import colors from '../../anchor-ui-native/config/colors';
import style from './style';

const ButtonDoc = () => (
  <section className="page">
    <h1 className="heading-large">ListItem</h1>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.container}>
      <Button labelText="I have an icon" icon={<IconHome color={colors.primary} />} style={style.button} />
      <Button labelText="Hi! I'm a button" />
    </section>
  </section>
);

export default ButtonDoc;
