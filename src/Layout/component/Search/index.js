import AccountItem from '../../../components/AccountItem';
import { Wrapper as PopperWrapper } from '../../Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import svgs from '../../../assets/svgs';
import request from '../../../utils/request';
import { useState, useRef, useEffect } from 'react';
import { useDebounce } from '../../../hooks';
import axios from 'axios';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const inputRef = useRef();

    const debounded = useDebounce(searchValue, 500);




    const handleChange = (event) => {
        const value = event.target.value;
        if (value.startsWith(' ')) return;
        setSearchValue(value);
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    // const handleSubmit=(event)=>
    // {
    //     event.preventDefault
    // }

    useEffect(() => {
        if (!debounded.trim()) {
            setSearchResults([]);
            return;
        }
        request
            .get(`users/search`, {
                params: {
                    q: debounded,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResults(res.data.data || []);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
                setSearchResults([]);
            });
    }, [debounded]);

    return (
        <HeadlessTippy
            visible={showResults && searchResults.length > 0}
            interactive
            appendTo={document.body}
            delay={[0, 300]}
            onClickOutside={handleHideResults}
            render={(attrs) => (
                <div className={cx('search__result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search__title')}>Accounts</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    className={cx('search__input')}
                    type="text"
                    value={searchValue}
                    placeholder="Search"
                    onChange={handleChange}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchValue && (
                    <button
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                        className={cx('search__delete')}
                    >
                        <svgs.DeleteLogo />
                    </button>
                )}
                <button className={cx('search__btn')} onMouseDown={(e)=>e.preventDefault()}>
                    <svgs.SearchLogo className={cx('btn')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
