import React from 'react';
import Divider from 'anchor-ui/divider';
import Text from '../../anchor-ui-native/text';
import logo from '../../assets/images/logo.svg';
import logoGradient from '../../assets/images/logo-gradient.svg';
import style from './style';
import colors from '../../anchor-ui-native/config/colors';

const StyleGuide = () => (
  <section className="page">
    <h1 className="heading-large">Styleguide</h1>
    <h2 style={style.heading}>
      <p>Logo</p>
      <Divider style={style.divider} />
    </h2>
    <section style={style.row}>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.white }}>
          <img style={style.image} src={logoGradient} alt="logo gradient" />
        </div>
        <span><Text>Gradient</Text></span>
        <span><Text type="body-light">#F26D5F - #F00540</Text></span>
        <span><Text type="body-light">rbg(242, 109, 85) - rgb(140, 5, 64)</Text></span>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: `linear-gradient(${colors.primary}, ${colors.secondary})` }}>
          <img style={style.image} src={logo} alt="logo white" />
        </div>
        <span><Text>White</Text></span>
        <span><Text type="body-light">#FFFFFF</Text></span>
        <span><Text type="body-light">rbg(255, 255, 255)</Text></span>
      </section>
    </section>
    <h2 style={style.heading}>
      <p>Color Palette</p>
      <Divider style={style.divider} />
    </h2>
    <section style={style.row}>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.white }} />
        <span><Text>White</Text></span>
        <span><Text type="body-light">#FFFFFF</Text></span>
        <span><Text type="body-light">rbg(255, 255, 255)</Text></span>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.lighterGray }} />
        <span><Text>Lighter gray</Text></span>
        <span><Text type="body-light">#F8F8F8</Text></span>
        <span><Text type="body-light">rbg(248, 248, 248)</Text></span>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.lightGray }} />
        <span><Text>Light gray</Text></span>
        <span><Text type="body-light">#B2B2B2</Text></span>
        <span><Text type="body-light">rbg(178, 178, 178)</Text></span>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.gray }} />
        <span><Text>Gray</Text></span>
        <span><Text type="body-light">#8E8E93</Text></span>
        <span><Text type="body-light">rbg(142, 142, 147)</Text></span>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.darkGray }} />
        <span><Text>Dark gray</Text></span>
        <span><Text type="body-light">#787878</Text></span>
        <span><Text type="body-light">rbg(0, 0, 47)</Text></span>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.black }} />
        <span><Text>Black</Text></span>
        <span><Text type="body-light">#000000</Text></span>
        <span><Text type="body-light">rbg(0, 0, 0)</Text></span>
      </section>
    </section>
  </section>
);

export default StyleGuide;
