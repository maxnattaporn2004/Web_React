import "./NewsSection.css";
// Shared carousel primitives reused (not duplicated) from sibling components:
// .btn-next-back -> Carousel.css (prev/next arrow buttons)
import "./Carousel.css";
import { useState } from "react";
import { newsArticles } from "../data/newsData";
import NewsCard from "./NewsCard";
import NewsSidebar from "./NewsSidebar";

// How many cards one carousel page shows (stacked vertically).
const CARDS_PER_PAGE = 3;

// Build the category list once from the data: "all" first, then every
// distinct category, with no duplicates.
function getCategories() {
  const names = newsArticles.map((article) => article.category);
  return ["all", ...Array.from(new Set(names))];
}

export default function NewsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const categories = getCategories();

  // Filter first: category AND search term (title, description, category).
  const filteredArticles = newsArticles.filter((article) => {
    const inCategory =
      selectedCategory === "all" || article.category === selectedCategory;

    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      term === "" ||
      article.content.toLowerCase().includes(term) ||
      article.description.toLowerCase().includes(term) ||
      article.category.toLowerCase().includes(term);

    return inCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / CARDS_PER_PAGE);

  // Guard: filtering can shrink the list, so never render an empty page.
  const safePage =
    totalPages === 0 ? 0 : Math.min(currentPage, totalPages - 1);

  const startIndex = safePage * CARDS_PER_PAGE;
  const pageArticles = filteredArticles.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  // Changing the search or category always jumps back to page 1.
  function handleSearchChange(value) {
    setSearchTerm(value);
    setCurrentPage(0);
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
    setCurrentPage(0);
  }

  function goToPrevPage() {
    setCurrentPage((page) => Math.max(0, page - 1));
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(totalPages - 1, page + 1));
  }

  return (
    <main className="news-section">
      <div className="news-container">
        <h1 className="news-title">ข่าวสาร</h1>

        {/* Sidebar beside the list on desktop, stacked above on mobile */}
        <div className="news-layout">
          <NewsSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />

          <div className="news-content">
            {/* Nothing matched the search / category → empty state,
                otherwise the card list plus prev/next controls. */}
            {filteredArticles.length === 0 ? (
              <p className="news-empty">
                ไม่พบข่าวสารที่ตรงกับการค้นหาของคุณ
                <br />
                <span className="news-empty-hint">
                  ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่ "ทั้งหมด"
                </span>
              </p>
            ) : (
              <>
                {/* key= re-mounts the list per page so the entrance
                    animation replays, like InformationHero does. */}
                <div className="news-list" key={safePage}>
                  {pageArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>

                {/* Prev / Next — only when there is more than one page */}
                {totalPages > 1 && (
                  <div className="news-controls">
                    <button
                      type="button"
                      className="btn-next-back"
                      onClick={goToPrevPage}
                      disabled={safePage === 0}
                      aria-label="หน้าก่อนหน้า"
                    >
                      <span aria-hidden="true">◀</span>
                    </button>

                    <span
                      className="news-page-indicator"
                      aria-live="polite"
                    >
                      หน้า {safePage + 1} จาก {totalPages}
                    </span>

                    <button
                      type="button"
                      className="btn-next-back"
                      onClick={goToNextPage}
                      disabled={safePage === totalPages - 1}
                      aria-label="หน้าถัดไป"
                    >
                      <span aria-hidden="true">▶</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
