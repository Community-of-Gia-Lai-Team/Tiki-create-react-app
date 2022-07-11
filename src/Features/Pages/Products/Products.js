/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import RenderPro from './components/Render';

import { AppContextSave } from '@/components/Context/Context';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    const { datas } = useContext(AppContextSave);
    const [count, setCount] = useState(11);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Gợi Ý Hôm Nay</h2>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="row">
                    {datas.map((data, index) => {
                        if (index <= count) {
                            return (
                                <RenderPro
                                    ImagePro={data.img}
                                    namePro={data.name}
                                    price={data.price}
                                    evaluatePro={data.evaluatePeo}
                                    reducerprice={data.reducerprice}
                                    key={index}
                                />
                            );
                        }
                    })}
                </div>
                <div className={cx('view-add')}>
                    {datas.length < count ? (
                        <button style={{ opacity: 0.6, pointerEvents: 'none' }}>Xem Thêm</button>
                    ) : (
                        <button onClick={() => setCount((prev) => prev + 6)}>Xem Thêm</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;
