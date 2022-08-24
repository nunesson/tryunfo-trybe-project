import React from 'react';
import './App.css';
import { v4 } from 'uuid';
import Card from './components/Card';
import Form from './components/Form';
import Filter from './components/Filter';

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
    disableFilter: false,
    isSaveButtonDisabled: true,
    data: [],
    buscaNome: '',
    buscaRara: '',
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

  removeCard = (index) => { // Referência: https://www.youtube.com/watch?v=y8ckoDFXdVE
    const { data } = this.state;
    data.slice();
    data.splice(index, 1);
    this.setState({ data });
    this.setState((prevState) => ({
      hasTrunfo: prevState.data.some((card) => card.cardTrunfo === true),
    }));
  };

  handleSearch = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
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
      buscaNome,
      buscaRara,
      disableFilter,
    } = this.state;

    return (
      <div className="container">
        <div className="form-input">
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
        </div>
        <span className="card-preview">
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
        </span>

        <div>
          <Filter
            handleSearch={ this.handleSearch }
            buscaNome={ buscaNome }
            buscaRara={ buscaRara }
            disableFilter={ disableFilter }
          />
        </div>

        <div>
          {(disableFilter ? data.filter((card) => card.cardTrunfo) : data
            .filter((card) => card.cardName.includes(buscaNome))
            .filter((card) => (buscaRara ? card.cardRare === buscaRara : card)))
            .map((card, index) => (
              <div key={ index }>
                <h3 data-testid="name-card">{ card.cardName }</h3>
                <img
                  src={ card.cardImage }
                  alt={ card.cardName }
                  data-testid="image-card"
                />
                <p
                  className="card-description"
                  data-testid="description-card"
                >
                  { card.cardDescription }
                </p>
                <p data-testid="attr1-card">{ card.cardAttr1 }</p>
                <p data-testid="attr2-card">{ card.cardAttr2 }</p>
                <p data-testid="attr3-card">{ card.cardAttr3 }</p>
                <p data-testid="rare-card">{ card.cardRare }</p>
                {
                  card.cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
                }
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(index) }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
