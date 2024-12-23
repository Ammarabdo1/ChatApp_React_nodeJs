import {css} from '@emotion/react'

export const StanderS = {
    Center: (dir = 'row', pos1 = 'center', pos2 = 'center') => css`
      display: flex;
      flex-direction: ${dir};
      justify-content: ${dir === 'row' ? pos1 : pos2};
      align-items: ${dir === 'row' ? pos2 : pos1};
    `,

}
