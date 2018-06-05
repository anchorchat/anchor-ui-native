import colors from '../../anchor-ui-native/config/colors';

export default {
  rowHeading: {
    fontSize: '20px',
    marginBottom: '16px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    color: '#201D1E'
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
    width: '125px',
    marginBottom: '8px'
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
  },
  heading: {
    color: '#9E8D92',
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '4px'
  },
  text: {
    color: '#9E8D92',
    fontWeight: 'normal',
    fontSize: '12px',
    marginBottom: '2px'
  }
}
