import React from 'react';
import './projects.css';
import Sidebar from './Sidebar';
import { useState } from 'react';
import {FaTrashRestore} from 'react-icons/fa'

const Projects = () => {
  const [cards, setCards] = useState([
    { id: 1, text: "Add task", section: 0, tag: "" },
    { id: 2, text: "Add task", section: 0, tag: ""},
    { id: 3, text: "Add task", section: 0, tag: "" }
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

  const handleCardTagChange = (event, cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
          return { ...card, tag: event.target.value };
      }
      return card;
    });
    setCards(updatedCards);
  }

  const deleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  const createNewCard = (section) => {
    const newCardId = cards.length + 1;
    const newCard = { id: newCardId, text: `Add task`, section, tag: "" };
    setCards([...cards, newCard]);
  };

  const getCardCount = (section) => {
    return cards.filter((card) => card.section === section).length;
  };

  return (
    <div className="projects-page">
      <div className="projects-sidebar-section"><Sidebar /></div>
      <div className="projects-section">
      <div className="projects-header">Projects</div>
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
                > <FaTrashRestore size={13}/>
                </button>
                <select
                  type="text"
                  value={card.tag || ''} // Ensure the value is an empty string if `card.tag` is undefined or null
                  onChange={(event) => handleCardTagChange(event, card.id)}
                  className="card-tag-input">
                    <option value="">Select</option>
                    <option value="Goals">Goals</option>
                    <option value="Private">Private</option>
                    <option value="Work">Work</option>
                    <option value="Health">Health</option>
                </select>
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
                ><FaTrashRestore size={13}/>
                </button>
                <input
                  type="text"
                  value={card.tag}
                  onChange={(event) => handleCardTagChange(event, card.id)}
                  className="card-tag-input"
                  placeholder="Add tag"
                />
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
                ><FaTrashRestore size={13}/>
                </button>
                <input
                  type="text"
                  value={card.tag}
                  onChange={(event) => handleCardTagChange(event, card.id)}
                  className="card-tag-input"
                  placeholder="Add tag"
                />
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