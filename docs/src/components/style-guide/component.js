import React from 'react';
import Divider from 'anchor-ui/divider';
import logo from '../../assets/images/logo.svg';
import logoGradient from '../../assets/images/logo-gradient.svg';
import style from './style';
import colors from '../../anchor-ui-native/config/colors';

const StyleGuide = () => (
  <section className="page">
    <h1 className="heading-large">Styleguide</h1>
    <h2 style={style.rowHeading}>
      <p>Logo</p>
      <Divider style={style.divider} />
    </h2>
    <section style={style.row}>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.white }}>
          <img style={style.image} src={logoGradient} alt="logo gradient" />
        </div>
        <p style={style.heading}>Gradient</p>
        <p style={style.text}>#F26D5F - #F00540</p>
        <p style={style.text}>rgb(242, 109, 85) - rgb(140, 5, 64)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: `linear-gradient(${colors.primary}, ${colors.secondary})` }}>
          <img style={style.image} src={logo} alt="logo white" />
        </div>
        <p style={style.heading}>White</p>
        <p style={style.text}>#FFFFFF</p>
        <p style={style.text}>rgb(255, 255, 255)</p>
      </section>
    </section>
    <h2 style={style.rowHeading}>
      <p>Color Palette</p>
      <Divider style={style.divider} />
    </h2>
    <section style={style.row}>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.white }} />
        <p style={style.heading}>White</p>
        <p style={style.text}>#FFFFFF</p>
        <p style={style.text}>rgb(255, 255, 255)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.lighterGray }} />
        <p style={style.heading}>Lighter gray</p>
        <p style={style.text}>#F8F8F8</p>
        <p style={style.text}>rgb(248, 248, 248)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.lightGray }} />
        <p style={style.heading}>Light gray</p>
        <p style={style.text}>#B2B2B2</p>
        <p style={style.text}>rgb(178, 178, 178)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.gray }} />
        <p style={style.heading}>Gray</p>
        <p style={style.text}>#8E8E93</p>
        <p style={style.text}>rgb(142, 142, 147)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.darkGray }} />
        <p style={style.heading}>Dark gray</p>
        <p style={style.text}>#787878</p>
        <p style={style.text}>rgb(0, 0, 47)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.black }} />
        <p style={style.heading}>Black</p>
        <p style={style.text}>#000000</p>
        <p style={style.text}>rgb(0, 0, 0)</p>
      </section>
    </section>
  </section>
);

export default StyleGuide;
