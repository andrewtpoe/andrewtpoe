import styled, { css } from 'styled-components';

import { buildStyledComponent } from '../utils';

const P = buildStyledComponent('P', styled.p, ({ theme }) => css``);

export default P;
