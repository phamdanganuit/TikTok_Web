import classNames from 'classnames/bind';
import Header from '../component/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../../Layout/component/sidebar'; 
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div  className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
