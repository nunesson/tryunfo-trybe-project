import React from 'react';
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
      </div>
    );
  }
}

export default App;
