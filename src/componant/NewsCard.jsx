// One horizontal news card: thumbnail on the left, title / description /
// category / "Read More" stacked in a column on the right.
export default function NewsCard({ article }) {
  return (
    <article className="news-card">
      {/* Left: thumbnail */}
      <div className="news-card-media">
        <img src={article.img} alt="" />
      </div>

      {/* Right: text column */}
      <div className="news-card-body">
        <span className="news-card-category">{article.category}</span>
        <h3 className="news-card-title">{article.content}</h3>
        <p className="news-card-desc">{article.description}</p>

        <p className="news-card-action">
          {/* The card's only real link. Its ::after pseudo element is
              stretched over the whole card, so clicking anywhere on the
              card opens the article too, while keyboard users get one
              clean tab stop. */}
          <a className="news-card-link" href={article.link}>
            Read More
            {/* Hidden text so screen readers know which article opens. */}
            <span className="news-sr-only">: {article.content}</span>
          </a>
        </p>
      </div>
    </article>
  );
}
