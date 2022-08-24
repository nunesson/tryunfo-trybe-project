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
          Busca por nome:
          <input
            name="buscaNome"
            type="text"
            data-testid="name-filter"
            value={ buscaNome }
            onChange={ handleSearch }
            disabled={ disableFilter }
          />
        </label>

        <label htmlFor="buscaRara">
          Busca por raridade:
          <select
            name="buscaRara"
            data-testid="rare-filter"
            onChange={ handleSearch }
            disabled={ disableFilter }
          >
            <option value="">todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="buscaTrunfo">
          Busca Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="disableFilter"
            onChange={ handleSearch }
          />
        </label>

      </div>
    );
  }
}

Filter.propTypes = {
  buscaNome: PropTypes.string,
}.isRequired;
