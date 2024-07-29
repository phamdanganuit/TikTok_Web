import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const Comp = data.to ? Link : 'div'; // Thay đổi Comp thành 'div' nếu không có thuộc tính `to`
    const classes=cx('menu__item',{
        separate:data.separate,
    });
    return (
        <Comp onClick={onClick} to={data.to} className={classes}>
            <span className={cx('icon')}>{data.icon}</span>
            {data.title}
        </Comp>
    );
}

export default MenuItem;
