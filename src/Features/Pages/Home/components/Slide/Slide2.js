import classNames from 'classnames/bind';

import styles from './Slide.module.scss';
import { PriceHostIcon, FreeFast, TodayIcon } from './../../../../../components/Icons/Icon';
import RenderTwo from './RenderTwo';
import RenderThree from './RenderThree';

const cx = classNames.bind(styles);

function SlideOne() {
    return (
        <div className={cx('wrapper-2')}>
            <div className="no-gutters justify-content-between " style={{ height: '274px', display: ' flex' }}>
                <div className={cx('col-sm-7 col-md-7 col-lg-7 col-xl-7', 'tes-f-eer')}>
                    <div className={cx('header-slide2')}>
                        <div className={cx('header-slide2-title')}>
                            <PriceHostIcon />
                            <FreeFast />
                            <TodayIcon />
                        </div>
                        <div className={cx('header-slide2-time')}>
                            <span>00</span>:<span>01</span>:<span>54</span>
                        </div>
                    </div>
                    <div className="show-d-er">
                        <RenderThree />
                    </div>
                </div>
                <div className={cx('col-sm-5 col-md-5 col-lg-5 col-xl-5')}>
                    <div
                        style={{
                            marginLeft: '10px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                        }}
                    >
                        <RenderTwo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideOne;
