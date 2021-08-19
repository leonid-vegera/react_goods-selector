/* eslint-disable */
import React from 'react';
import ClassNames from 'classnames';
import './App.scss';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  render() {
    const { selectedGoods } = this.state;
    return (
      <div className="App">

        {selectedGoods.length > 0
          ? (<h1>
            {`${selectedGoods} is selected`}
            <button
              type="button"
              onClick={() => { //! кнопочка очищает список выбранных элементов
                this.setState({ selectedGoods: [] })
              }}
            >
              X
            </button>
          </h1>)
          : (<h1>No goods selected</h1>)}
        
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              //!если элемент в стейте содержит перебираемый элем, то даём ему класс с бекграундом
              // className={selectedGoods.includes(good) 
              //   ? ("selected") : ('')}
              className={ClassNames({ 'selected': selectedGoods.includes(good)})}
            >
              {good}
              {'  '}
              {!selectedGoods.includes(good)  //! если массив в стейте не содержит єлем-т, значит рендерим кнопку Add с функционалом, если нет - кнопку Remove
                ? (
                  <button
                    type='button'
                    onClick={() => {  //! добавляем элемент в стейт = пишем функцию здесь, потому что есть доступ к замыканию good
                      this.setState(state => ({
                        selectedGoods: [...state.selectedGoods, good],
                      }))
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => {  //! удаляем элем из стейта, фильтруя массив - пишем функцию здесь, потому что есть доступ к замыканию good
                      this.setState(state => ({
                        selectedGoods: state.selectedGoods.filter(item => item !== good)
                      }))
                    }}
                  >
                    Remove
                  </button>
                )}
              
            </li>
          ))}
        </ul>
      </div>
    )
  }
};


export default App;
