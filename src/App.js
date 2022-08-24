import React from 'react';
import { v4 } from 'uuid';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
  };

  // Number(cardAttr1) === attrMax

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = this.state;
      const attrMax = 90;
      const attrMin = 0;
      const somaAttr = 210;

      if (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || Number(cardAttr1) > attrMax
      || Number(cardAttr1) < attrMin
      || Number(cardAttr2) > attrMax
      || Number(cardAttr2) < attrMin
      || Number(cardAttr3) > attrMax
      || Number(cardAttr3) < attrMin
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > somaAttr) {
        this.setState({
          isSaveButtonDisabled: true,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: false,
        });
      }
    });
  };

  onSaveButtonClick = () => { // trecho de código referenciado no esquenta com a Hellen
    this.setState((prevState) => ({
      data: [...prevState.data, { ...prevState, id: v4() }], // cria id genérico para o array
    }), () => this.setState((prevState) => ({ // após salvar no array data, limpa os campos
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: prevState.data.some((card) => card.cardTrunfo === true),
    })));
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      data,
    } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
        />
        <div>
          {data.map((card, index) => (
            <div key={ index }>
              <p data-testid="name-card">{ card.cardName }</p>
              <img
                src={ card.cardImage }
                alt={ card.cardName }
                data-testid="image-card"
              />
              <p data-testid="description-card">{ card.cardDescription }</p>
              <p data-testid="attr1-card">{ card.cardAttr1 }</p>
              <p data-testid="attr2-card">{ card.cardAttr2 }</p>
              <p data-testid="attr3-card">{ card.cardAttr3 }</p>
              <p data-testid="rare-card">{ card.cardRare }</p>
              {
                card.cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
