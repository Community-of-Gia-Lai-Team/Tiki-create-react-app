import classNames from 'classnames/bind';

import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function ProductsRender({ ImagePro, price, reducerprice }) {
    return (
        <a href="//" className={cx('title-pro')}>
            <div className={cx('img-f-r')}>
                <img src={ImagePro} alt="" />
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                }}
            >
                <span
                    style={{
                        fontSize: '16px',
                    }}
                >
                    {price} ₫
                </span>
                <span className={cx('reducer-price')}>-{reducerprice}%</span>
            </div>
            <div className={cx('moban')}>
                <p></p>
                <span>Vừa mở bán</span>
            </div>
        </a>
    );
}

export default ProductsRender;
