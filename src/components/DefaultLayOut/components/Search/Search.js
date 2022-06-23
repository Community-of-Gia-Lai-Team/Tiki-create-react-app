import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '../../Nav/Nav.module.scss';
import useDebounce from './../../../../hook/useDebounce';
import * as SearchServices from '@/services/index';
import SearchRenderDefalut from './SearchRenderDefalut';
import AccountItem from '@/components/AccountItem';

const cx = className.bind(styles);

function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoaing] = useState(false);

    const debounceValue = useDebounce(searchText, 500);

    useEffect(() => {
        if (!debounceValue) {
            setLoaing(false);
            setSearchResult([]);
            return;
        }

        setLoaing(true);

        const fetchApi = async () => {
            const results = await SearchServices.Search(debounceValue);

            setLoaing(false);
            setSearchResult(results);
        };

        fetchApi();
    }, [debounceValue]);

    const handleChaneSearch = (e) => {
        const value = e.target.value;

        if (!value.startsWith(' ')) {
            setSearchText(e.target.value);
        }
    };

    const handleClear = () => {
        setSearchText('');
    };

    console.log(searchResult);

    return (
        <div className={cx('nav-search')}>
            <input
                type="text"
                placeholder="Nhập tên người dùng bạn muốn tìm...."
                onChange={(e) => handleChaneSearch(e)}
                value={searchText}
            />
            <Button variant="primary" className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Tìm Kiếm
            </Button>
            <div className={cx('search-close-loading')}>
                {searchText && !loading && <FontAwesomeIcon icon={faXmark} onClick={handleClear} />}
                {loading && (
                    <Spinner animation="border" role="status" className={cx('search-close-loading-spinner')}></Spinner>
                )}
            </div>
            <div className={cx('search-container-result')}>
                {searchResult.length > 0 ? <AccountItem data={searchResult} /> : <SearchRenderDefalut />}
            </div>
        </div>
    );
}

export default Search;
