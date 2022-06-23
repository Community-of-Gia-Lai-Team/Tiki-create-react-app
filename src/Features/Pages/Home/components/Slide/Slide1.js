import classNames from 'classnames/bind';

import styles from './Slide.module.scss';
import RenderOne from './RenderOne';
import BannerImg from '@/assets/Image/slideOneFixed.webp';

const cx = classNames.bind(styles);

function SlideOne() {
    return (
        <div className={cx('wrapper-1')}>
            <div className={cx('col-sm-8', 'content-d-r')}>
                <RenderOne />
            </div>
            <div className={cx('col-sm-4', 'test-slide1')}>
                <div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SlideOne;
