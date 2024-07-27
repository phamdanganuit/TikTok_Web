// routes.js hoặc nơi bạn định nghĩa các route
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import routesConfig from '../config/routes'

const publicRoute = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.nickname, component: Profile },
    { path: routesConfig.updload, component: Upload, layout: null },
    { path: routesConfig.search, component: Search, layout: null },
];

export { publicRoute };
