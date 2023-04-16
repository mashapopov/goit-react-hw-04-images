// import { Component } from 'react';
import { useState } from 'react';
import css from './Searchbar.module.css';
import { IoSearchOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  //   state = {
  //     value: '',
  //   };
  const [value, setValue] = useState('');

  //   handleChange = ({ target: { value } }) => {
  //     this.setState({ value });

  //     handleChange = ({ target: { value } }) => {
  //       setValue(value);
  //     };
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  //     const handleSubmit = e => {
  //       e.preventDefault();
  //       onSubmit(value);
  //     };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <IoSearchOutline size={40} color="#0000FF" />
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={value}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
