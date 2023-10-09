import React, { useState } from 'react';

const SmileysVote = () => {
    const [smileys, setSmileys] = useState([
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
    ]);

    const handleVote = (id) => {
        setSmileys(prevState => {
        return prevState.map(smiley => (
            smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
        ));
        });
    };

    const showResults = () => {
        const winningSmiley = smileys.reduce((prev, current) => (
        (prev.count > current.count) ? prev : current
        ));
        return `Смайл ${winningSmiley.id} переміг з ${winningSmiley.count} голосами!`;
    };

    return (
        <div>
            <h2>Голосування за найкращий смайлик</h2>
            <p>*для голосування натисніть на смайлик</p>
            <div class="list-smiley">
                <ul>
                    {smileys.map(smiley => (
                    <li key={smiley.id}>
                        <span>Смайл {smiley.id}</span>
                        <button class="smiley" onClick={() => handleVote(smiley.id)}>
                            {smiley.id === 1 && "😊"}
                            {smiley.id === 2 && "😄"}
                            {smiley.id === 3 && "🥰"}
                        </button>
                        <span>Голосів: {smiley.count}</span>
                    </li>
                    ))}
                </ul>
            </div>
            <button class="resbttn" onClick={() => alert(showResults())}>Результат</button>
        </div>
    );
    };

export default SmileysVote;
