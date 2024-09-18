import styles from './search.module.css'; // Importing styles from CSS module
import { MdSearch } from 'react-icons/md'; // Importing search icon from react-icons library

const Search = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className={styles.input}/>
        </div>
    );
}

export default Search; // Exporting the Search component as default