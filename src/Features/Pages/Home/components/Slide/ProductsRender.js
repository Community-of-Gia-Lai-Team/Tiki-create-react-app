import classNames from 'classnames/bind';

import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function ProductsRender() {
    return (
        <a href="http://dfsf.com" className={cx('title-pro')}>
            <div className={cx('img-f-r')}>
                <img
                    src="https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/dc/d1/42/7e5a0b9e15c1fdec02640bf186a93388.jpg.webp"
                    alt=""
                />
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
                    169.000 ₫
                </span>
                <span className={cx('reducer-price')}>-23%</span>
            </div>
            <div className={cx('moban')}>
                <p></p>
                <span>Vừa mở bán</span>
            </div>
        </a>
    );
}

export default ProductsRender;
