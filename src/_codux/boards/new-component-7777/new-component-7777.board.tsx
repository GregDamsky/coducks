import { createBoard } from '@wixc3/react-board';
import { NewComponent7777 } from '../../../components/new-component-7777/new-component-7777';

export default createBoard({
    name: 'NewComponent7777',
    Board: () => (
        <NewComponent7777 className="list">
            text
            <span
                onClick={() => {
                    console.log('ddd');
                }}
            ></span>
        </NewComponent7777>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 118,
        canvasWidth: 69,
    },
});
