import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome da carta:
            <input id="name" type="text" name="name" data-testid="name-input" />
          </label>

          <label htmlFor="textarea">
            Descrição:
            <textarea
              id="textarea"
              name="textarea"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1">
            Atributo 1:
            <input id="attr1" type="number" name="attr1" data-testid="attr1-input" />
          </label>

          <label htmlFor="attr2">
            Atributo 2:
            <input id="attr2" type="number" name="attr2" data-testid="attr2-input" />
          </label>

          <label htmlFor="attr3">
            Atributo 3:
            <input id="attr3" type="number" name="attr3" data-testid="attr3-input" />
          </label>

          <label htmlFor="image">
            Imagem:
            <input id="image" type="text" name="image" data-testid="image-input" />
          </label>

          <label htmlFor="trunfo">
            Super Trunfo:
            <input id="trunfo" type="checkbox" name="trunfo" data-testid="trunfo-input" />
          </label>

          <label htmlFor="raridade">
            <select name="raridade" id="raridade" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <button type="button" data-testid="save-button">Salvar</button>

        </form>
      </div>
    );
  }
}
