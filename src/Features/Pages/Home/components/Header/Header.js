import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const ListHeader = useSelector((state) => state.listHeaderHom);

    return (
        <div className={cx('wrapper', 'container')}>
            <div className={cx('header-frr-t')}>
                {ListHeader.map((data, index) => (
                    <a href="https://tiki.vn/di-cho-online" key={index}>
                        {data}
                    </a>
                ))}
            </div>
            <span>
                <FontAwesomeIcon icon={faAngleRight} />
            </span>
        </div>
    );
}

export default Header;
