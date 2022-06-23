import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss';

const cx = className.bind(styles);

AccountItem.propTypes = {
    data: PropTypes.array,
};

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <h2>Kết quả tìm kiếm của bạn :</h2>
            {data.map((res, index) => (
                <Link to="/" className={cx('account-item-accountItem')} key={index}>
                    <img src={res.avatar} alt="" />
                    <span>{res.full_name}</span>
                </Link>
            ))}
        </div>
    );
}

export default AccountItem;
