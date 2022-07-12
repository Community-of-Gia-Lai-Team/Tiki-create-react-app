import classNames from 'classnames/bind';

import styles from './Slide.module.scss';
import RenderOne from './RenderOne';
import BannerImg from '@/assets/Image/slideOneFixed.webp';

const cx = classNames.bind(styles);

function SlideOne() {
    return (
        <div className={cx('wrapper-1')}>
            <div className="row-cols-sm-1" style={{ display: 'flex' }}>
                <div className={cx('col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8', 'content-d-r')}>
                    <RenderOne />
                </div>
                <div className={cx('col-0 col-sm-4 col-md-4 col-lg-4 col-xl-4', 'test-slide1')}>
                    <div>
                        <img src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideOne;
