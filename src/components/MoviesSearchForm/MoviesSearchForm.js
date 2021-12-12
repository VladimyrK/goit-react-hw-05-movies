import PropTypes from 'prop-types';

export default function MoviesSearchForm({ onSubmit, query, handlequery }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handlequery}
      />
      <button type="submit">Search</button>
    </form>
  );
}

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func,
  query: PropTypes.string,
  handlequery: PropTypes.func,
};
