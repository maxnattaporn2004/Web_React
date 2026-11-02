// Sidebar with the search box and the category filter.
// `categories` is a list of strings; "all" means every category.
export default function NewsSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
}) {
  return (
    <aside className="news-sidebar">
      {/* ── Search ────────────────────────────────────────────────── */}
      <div className="news-search">
        <label className="news-sidebar-label" htmlFor="news-search-input">
          ค้นหาข่าวสาร
        </label>
        <input
          id="news-search-input"
          className="news-search-input"
          type="search"
          placeholder="พิมพ์หัวข้อหรือคำค้นหา..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      {/* ── Category filter ───────────────────────────────────────── */}
      <div className="news-categories">
        <h2 className="news-sidebar-label" id="news-category-label">
          หมวดหมู่
        </h2>
        <div
          className="news-category-list"
          role="group"
          aria-labelledby="news-category-label"
        >
          {categories.map((category) => {
            const isActive = category === selectedCategory;

            return (
              <button
                key={category}
                type="button"
                className={`news-category-btn${isActive ? " is-active" : ""}`}
                aria-pressed={isActive}
                onClick={() => onSelectCategory(category)}
              >
                {category === "all" ? "ทั้งหมด" : category}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
