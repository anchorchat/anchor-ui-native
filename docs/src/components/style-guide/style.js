import colors from '../../anchor-ui-native/config/colors';

export default {
  heading: {
    fontSize: '20px',
    marginBottom: '16px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center'
  },
  divider: {
    marginLeft: '16px',
    flex: 1
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '16px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '150px'
  },
  color: {
    width: '125px',
    height: '125px',
    boxSizing: 'border-box',
    background: colors.primary,
    padding: '16px',
    marginBottom: '8px'
  },
  image: {
    height: '100%',
    display: 'block',
    margin: '0 auto'
  }
}
