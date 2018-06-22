/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import Text from '../../anchor-ui-native/text';
import style from './style';
import Markdown from '../markdown';

const withSafeArea = `
\`\`\`jsx
import withSafeArea from 'anchor-ui-native/with-safe-area';
import MyComponent from './my-component';

export default withSafeArea(MyComponent);
\`\`\`
`;

const safeAreaProp = `
\`\`\`js
const safeArea = {
  top: 'safeAreaTop',
  right: 'safeAreaRight',
  bottom: 'safeAreaBottom',
  left: 'safeAreaLeft'
};
\`\`\`
`;

const WithSafeAreaDoc = () => (
  <section className="page">
    <section style={style.container}>
      <h1 className="heading-large">withSafeArea</h1>
      <span><Text type="body-light">A higher order component which applies safe area and device orientation to your component by passing the safeArea and orientation props.</Text></span>
      <span><Text type="body-light">Listens to the device&apos;s dimensions using the <a href="https://facebook.github.io/react-native/docs/dimensions.html" target="blank" rel="noopener noreferrer">Dimensions API</a> and recomputes safeArea when it changes.</Text></span>
      <span><Text type="body-light">Safe area is computed based on the <a href="https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-module" target="blank" rel="noopener noreferrer">Platform module</a> and the <a href="https://facebook.github.io/react-native/docs/dimensions.html" target="blank" rel="noopener noreferrer">Dimensions API</a>.</Text></span>
      <h2><Text type="heading">Arguments</Text></h2>
      <span><Text type="body-light" style={style.name}>Component</Text><Text>Component to apply safe area to</Text></span>
      <h2><Text type="heading">Returns</Text></h2>
      <span><Text type="body-light" style={style.name}>SafeAreaComponent</Text><Text>Component with safeArea</Text></span>
      <Markdown title="Usage" markdown={withSafeArea} />
      <span><Text>The safeArea prop is an object containing the following values.</Text></span>
      <Markdown title="safeArea" markdown={safeAreaProp} />
      <span>
        <Text>The orientation prop is either &apos;portrait&apos; or &apos;landscape&apos;.</Text>
      </span>
    </section>
  </section>
);

export default WithSafeAreaDoc;
