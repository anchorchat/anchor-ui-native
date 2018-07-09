/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import Divider from 'anchor-ui/divider';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import logoGradient from '../../assets/images/logo-gradient.svg';
import style from './style';
import colors from '../../anchor-ui-native/config/colors';
import Text from '../../anchor-ui-native/text';

const StyleGuide = () => (
  <section className="page">
    <h1 className="heading-large">Styleguide</h1>
    <h2 style={style.rowHeading}>
      <div>Logo</div>
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
      <div>Color Palette</div>
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
        <div style={{ ...style.color, background: colors.divider }} />
        <p style={style.heading}>Divider</p>
        <p style={style.text}>#C8C7CC</p>
        <p style={style.text}>rgb(200, 199, 204)</p>
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
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.primary }} />
        <p style={style.heading}>Primary</p>
        <p style={style.text}>#F00540</p>
        <p style={style.text}>rgb(240, 5, 64)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.lightPrimary }} />
        <p style={style.heading}>Primary light</p>
        <p style={style.text}>#FAF7F8</p>
        <p style={style.text}>rgb(250, 247, 248)</p>
      </section>
      <section style={style.column}>
        <div style={{ ...style.color, background: colors.secondary }} />
        <p style={style.heading}>Secondary</p>
        <p style={style.text}>#F26D5F</p>
        <p style={style.text}>rgb(242, 109, 58)</p>
      </section>
    </section>
    <h2 style={style.rowHeading}>
      <div>Typography</div>
      <Divider style={style.divider} />
    </h2>
    <section style={style.maxWidth}>
      <Text>AnchorUI Native uses the <a href="https://fonts.google.com/specimen/Nunito" target="blank" rel="noopener noreferrer">Nunito</a> font family which can be downloaded for free from <a href="https://fonts.google.com/specimen/Nunito" target="blank" rel="noopener noreferrer">Google Fonts</a>. See the <Link to="/">Getting started</Link> page on how to use custom fonts with React Native. The following styles are used in the UI kit, see the <Link to="/text">Text</Link> component on how to implement them.</Text>
      <table style={style.table}>
        <tbody>
          <tr>
            <td style={style.tableText}>Body</td>
            <td style={style.tableText}>
              <Text>The quick brown fox jumps over the lazy dog</Text>
            </td>
            <td style={style.tableText}>15pt Regular {colors.black}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Body light</td>
            <td style={style.tableText}><Text type="body-light">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>15pt Regular {colors.darkGray}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Body lighter</td>
            <td style={style.tableText}><Text type="body-lighter">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>15pt Regular {colors.lightGray}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Body accent</td>
            <td style={style.tableText}><Text type="body-accent">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>15pt Regular {colors.primary}</td>
          </tr>
          <tr style={style.contrastRow}>
            <td style={style.tableTextContrast}>Body contrast</td>
            <td style={style.tableTextContrast}><Text type="body-contrast">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableTextContrast}>15pt Regular {colors.white}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Button</td>
            <td style={style.tableText}><Text type="button">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>15pt SemiBold {colors.primary}</td>
          </tr>
          <tr style={style.contrastRow}>
            <td style={style.tableTextContrast}>Counter</td>
            <td style={style.tableTextContrast}><Text type="counter">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableTextContrast}>10pt SemiBold {colors.white}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Divider</td>
            <td style={style.tableText}><Text type="divider">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>14pt Bold {colors.darkGray}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Heading</td>
            <td style={style.tableText}><Text type="heading">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>17pt SemiBold {colors.black}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Heading light</td>
            <td style={style.tableText}><Text type="heading-light">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>17pt SemiBold {colors.lightGray}</td>
          </tr>
          <tr style={style.contrastRow}>
            <td style={style.tableTextContrast}>Heading contrast</td>
            <td style={style.tableTextContrast}><Text type="heading-contrast">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableTextContrast}>17pt SemiBold {colors.white}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Heading message</td>
            <td style={style.tableText}><Text type="heading-message">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>12pt Bold {colors.primary}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Heading secondary</td>
            <td style={style.tableText}><Text type="heading-secondary">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>14pt Regular {colors.darkGray}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Navigation</td>
            <td style={style.tableText}><Text type="navigation">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>17pt Regular {colors.primary}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Navigation emphasized</td>
            <td style={style.tableText}><Text type="navigation-emphasized">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>17pt Bold {colors.primary}</td>
          </tr>
          <tr style={style.contrastRow}>
            <td style={style.tableTextContrast}>Message separator</td>
            <td style={style.tableTextContrast}><Text type="message-separator">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableTextContrast}>14pt SemiBold {colors.white}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Tab</td>
            <td style={style.tableText}><Text type="tab">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>10pt SemiBold {colors.gray}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Tab active</td>
            <td style={style.tableText}><Text type="tab-active">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>10pt SemiBold {colors.gray}</td>
          </tr>
          <tr>
            <td style={style.tableText}>Time</td>
            <td style={style.tableText}><Text type="time">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableText}>10pt Italic {colors.lightGray}</td>
          </tr>
          <tr style={style.contrastRow}>
            <td style={style.tableTextContrast}>Time contrast</td>
            <td style={style.tableTextContrast}><Text type="time-contrast">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableTextContrast}>10pt Italic {colors.white}</td>
          </tr>
          <tr style={style.contrastRow}>
            <td style={style.tableTextContrast}>Avatar</td>
            <td style={style.tableTextContrast}><Text type="avatar">The quick brown fox jumps over the lazy dog</Text></td>
            <td style={style.tableTextContrast}>24pt Bold {colors.white}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
);

export default StyleGuide;
