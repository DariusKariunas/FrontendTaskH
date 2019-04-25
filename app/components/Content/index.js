/**
 *
 * Content
 *
 */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Counter from 'components/Counter';
import Offer from 'components/Offer';
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
