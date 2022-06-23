import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Nav.module.scss';
import logoTiki from '@/assets/Image/logoTiki.png';
import UserImg from '@/assets/Image/User.png';
import ArrowDown from '@/assets/Image/arrowdown.png';
import CartImg from '@/assets/Image/cart.png';
import logoFree from '@/assets/Image/fresnavtiki.png';
import Search from '../components/Search';
import { ShopIcon } from '@/components/Icons';

const cx = className.bind(styles);

function Nav() {
    const ListNav = useSelector((state) => state.listNav);

    const isLogin = true;

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('nav-enf')}>
                    <div className={cx('nav-logo')}>
                        <Link to="/">
                            <div className={cx('nav-logo-TIKI')}>
                                <img src={logoTiki} alt="" />
                            </div>
                        </Link>
                    </div>
                    <Search />
                    <div className={cx('nav-login-and-features')}>
                        {isLogin ? (
                            <div className={cx('nav-login-register')}>
                                <img src={UserImg} alt="" />
                                <div className={cx('nav-login-register-span')}>
                                    <p>0869224813</p>
                                    <span>
                                        Tài khoản
                                        <img src={ArrowDown} alt="" />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login">
                                <div className={cx('nav-login-register')}>
                                    <img src={UserImg} alt="" />
                                    <div className={cx('nav-login-register-span')}>
                                        <p>Đăng Nhập / Đăng Ký</p>
                                        <span>
                                            Tài khoản
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )}

                        <div className={cx('nav-cart')}>
                            <div className={cx('nav-cart-img')}>
                                <img src={CartImg} alt="" />
                                <div className={cx('nav-cart-count')}>0</div>
                            </div>
                            <span>Giỏ Hàng</span>
                        </div>
                    </div>
                </div>
                <div className={cx('nav-options')}>
                    <div className={cx('nav-options-free')}>
                        <img src={logoFree} alt="" />
                    </div>
                    <div className={cx('nav-options')}>
                        {ListNav.map((data, index) => (
                            <a
                                href="https://tiki.vn/di-cho-online/trai-cay/c44824"
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                            >
                                {data}
                            </a>
                        ))}
                    </div>
                    <div className={cx('shope-nex')}>
                        <a href="https://tiki.vn/di-cho-online/trai-cay/c44824" target="_blank" rel="noreferrer">
                            <ShopIcon />
                            <span>Bán hàng cùng Tiki</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
