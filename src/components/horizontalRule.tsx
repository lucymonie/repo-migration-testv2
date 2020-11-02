// ----- Imports ----- //

import React, { FC } from 'react';
import { css } from '@emotion/core';
import { neutral } from '@guardian/src-foundations/palette';
import { remSpace } from '@guardian/src-foundations';

import { darkModeCss } from 'styles';


// ----- Component ----- //

const styles = css`
    display: block;
    width: 8.75rem;
    height: 0.125rem;
    margin: ${remSpace[12]} 0 ${remSpace[1]};
    border: 0;
    background-color: ${neutral[93]};

    ${darkModeCss`
        background-color: ${neutral[20]};
    `}
`;

const HorizontalRule: FC = () =>
    <hr css={styles} />


// ----- Exports ----- //

export default HorizontalRule;
