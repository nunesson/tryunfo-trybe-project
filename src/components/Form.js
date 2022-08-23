import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome da carta:
            <input
              id="name"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>

          <label htmlFor="textarea">
            Descrição:
            <textarea
              id="textarea"
              name="cardDescription"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1">
            Atributo 1:
            <input
              id="attr1"
              type="number"
              name="cardAttr1"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2">
            Atributo 2:
            <input
              id="attr2"
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3">
            Atributo 3:
            <input
              id="attr3"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image">
            Imagem:
            <input
              id="image"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>

          <label htmlFor="trunfo">
            Super Trunfo:
            <input
              id="trunfo"
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="raridade">
            <select
              name="cardRare"
              id="raridade"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
