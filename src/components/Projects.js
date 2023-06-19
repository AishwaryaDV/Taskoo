import React from 'react';
import './projects.css';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Projects = () => {
  const [cards, setCards] = useState([
    { id: 1, text: "Add task", section: 0 },
    { id: 2, text: "Add task", section: 0 },
    { id: 3, text: "Add task", section: 0 }
  ]);

  const handleDragStart = (event, card) => {
    event.dataTransfer.setData("card", JSON.stringify(card));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, section) => {
    event.preventDefault();
    const draggedCard = JSON.parse(event.dataTransfer.getData("card"));
    const updatedCards = cards.map((card) => {
      if (card.id === draggedCard.id) {
        return { ...card, section };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const handleCardTextChange = (event, cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, text: event.target.value };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const deleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  const createNewCard = (section) => {
    const newCardId = cards.length + 1;
    const newCard = { id: newCardId, text: `Add task`, section };
    setCards([...cards, newCard]);
  };

  const getCardCount = (section) => {
    return cards.filter((card) => card.section === section).length;
  };

  return (
    <div className="projects-page">
      <div className="projects-sidebar-section"><Sidebar /></div>
      <div className="projects-section">


      <div className="todo-container">
      <div
        className="section-box"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 1)}
      >
        <h2 className="kanban-header">Todo
        <div className="card-count">{getCardCount(1)}</div>
        </h2>

        <button className="add-card-btn" onClick={() => createNewCard(1)}>
          +
        </button>
        <div className="cards-container">
          {cards
            .filter((card) => card.section === 1)
            .map((card) => (
              <div
                key={card.id}
                draggable
                onDragStart={(event) => handleDragStart(event, card)}
                className="card"
              >
                <input
                  type="text"
                  value={card.text}
                  onChange={(event) => handleCardTextChange(event, card.id)}
                  className="card-input"
                />
                <button
                  className="delete-card-btn"
                  onClick={() => deleteCard(card.id)}
                >
                  x
                </button>
              </div>
            ))}
        </div>
      </div>

      <div
        className="section-box"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 2)}
      >
        <h2 className="kanban-header">In progress 
          <div className="card-count">{getCardCount(2)}</div>
        </h2>
        <button className="add-card-btn" onClick={() => createNewCard(2)}>
          +
        </button>
        <div className="cards-container">
          {cards
            .filter((card) => card.section === 2)
            .map((card) => (
              <div
                key={card.id}
                draggable
                onDragStart={(event) => handleDragStart(event, card)}
                className="card"
              >
                <input
                  type="text"
                  value={card.text}
                  onChange={(event) => handleCardTextChange(event, card.id)}
                  className="card-input"
                />
                <button
                  className="delete-card-btn"
                  onClick={() => deleteCard(card.id)}
                >
                  x
                </button>
              </div>
            ))}
        </div>
      </div>

      <div
        className="section-box"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 3)}
      >
        <h2 className="kanban-header">Completed
          <div className="card-count">{getCardCount(3)}</div>
        </h2>
        <button className="add-card-btn" onClick={() => createNewCard(3)}>
          +
        </button>
        <div className="cards-container">
          {cards
            .filter((card) => card.section === 3)
            .map((card) => (
              <div
                key={card.id}
                draggable
                onDragStart={(event) => handleDragStart(event, card)}
                className="card"
              >
                <input
                  type="text"
                  value={card.text}
                  onChange={(event) => handleCardTextChange(event, card.id)}
                  className="card-input"
                />
                <button
                  className="delete-card-btn"
                  onClick={() => deleteCard(card.id)}
                >
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>


      </div>
    </div>
  )
}

export default Projects