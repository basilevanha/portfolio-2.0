

// Import components
import ListBox from '../molecules/ListBox';

// Import content
import { infos } from '../../content/infos';

function Infos() {

    return (
        <div className='infos'>
            {infos.map((box, index) => (
                <ListBox key={index} content={box} />
            ))}
        </div>
    );
}

export default Infos;