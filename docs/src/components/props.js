import React from 'react';
import PropTypes from 'prop-types';
import replace from 'lodash/replace';
import omit from 'lodash/omit';
import map from 'lodash/map';
import get from 'lodash/get';
import escape from 'escape-html';
import Table from 'anchor-ui/table';
import TableHeader from 'anchor-ui/table-header';
import TableHeaderColumn from 'anchor-ui/table-header-column';
import TableBody from 'anchor-ui/table-body';
import TableRow from 'anchor-ui/table-row';
import TableColumn from 'anchor-ui/table-column';
import urlRegex from 'anchor-ui/url-regex';
import Text from '../anchor-ui-native/text';

const getPropType = (type) => {
  if (type.name === 'instanceOf') {
    return type.value;
  }

  if (type.name === 'enum') {
    return 'string';
  }

  if (type.name === 'func') {
    return 'function';
  }

  // TODO figure out how to display ReactNative component props, like View.propTypes.style
  return type.name;
};

const createMarkup = (text) => {
  const escapedText = escape(text);

  const urlSchemeRegex = /^(?:https?:\/\/)/;

  let parsedText = replace(escapedText, /\n/g, '<br />');

  const style = 'color: inherit; font-size: inherit; font-weight: inherit; text-decoration: underline;'; // eslint-disable-line max-len

  parsedText = replace(parsedText, urlRegex, (url) => {
    if (!urlSchemeRegex.test(url)) {
      // Add default http:// scheme for urls like example.com
      return (`<a style="${style}" href="http://${url}" target="_blank">${url}</a>`);
    }
    return (`<a style="${style}" href="${url}" target="_blank">${url}</a>`);
  });

  return {
    __html: parsedText
  };
};

const Props = ({ props }) => {
  const propsWithoutHocProps = omit(props, ['theme', 'safeArea']);

  const style = {
    table: {
      tableLayout: 'auto',
      marginBottom: 16,
      maxWidth: 925
    },
    column: {
      width: 1,
      whiteSpace: 'nowrap',
      padding: 8
    },
    container: {
      marginTop: 16
    },
    row: {
      flex: 1
    }
  };

  return (
    <section style={style.container}>
      <h2><Text type="heading">Props</Text></h2>
      <Table style={style.table}>
        <TableHeader>
          <TableRow style={style.row}>
            <TableHeaderColumn style={style.column}>
              <Text type="body-contrast">Name</Text>
            </TableHeaderColumn>
            <TableHeaderColumn style={style.column}>
              <Text type="body-contrast">Type</Text>
            </TableHeaderColumn>
            <TableHeaderColumn style={style.column}>
              <Text type="body-contrast">Description</Text>
            </TableHeaderColumn>
            <TableHeaderColumn style={style.column}>
              <Text type="body-contrast">Default value</Text>
            </TableHeaderColumn>
            <TableHeaderColumn style={style.column}>
              <Text type="body-contrast">Required</Text>
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {map(propsWithoutHocProps, (prop, name) => (
            <TableRow key={name} style={style.row}>
              <TableColumn style={style.column}><Text type="body-light">{name}</Text></TableColumn>
              <TableColumn style={style.column}>
                <Text type="body-accent">{getPropType(prop.type)}</Text>
              </TableColumn>
              <TableColumn style={style.column}>
                <Text>
                  <span
                    dangerouslySetInnerHTML={createMarkup(prop.description)} // eslint-disable-line react/no-danger, max-len
                  />
                </Text>
              </TableColumn>
              <TableColumn style={style.column}>
                <Text type="body-accent">{get(prop, 'defaultValue.value') || ''}</Text>
              </TableColumn>
              <TableColumn style={style.column}>
                <Text>{prop.required ? 'Yes' : 'No'}</Text>
              </TableColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

Props.propTypes = {
  props: PropTypes.shape({}).isRequired
};

export default Props;
