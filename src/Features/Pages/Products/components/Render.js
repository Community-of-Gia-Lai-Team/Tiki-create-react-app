import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../Products.module.scss';
import ImgReducer from '@/assets/Image/reducer.png';
import { StarICon } from '@/components/Icons';

const cx = classNames.bind(styles);

RenderPro.propTypes = {
    ImagePro: PropTypes.string,
    namePro: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    reducerprice: PropTypes.string,
    evaluatePro: PropTypes.string,
};

function RenderPro({ ImagePro, namePro, price, reducerprice, evaluatePro }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className={cx('render')}>
                <Link to="/" className={cx('Link-to-pro')}>
                    <div>
                        <div className={cx('header-item')}>
                            <div
                                style={{
                                    backgroundImage: `url(${ImagePro})`,
                                }}
                                className={cx('image')}
                            ></div>
                            <img src={ImgReducer} alt="" />
                        </div>
                        <div className={cx('body-and-title')}>
                            <div className={cx('name')}>
                                <p
                                    style={{
                                        background: 'rgb(242, 242, 242)',
                                        lineHeight: '12px',
                                        display: 'inline-block',
                                        padding: ' 0px 4px',
                                        fontSize: '9px',
                                        margin: ' 0px 4px 0px 0px',
                                        position: 'relative',
                                        top: '-1px',
                                        borderRadius: '2px',
                                    }}
                                >
                                    Ad
                                </p>
                                <h3>{namePro}</h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 6 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <StarICon />
                                            <StarICon />
                                            <StarICon />
                                            <StarICon />
                                            <StarICon />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'rgb(120, 120, 120)',
                                        lineHeight: 'normal',
                                        fontSize: '11px',
                                        paddingLeft: '4px',
                                    }}
                                >
                                    <div
                                        style={{ width: '1px', height: '9px', backgroundColor: 'rgb(199, 199, 199)' }}
                                    ></div>
                                    <div style={{ paddingLeft: '6px' }}>Đã bán {evaluatePro}</div>
                                </div>
                            </div>
                            <div className={cx('price-discount', 'has-discount')}>
                                <div className={cx('price-discount__price')}>{price} ₫</div>
                                <div className={cx('price-discount__discount')}>-{reducerprice}%</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RenderPro;
