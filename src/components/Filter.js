import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const {
      buscaNome,
      handleSearch,
      disableFilter,
    } = this.props;
    return (
      <div>
        <label htmlFor="buscaNome">
          Busca:
          <input
            name="buscaNome"
            type="text"
            data-testid="name-filter"
            value={ buscaNome }
            onChange={ handleSearch }
            disabled={ disableFilter }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  buscaNome: PropTypes.string,
}.isRequired;
