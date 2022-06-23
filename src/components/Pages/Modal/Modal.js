import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import LoginRegisterImg from '@/assets/Image/loginregister.png';
import FacebookImg from '@/assets/Image/facebook.png';
import GoogleImg from '@/assets/Image/google.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Modal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('modal-container')}>
                <Link to="/" className={cx('btn-close-modal')}>
                    X
                </Link>
                <div className={cx('modal-title-login-register')}>
                    <div className={cx('modal-title-form')}>
                        <div className={cx('modal-title-header')}>
                            <h2>Xin Chào</h2>
                            <span>Đăng nhập hoặc Tạo tài khoản</span>
                        </div>
                        <div className={cx('modal-title-body')}>
                            <form className={cx('modal-title-form')}>
                                <input type="text" className={cx('modal-title-input')} placeholder="Số Điện Thoại" />
                                <input
                                    type="password"
                                    className={cx('modal-title-input', 'modal-title-input-pass')}
                                    placeholder="Mật Khẩu"
                                />
                                <div className={cx('sub-mit-btn')}>
                                    <button type="submit" className={cx('modal-title-btn')}>
                                        Đăng Nhập
                                    </button>
                                </div>
                                <span>Đăng Nhập Bằng Email ?</span>
                            </form>
                        </div>
                        <div className={cx('next-link')}>
                            <div>Hoặc tiếp tục bằng</div>
                            <div className={cx('prev-link-fb-in')}>
                                <div className={cx('prev-link-img')}>
                                    <img src={FacebookImg} alt="" />
                                </div>
                                <div className={cx('prev-link-img')}>
                                    <img src={GoogleImg} alt="" />
                                </div>
                            </div>
                            <span>
                                Bằng việc tiếp tục, bạn đã chấp nhận
                                <a href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung">điều khoản sử dụng</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('modal-content-t-r')}>
                    <div>
                        <img src={LoginRegisterImg} alt="" className={cx('img-banner')} />
                        <div className={cx('modal-banner')}>
                            <h4 className={cx('content-text')}>Mua sắm tại Tiki</h4>
                            <span className={cx('content-text-span')}>Siêu ưu đãi mỗi ngày</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('overlayContent')}></div>
        </div>
    );
}

export default Modal;
