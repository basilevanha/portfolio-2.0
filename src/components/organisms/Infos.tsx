

// Import components
import ListBox from '../molecules/ListBox';

// Import content
import { infos, extLinks } from '../../content/infos';

function Infos({
    isDarkMode
}: {
    isDarkMode: boolean,
}) {

    return (
        <div className='infos'>
            {infos.map((box, index) => (
                <ListBox isDarkMode={isDarkMode} key={index} tkey={box.key} items={box.items} />
            ))}

            <ListBox isDarkMode={isDarkMode} isLinks items={extLinks} classNames='infos-links' />
        </div>
    );
}

export default Infos;