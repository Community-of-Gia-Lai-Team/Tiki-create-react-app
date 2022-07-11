import classNames from 'classnames/bind';
import { useContext } from 'react';
import RenderPro from './components/Render';

import { AppContextSave } from '@/components/Context/Context';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    const { datas } = useContext(AppContextSave);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Gợi Ý Hôm Nay</h2>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="row">
                    {datas.map((data, index) => (
                        <RenderPro
                            ImagePro={data.img}
                            namePro={data.name}
                            price={data.price}
                            evaluatePro={data.evaluatePeo}
                            reducerprice={data.reducerprice}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
