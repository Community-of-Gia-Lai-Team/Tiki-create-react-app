import classNames from 'classnames/bind';

import {
    ATMIcon,
    HanICon,
    JCBICon,
    MasterCarICon,
    MocaGrapIcon,
    MomoIcon,
    NoPercents,
    TikiICon,
    VietPayICon,
    VisaIcon,
    VNpayICon,
    ZaloPAyIcon,
    ChainningICon
} from '@/components/Icons';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div className="row col">
                        <div className="footerLIY">
                            <div className="block">
                                <h4 className={cx('styles__FooterHeading', 'chungk-header')}>Hỗ trợ khách hàng</h4>
                                <p className={cx('hotline')}>
                                    Hotline: <a href="tel:1900-6035">1900-6035</a>
                                    <span className={cx('small-text')}>(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                                </p>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Các câu hỏi thường gặp
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/lien-he/gui-yeu-cau"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Gửi yêu cầu hỗ trợ
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/article/lam-the-nao-de-toi-dat-hang-qua-website-tiki"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Hướng dẫn đặt hàng
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tiet-kiem"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Phương thức vận chuyển
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/article/chinh-sach-doi-tra-san-pham-tai-tiki-nhu-the-nao"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Chính sách đổi trả
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/khuyen-mai/huong-dan-tra-gop"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Hướng dẫn trả góp
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tu-nuoc-ngoai"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Chính sách hàng nhập khẩu
                                </a>
                                <p className="security">
                                    Hỗ trợ khách hàng: <a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a>
                                </p>
                                <p className="security">
                                    Báo lỗi bảo mật: <a href="mailto:security@tiki.vn">security@tiki.vn</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row col">
                        <div className="footerLIY">
                            <div className="block">
                                <h4 className={cx('styles__FooterHeading', 'chungk-header')}>Về Tiki</h4>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/thong-tin/gioi-thieu-ve-tiki"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Giới thiệu Tiki
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tuyendung.tiki.vn/"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Tuyển dụng
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/bao-mat-thanh-toan"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Chính sách bảo mật thanh toán
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/bao-mat-thong-tin-ca-nhan"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Chính sách bảo mật thông tin cá nhân
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Chính sách giải quyết khiếu nại
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Điều khoản sử dụng
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://hotro.tiki.vn/s/article/tiki-xu-la-gi"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Giới thiệu Tiki Xu
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/khuyen-mai/tiki-tiep-thi-lien-ket"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Tiếp thị liên kết cùng Tiki
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/chuong-trinh/ban-hang-doanh-nghiep"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Bán hàng doanh nghiệp
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://www.tikinow.biz/%C4%91i%E1%BB%81u-kho%E1%BA%A3n-v%E1%BA%ADn-chuy%E1%BB%83n"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Điều kiện vận chuyển
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row col">
                        <div className="footerLIY">
                            <div className="block">
                                <h4 className={cx('styles__FooterHeading', 'chungk-header')}>Hợp tác và liên kết</h4>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/quy-che-hoat-dong-sgdtmdt"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Quy chế hoạt động Sàn GDTMĐT
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://tiki.vn/khuyen-mai/ban-hang-cung-tiki"
                                    className={cx('small-text')}
                                    target="_blank"
                                >
                                    Bán hàng cùng Tiki
                                </a>
                                <h4 className={cx('styles__FooterHeading', 'chungk-header')}>Chứng nhận bởi</h4>
                                <div className="flex">
                                    <a href="https://hotro.tiki.vn/s/" rel="noreferrer" aria-label="" target="_blank">
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                                            style={{ width: 32, height: 32 }}
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        href="http://online.gov.vn/Home/WebDetails/21193"
                                        rel="noreferrer"
                                        aria-label=""
                                        target="_blank"
                                        style={{ height: 32 }}
                                    >
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                                            style={{ height: '32px', width: '83px' }}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col">
                        <div className="footerLIY">
                            <div className="block">
                                <h4 className={cx('styles__FooterHeading', 'chungk-header')}>Phương thức thanh toán</h4>
                                <p className="payment-buy-tocart">
                                    <span className="icon">
                                        <TikiICon />
                                    </span>
                                    <span className="icon">
                                        <VisaIcon />
                                    </span>
                                    <span className="icon">
                                        <MasterCarICon />
                                    </span>
                                    <span className="icon">
                                        <JCBICon />
                                    </span>
                                    <span className="icon">
                                        <ATMIcon />
                                    </span>
                                    <span className="icon">
                                        <MomoIcon />
                                    </span>
                                    <span className="icon">
                                        <ZaloPAyIcon />
                                    </span>
                                    <span className="icon">
                                        <MocaGrapIcon />
                                    </span>
                                    <span className="icon viettelpay">
                                        <VietPayICon />
                                    </span>
                                    <span className="icon vnpay">
                                        <VNpayICon />
                                    </span>
                                    <span className="icon">
                                        <HanICon />
                                    </span>
                                    <span className="icon">
                                        <NoPercents />
                                    </span>
                                </p>
                                <h4
                                    style={{ margin: '24px 0 12px' }}
                                    className={cx('styles__FooterHeading', 'chungk-header')}
                                >
                                    Dịch vụ giao hàng
                                </h4>
                                <p>
                                    <a href="https://tikinow.biz?src=footer" target="_blank" rel="noreferrer">
                                        <ChainningICon />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
