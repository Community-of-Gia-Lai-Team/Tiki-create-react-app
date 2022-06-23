import className from 'classnames/bind';

import styles from './Home.module.scss';
import Header from './components/Header';
import { SlideOne, SlideTwo } from './components/Slide';

const cx = className.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <div className={cx('container')}>
                    <SlideOne />
                    <SlideTwo />
                </div>
            </div>
        </div>
    );
}

export default Home;
