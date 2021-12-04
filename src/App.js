import React, { useState, useEffect } from "react";
import Column from "./components/Column";
import Header from "./components/Header"

import s from './css/App.module.css'

import { setLocalStorage, loadLocalStorage, clearLocalStorage } from './services/localStorage';

function App() {
  const [columns, setColumns] = useState([]);
  // const [car]

  useEffect(() => {
    const dataColumns = [
      {
        id: 1,
        name: 'Key Partners',
        descriptions: [
          'Who are our Key Partners?',
          'Who are our key suppliers?',
          'Which Key Resources are we acquairing from partners?',
          'Which Key Activities do partners perform?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 2,
        name: 'Key Activities',
        descriptions: [
          'What Key Activities do our Value Propositions require?',
          'Our Distribution Channels?',
          'Customer Relationships?',
          'Revenue streams?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 3,
        name: 'Key Resources',
        descriptions: [
          'What Key Resources do our Value Propositions require?',
          'Our Distribution Channels? Customer Relationships?',
          'Revenue Streams?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 4,
        name: 'Value Propositions',
        descriptions: [
          'What value do we deliver to the customer?',
          'Which one of our customer\'s problems are we helping to solve?',
          'What bundles of products and services are we offering to each Customer Segments?',
          'Which customer needs are we satisfying?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 5,
        name: 'Customer Relationships',
        descriptions: [
          'What type of relationship does each of our Customer Segments expect us to establish and maintain with them?',
          'Which ones have we established?',
          'How are they integrated with the rest of our business model?',
          'How costly are they?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 6,
        name: 'Channels',
        descriptions: [
          'Through which Channels do our Customer Segments want to be reached?',
          'How are we reaching them now?',
          'How are our Channels integrated?',
          'Which ones work best?',
          'Which ones are most cost-efficient?',
          'How are we integrating them with customer routines?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 7,
        name: 'Customer Segments',
        descriptions: [
          'For whom are we creating value?',
          'Who are our most important customers?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 8,
        name: 'Cost Structure',
        descriptions: [
          'What are the most important costs inherent in our business model?',
          'Which Key Resources are most expensive?',
          'Which Key Activities are most expensive?'
        ],
        icon: '',
        cards: []
      },
      {
        id: 9,
        name: 'Revenue Streams',
        descriptions: [
          'For what value are our customers really willing to pay?',
          'For what do they currently pay?',
          'How are they currently paying?',
          'How would they prefer to pay?',
          'How much does each Revenue Stream contribute to overall revenues?'
        ],
        icon: '',
        cards: []
      },
    ]

    if(loadLocalStorage('board')) {
      setColumns(loadLocalStorage('board'));
    } else {
      setColumns(dataColumns)
    }

  }, []);

  function updateColumn(cards, index) {
    // if(cards.length === 0) return

    const columnsCopy = [...columns];
    
    columnsCopy[index].cards = cards;

    setColumns(columnsCopy);

    setLocalStorage(columns, 'board')
  }

  function resetCanvas() {
    clearLocalStorage();
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Header />

      <div className={`${s.app} container`}>

        <div className={`${s.boardActions} mb-2`}>
          <button className="btn btn-primary btn-sm" onClick={resetCanvas}>Erase canvas</button>
        </div>
        <div className={s.board}>
          
          { columns && 
            columns.map((column, index) =>( 
              <Column 
              key={column.id} 
              data={column} 
              columns={columns} 
              updateColumn={updateColumn}
              columnIndex={index}
              setColumns={setColumns} /> 
            ) )
          }

        </div>
      </div>
    </div>
  );
}

export default App;
