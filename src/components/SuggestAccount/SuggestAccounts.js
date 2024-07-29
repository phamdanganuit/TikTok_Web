import classNames from "classnames/bind";
import styles from './SuggestAccounts.module.scss'
import AccountItem from "./AcountItem";
const cx= classNames.bind(styles)

function SuggestAccounts({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>{label}</h4>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <button>
                See more
            </button>
        </div>
     );
}

export default SuggestAccounts;