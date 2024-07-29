import classNames from 'classnames/bind';

import routes from '../../../config/routes';
import svgs from '../../../assets/svgs';
import Menu from './Menu';
import { MenuItem } from './Menu/index';
import styles from './Sidebar.module.scss';
import SuggestAccount from '../../../components/SuggestAccount';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<svgs.HomeLogo />} to={routes.home} />
                <MenuItem title="Explore" icon={<svgs.ExploreLogo />} to={routes.explore} />
                <MenuItem title="Following" icon={<svgs.FollowingLogo />} to={routes.following} />
            </Menu>
            <SuggestAccount label="Suggest Accounts" />
            <SuggestAccount label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
