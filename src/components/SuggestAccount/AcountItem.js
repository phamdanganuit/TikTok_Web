import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account')}>
            <img
                className={cx('account__avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5.jpeg?lk3s=a5d48078&nonce=466&refresh_token=e98bc345b462c3091e054dd195d61c17&x-expires=1722420000&x-signature=8MIuc%2BxHBlEXGS4jVspVu2zmrBE%3D&shp=a5d48078&shcp=81f88b70"
                alt="avatar"
            />
            <div className={cx('account__infor')}>
                <h4 className={cx('user_name')}>roses_are_rose</h4>
                <p className={cx('full_name')}>ROSE</p>
            </div>
            
        </div>
    );
}

export default AccountItem;
