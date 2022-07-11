import className from 'classnames/bind';

import styles from './Home.module.scss';
import Header from './components/Header';
import { SlideOne, SlideTwo } from './components/Slide';
import Products from '../Products';
import Footer from '../Footer';

const cx = className.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <div className={cx('container')}>
                    <SlideOne />
                    <SlideTwo />
                    <div className={cx('products')}>
                        <Products />
                    </div>
                </div>
            </div>
            <div>
                <div className={cx('container')}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
