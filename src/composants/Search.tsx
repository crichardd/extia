
import '../css/search.css';

const Search = () => {
    return (
      <form className="search">
      <div className="search-filter">
        <div className="search-icon">
          <img src={process.env.PUBLIC_URL + '/search-icon.svg'} /> 
        </div>
        <div className="search-input">
          <input type="text" placeholder="Rechercher" />
        </div>
      </div>

      <div className="search-filter">
        <div className="search-icon">
          <img src={process.env.PUBLIC_URL + '/location.svg'} /> 
        </div>
        <div className="search-input">
          <input type="text" placeholder="Ville" />
        </div>
      </div>

      <div className="search-filter">
        <div className="search-icon">
          <img src={process.env.PUBLIC_URL + '/search-icon.svg'} /> 
        </div>
        <div className="search-input">
          <input type="text" placeholder="Tag" />
        </div>
      </div>

      <div className="search-filter">
        <button type="submit" className="btn-submit">Rechercher</button>
      </div>
    </form>
    );
};

export default Search;