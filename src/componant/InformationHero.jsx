import "./InformationHero.css";
import { useState } from "react";
import { newsArticles } from "../data/newsData";

export default function InformationHero() {
  // The article data now lives in src/data/newsData.js so the News
  // section can reuse the exact same objects. Rendering is unchanged.
  const cards = newsArticles;

  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * 3;

  return (
    <>
      <h1 className="title-information">สาระน่ารู้</h1>
      <div className="container-information-card">
        {/* key= re-mounts the list per page so the entrance animation replays */}
        <div className="card-information-list" key={currentPage}>
          {cards.slice(startIndex, startIndex + 3).map((card, index) => (
            <div
              className="card-information"
              key={card.id}
              style={{ "--i": index }}
            >
              <div className="card-information-media">
                <img src={card.img} alt="" />
              </div>
              <p>{card.content}</p>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          {Array.from({ length: Math.ceil(cards.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  currentPage === index ? "active" : ""
                }`}
                onClick={() => setCurrentPage(index)}
                aria-label={`ไปหน้าที่ ${index + 1}`}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
}
