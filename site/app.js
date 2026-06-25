async function loadResearch() {
  const res = await fetch("data/research.json");
  if (!res.ok) throw new Error(`Failed to load research data: ${res.status}`);
  return res.json();
}

function uniqueTags(items) {
  const tags = new Set();
  items.forEach((item) => (item.tags || []).forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

function cardHTML(item) {
  const wrapperTag = item.githubUrl ? "a" : "div";
  const hrefAttr = item.githubUrl ? `href="${item.githubUrl}" target="_blank" rel="noopener"` : "";

  const links = [];
  if (item.githubUrl) links.push(`<a href="${item.githubUrl}" target="_blank" rel="noopener">GitHub</a>`);
  if (item.talkUrl) links.push(`<a href="${item.talkUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Talk</a>`);
  if (item.paperUrl) links.push(`<a href="${item.paperUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Paper</a>`);

  return `
    <${wrapperTag} class="card" ${hrefAttr} data-id="${item.id}">
      <span class="status">${item.status || ""}</span>
      <h2>${item.title}</h2>
      <p>${item.description || ""}</p>
      <div class="links">${links.join("") || "<span>No links yet</span>"}</div>
    </${wrapperTag}>
  `;
}

function render(items) {
  const grid = document.getElementById("grid");
  const emptyState = document.getElementById("empty-state");
  grid.innerHTML = items.map(cardHTML).join("");
  emptyState.hidden = items.length > 0;
}

function applyFilters(allItems, query, activeTags) {
  const q = query.trim().toLowerCase();
  return allItems.filter((item) => {
    const matchesQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      (item.description || "").toLowerCase().includes(q);
    const matchesTags =
      activeTags.size === 0 || (item.tags || []).some((t) => activeTags.has(t));
    return matchesQuery && matchesTags;
  });
}

async function init() {
  const items = await loadResearch();
  const tags = uniqueTags(items);
  const activeTags = new Set();

  const tagsContainer = document.getElementById("tags");
  tagsContainer.innerHTML = tags
    .map((t) => `<button class="tag-chip" data-tag="${t}" aria-pressed="false">${t}</button>`)
    .join("");

  const searchInput = document.getElementById("search");

  function refresh() {
    render(applyFilters(items, searchInput.value, activeTags));
  }

  searchInput.addEventListener("input", refresh);

  tagsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".tag-chip");
    if (!btn) return;
    const tag = btn.dataset.tag;
    if (activeTags.has(tag)) {
      activeTags.delete(tag);
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    } else {
      activeTags.add(tag);
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    }
    refresh();
  });

  render(items);
}

init().catch((err) => {
  document.getElementById("grid").innerHTML =
    `<p class="empty-state">Failed to load research data. ${err.message}</p>`;
});
