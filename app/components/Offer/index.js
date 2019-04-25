/**
 *
 * Offer
 *
 */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './style.scss';

function Offer() {
  return (
    <Row className="offer">
      <Col>
        <table>
          <tbody>
            <tr>
              <td colSpan={12}>
                <span className="discount">Save 82%</span>
                <div className="arrowDown" />
              </td>
            </tr>
            <tr>
              <td>
                <span>$</span>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <tr>
                  <td className="price">
                    <span>45</span>
                  </td>
                </tr>
                <tr>
                  <td className="month">
                    <span>/mo</span>
                  </td>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
}

Offer.propTypes = {};

export default Offer;
