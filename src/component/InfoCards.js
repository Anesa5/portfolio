import React, { useState } from "react";
import { FaCode, FaPaintBrush, FaChartBar, FaTimes, FaArrowRight } from "react-icons/fa";
import "./InfoCards.css";


const cardData = [
    {
        id: 1,
        icon: <FaCode />,
        title: "Data Analyst",
        content: [
            "I analyze data systems",
            "Automating information retrieval",
            "Applying statistical and logical techniques",
            "Visualizing graphs and dashboards"
        ],
    },
    {
        id: 2,
        icon: <FaPaintBrush />,
        title: "Banker",
        content: [
            "Assist clients with financial questions",
            "Maintain customer accounts",
            "Resolve disputes",
            "Apply statistical techniques"
        ],
    },
    {
        id: 3,
        icon: <FaChartBar />,
        title: "Web Developer",
        content: [
            "Develop the user interface",
            "Webpage development",
            "Create UX interactions",
            "Trained in WordPress"
        ],
    },
];

function InfoCards() {
    const [activeCard, setActiveCard] = useState(null);

    const openModal = (card) => {
        setActiveCard(card);
    };

    const closeModal = () => {
        setActiveCard(null);
    };

    return (
        <div className="card-container">
            {cardData.map((card) => (
                <div className="info-card" key={card.id}>
                    <div className="icon">{card.icon}</div>
                    <h5>{card.title}</h5>
                    <button className="learn-more" onClick={() => openModal(card)} style={{ marginLeft: "-20px" }}>
                        View More <FaArrowRight style={{ marginLeft: "6px" }} />
                    </button>

                </div>
            ))}

            {activeCard && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <FaTimes className="cross-icon" onClick={closeModal} />
                        <h3>{activeCard.title}</h3>
                        <ul className="circle-list" style={{ listStyleType: "none" }}>
                            {activeCard.content.map((item, idx) => (
                                <li key={idx}>
                                    <input type="checkbox" checked readOnly style={{ listStyleType: "round" }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InfoCards;

