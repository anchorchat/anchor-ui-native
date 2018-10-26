import PropTypes from 'prop-types';
import { ViewStyleProps } from 'react-native';

const TextStyleProps = PropTypes.shape({
  ...ViewStyleProps,
  textShadowOffset: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  }),
  color: PropTypes.color,
  fontSize: PropTypes.number,
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  fontWeight: PropTypes.oneOf([
    'normal',
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]),
  lineHeight: PropTypes.number,
  textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  textDecorationLine: PropTypes.oneOf([
    'none',
    'underline',
    'line-through',
    'underline line-through'
  ]),
  textShadowColor: PropTypes.color,
  fontFamily: PropTypes.string,
  textShadowRadius: PropTypes.number,
  includeFontPadding: PropTypes.bool,
  textAlignVertical: PropTypes.oneOf(['auto', 'top', 'bottom', 'center']),
  fontVariant: PropTypes.oneOf([
    'small-caps',
    'oldstyle-nums',
    'lining-nums',
    'tabular-nums',
    'proportional-nums'
  ]),
  letterSpacing: PropTypes.number,
  textDecorationColor: PropTypes.color,
  textDecorationStyle: PropTypes.oneOf(['solid', 'double', 'dotted', 'dashed']),
  textTransform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize']),
  writingDirection: PropTypes.oneOf(['auto', 'ltr', 'rtl'])
});

export default TextStyleProps;
