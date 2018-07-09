import * as React from 'react';
import styled, { css } from 'styled-components';
import { mediaQueries, gridCalc } from './utils';
import { LayoutInterface } from './Interfaces';

const Layout = styled.div<LayoutInterface>`
  ${(props: LayoutInterface) =>
    props.container &&
    css`
      display: flex;
      flex-direction: ${props.direction || 'row'};
      justify-content: ${props.justify || 'flex-start'};
      align-items: ${props.alignItems || 'stretch'};
      flex-wrap: ${props.wrap || 'nowrap'};
      ${props.gap &&
        (props.direction === 'column'
          ? css`
              margin-top: -${props.gap}px;
              margin-bottom: -${props.gap}px;
              > * {
                padding-top: ${props.gap}px;
                padding-bottom: ${props.gap}px;
              }
            `
          : css`
              margin-left: -${props.gap}px;
              margin-right: -${props.gap}px;
              > * {
                padding-left: ${props.gap}px;
                padding-right: ${props.gap}px;
              }
            `)};
    `};
  ${(props: LayoutInterface) =>
    props.item &&
    css`
      ${props.xs && `flex-basis: ${gridCalc(props.xs)}%;`}
      ${props.sm &&
        `@media only screen and (min-width: ${mediaQueries.small}px) {
          flex-basis:  ${gridCalc(props.sm)}%;
        }`}
      ${props.md &&
        `@media only screen and (min-width: ${mediaQueries.medium}px) {
          flex-basis:  ${gridCalc(props.md)}%;
        }`}
      ${props.lg &&
        `@media only screen and (min-width: ${mediaQueries.large}px) {
          flex-basis:  ${gridCalc(props.lg)}%;
        }`}
      ${props.xl &&
        `@media only screen and (min-width: ${mediaQueries.xlarge}px) {
          flex-basis:  ${gridCalc(props.xl)}%;
        }`}

      ${props.flex &&
        css`
          flex: ${props.flex || '1 1 auto'};
        `};
      ${props.grow &&
        css`
          flex-grow: ${props.grow || 0};
        `};
      ${props.shrink &&
        css`
          flex-shrink: ${props.shrink || 1};
        `};
      box-sizing: border-box;
      align-self: ${props.alignSelf || 'auto'};
    `};
`;

export default Layout;
