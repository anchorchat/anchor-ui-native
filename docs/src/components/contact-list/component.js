import React from 'react';
import find from 'lodash/find';
import Text from '../../anchor-ui-native/text';
import style from './style';
import components from '../../components.json';
import Props from '../props';
import picker from './images/picker.png';
import Markdown from '../markdown';

const componentData = find(components, { displayName: 'ContactList' });

const contactsProp = `
\`\`\`js
const contacts = [
    {
      title: 'A',
      data: [{ name: 'Alex' }, { name: 'Anthony' }]
    },
    {
      title: 'B',
      data: [{ name: 'Bert' }, { name: 'Bonnie' }]
    },
    ...
];
\`\`\`
`;

const ContactListDoc = () => (
  <section className="page">
    <h1 className="heading-large">ContactList</h1>
    <span><Text type="body-light">{componentData.description}</Text></span>
    <h2><Text type="heading">Examples</Text></h2>
    <section style={style.container}>
      <img style={style.image} src={picker} alt="picker" />
    </section>
    <Markdown title="contacts" markdown={contactsProp} />
    <Props props={componentData.props} />
    <span>
      <Text type="body-light">
        Other properties are applied to the root element. See <a href="https://facebook.github.io/react-native/docs/view.html#props" target="blank" rel="noopener noreferrer">https://facebook.github.io/react-native/docs/view.html#props</a> for all available props.
      </Text>
    </span>
  </section>
);

export default ContactListDoc;
