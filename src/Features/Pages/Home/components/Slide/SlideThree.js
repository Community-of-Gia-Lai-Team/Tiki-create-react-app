import classNames from 'classnames/bind';

import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function SlideThree() {
    return <div className={cx('wrapper', 'container')}></div>;
}

export default SlideThree;
