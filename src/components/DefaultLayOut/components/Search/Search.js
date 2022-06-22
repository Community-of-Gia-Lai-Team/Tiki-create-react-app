import { useEffect } from 'react';
import className from 'classnames/bind';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from '../../Nav/Nav.module.scss';

const cx = className.bind(styles);

function Search() {
    useEffect(() => {
        // fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less')
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     });s
    });

    return (
        <div className={cx('nav-search')}>
            <input type="text" placeholder="Nhập tên người dùng bạn muốn tìm...." />
            <Button variant="primary" className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Tìm Kiếm
            </Button>
        </div>
    );
}

export default Search;
