import { createBoard } from '@wixc3/react-board';
import { Ronaldo } from '../../../components/ronaldo/ronaldo';

export default createBoard({
    name: 'Ronaldo',
    Board: () => <Ronaldo />,
    isSnippet: true,
});