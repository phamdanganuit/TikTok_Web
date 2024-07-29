import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import svgs from '../../../assets/svgs';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('header__back-btn')} onClick={onBack}>
                <svgs.BackArrowLogo />
            </button>
            <h4 className={cx('header__title')}>{title}</h4>
        </header>
    );
}

export default Header;
