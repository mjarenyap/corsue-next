import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { SignUpPage } from '../../../../components/SignUpPage/SignUpPage';

export default createBoard({
    name: 'SignUpPage',
    Board: () => <SignUpPage />,
    isSnippet: true,
    environmentProps: {
    canvasWidth: 587
}
});
