import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import RenderPro from './components/Render';

import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('https://api-shope-done.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => setDatas(data));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Gợi Ý Hôm Nay</h2>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="row">
                    {datas.map((data, index) => (
                        <RenderPro ImagePro={data.img} namePro={data.name} price={data.price} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
