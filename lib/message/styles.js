export default (colors, align) => ({
  backgroundColor: align === 'right' ? colors.primary : colors.white,
  paddingTop: 8,
  paddingLeft: 8,
  paddingBottom: 8,
  paddingRight: 8,
  borderRadius: 4,
  maxWidth: '75%',
  alignSelf: align === 'right' ? 'flex-end' : 'flex-start',
  marginTop: 4,
  marginBottom: 4,
  marginLeft: 8,
  marginRight: 8
});
