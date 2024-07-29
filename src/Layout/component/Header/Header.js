import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import svgs from '../../../assets/svgs';
import Button from'../../../components/Button'
import Menu from '../../Popper/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from '../Search';
import routesConfig from '../../../config/routes';
const cx = classNames.bind(styles);

const handleOnchange = (MENUITEM) => {
    console.log(MENUITEM);
};

const MENU_ITEM = [
    {
        icon: <svgs.LanguageLogo />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'en', title: 'English' },
                { code: 'cn', title: 'End' },
                {
                    children: {
                        title: 'Language',
                        data: [
                            { code: 'en', title: 'English' },
                            { code: 'en', title: 'English' },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <svgs.FeedBackLogo />,
        title: 'Feedback and Help',
        to: '/following',
    },
    {
        icon: <svgs.DarkThemeLogo />,
        title: 'Dark mode',
    },
];
const UserMenu = [
    {
        icon: <svgs.ProfileLogo />,
        title: 'Profile',
        to: '/profile',
    },
    {
        icon: <svgs.CoinLogo />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <svgs.CreateToolLogo />,
        title: 'Creator tools',
        to: '/creator',
    },
    {
        icon: <svgs.SettingLogo />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEM,
    {
        icon: <svgs.LogOutLogo />,
        title: 'Log out',
        separate: true,
        logout: true,
    },
];
function Header() {
    const [currentUser, setUser] = useState(true);

    // const [searchResults, setSearchResults] = useState([]);

    return (
        <header>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={routesConfig.home}>
                        <div className={cx('logo')}>
                            <svgs.Logo />
                        </div>
                    </Link>
                    <Search />

                    <div className={cx('action')}>
                        {currentUser ? (
                            <>
                                <Link to={routesConfig.updload}>
                                    <button className={cx('upload__btn')}>
                                        <svgs.UploadLogo />
                                        <span>Upload</span>
                                    </button>
                                </Link>
                                <Tippy delay={[0, 200]} content="Messages">
                                    <div className={cx('message__logo')}>
                                        <svgs.MessageLogo />
                                    </div>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Inbox">
                                    <div className={cx('inbox__logo')}>
                                        <svgs.InboxLogo />
                                        <sup>2</sup>
                                    </div>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button primary>Log in</Button>
                            </>
                        )}
                        <Menu items={currentUser ? UserMenu : MENU_ITEM} onChange={handleOnchange}>
                            {currentUser ? (
                                <div className={cx('avatar')}>
                                    <img
                                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5.jpeg?lk3s=a5d48078&nonce=66295&refresh_token=21ce1e033826c6301ecd3e1c010f4a8b&x-expires=1722272400&x-signature=I%2FOyAfR%2BsquPwRwavK8C3EKdCGs%3D&shp=a5d48078&shcp=81f88b70"
                                        alt="avatar"
                                    />
                                </div>
                            ) : (
                                <svgs.OptionLogo className={cx('action__option')} />
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
