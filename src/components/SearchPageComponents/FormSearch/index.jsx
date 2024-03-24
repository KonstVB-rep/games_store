import useSearchGame from 'pages/SearchPage/hooks/useSearchGame';

import SEARCH_ICON from 'assets/search.png';

import cn from './styles.module.scss';

const FormSearch = () => {
    const { handleSearch, handleSubmit, searchValue } = useSearchGame();

    return (
        <form className={cn.form} onSubmit={handleSubmit}>
            <label>
                <input
                    className={cn.input}
                    type="text"
                    placeholder="Search game"
                    value={searchValue}
                    onChange={handleSearch}
                />
            </label>

            <button type="submit" className={cn.btn}>
                <img src={SEARCH_ICON} alt="Search" />
            </button>
        </form>
    );
};

export default FormSearch;
