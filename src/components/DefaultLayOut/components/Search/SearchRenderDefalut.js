import className from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from '../../Nav/Nav.module.scss';

import Banner120kImg from '@/assets/Image/banner120k.webp';
import SearchIcon from '@/assets/Image/iconsearch.png';

import AndroidImg from '@/assets/Image/android.png';
import IphoneImg from '@/assets/Image/iphone.jpg';
import Chuoi from '@/assets/Image/chuoi.png';
import SonliImg from '@/assets/Image/sonli.png';
import SonImg from '@/assets/Image/son.png';
import MotoImg from '@/assets/Image/moto.png';
import HotNgon from '@/assets/Image/hotngon.png';
import GauImg from '@/assets/Image/gau.png';

const cx = className.bind(styles);

function SearchRenderDefalut() {
    return (
        <div className={cx('wr-fd-er')}>
            <div className={cx('search-result-banner')}>
                <Link to="/">
                    <div>Sale Hè Cùng Bé</div>
                    <div>
                        <img src={Banner120kImg} alt="" />
                    </div>
                </Link>
            </div>
            <div className={cx('search-container-result-item')}>
                <Link to="/">
                    <div className={cx('search-result-item-img')}>
                        <img src={SearchIcon} alt="" />
                    </div>
                    <div className={cx('search-result-item-text')}>tai nghe bluetooth</div>
                </Link>
                <Link to="/">
                    <div className={cx('search-result-item-img')}>
                        <img src={SearchIcon} alt="" />
                    </div>
                    <div className={cx('search-result-item-text')}>tai nghe bluetooth</div>
                </Link>
                <Link to="/">
                    <div className={cx('search-result-item-img')}>
                        <img src={SearchIcon} alt="" />
                    </div>
                    <div className={cx('search-result-item-text')}>tai nghe bluetooth</div>
                </Link>
                <Link to="/">
                    <div className={cx('search-result-item-img')}>
                        <img src={SearchIcon} alt="" />
                    </div>
                    <div className={cx('search-result-item-text')}>tai nghe bluetooth</div>
                </Link>
            </div>
            <div className={cx('search-item-popular')}>
                <div className={cx('search-item-popular-header')}>Danh Mục Nổi Bật</div>
                <div className={cx('search-item-popular-grid', 'inner')}>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={Chuoi} alt="" />
                            <span>Trái Cây</span>
                        </div>
                    </a>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={IphoneImg} alt="" />
                            <span>Điện thoại Smartphone</span>
                        </div>
                    </a>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={SonImg} alt="" />
                            <span>Son thỏi</span>
                        </div>
                    </a>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={MotoImg} alt="" />
                            <span>Xe máy điện</span>
                        </div>
                    </a>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={GauImg} alt="" />
                            <span>Đồ Chơi - Mẹ & Bé</span>
                        </div>
                    </a>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={HotNgon} alt="" />
                            <span>NGON</span>
                        </div>
                    </a>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={AndroidImg} alt="" />
                            <span>Điện Thoại - Máy Tính Bảng</span>
                        </div>
                    </a>
                    <a
                        href="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div>
                            <img src={SonliImg} alt="" />
                            <span>Làm Đẹp - Sức Khỏe</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SearchRenderDefalut;
