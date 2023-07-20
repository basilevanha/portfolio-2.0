

// Import components
import ListBox from '../molecules/ListBox';

// Import content
import { infos } from '../../content/infos';

function Infos({
    isDarkMode
}: {
    isDarkMode: boolean,
}) {

    return (
        <div className='infos'>
            {infos.map((box, index) => (
                <ListBox isDarkMode={isDarkMode} key={index} content={box} />
            ))}
        </div>
    );
}

export default Infos;