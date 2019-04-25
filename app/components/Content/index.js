/**
 *
 * Content
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Counter from 'components/Counter';
import Offer from 'components/Offer';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './style.scss';

function Content() {
  return (
    <div>
      <Row className="content">
        <Col xs={12} md={6}>
          <Counter />
        </Col>
        <Col xs={12} md={6}>
          <Offer />
        </Col>
      </Row>
    </div>
  );
}

Content.propTypes = {};

export default Content;
