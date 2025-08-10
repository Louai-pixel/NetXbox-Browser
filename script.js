// إعداد محرك البحث الافتراضي (DuckDuckGo أسرع وأخف)
const searchEngine = "https://duckduckgo.com/?q="; 

// تحميل آخر بحث إذا موجود
window.onload = function () {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
        document.getElementById("searchBox").value = lastSearch;
    }
    loadFavorites();
};

// تشغيل البحث
function searchNetXbox() {
    const query = document.getElementById("searchBox").value.trim();
    if (query !== "") {
        localStorage.setItem("lastSearch", query);
        window.location.href = searchEngine + encodeURIComponent(query);
    }
}

// حدث عند الضغط على زر البحث
document.getElementById("searchButton").addEventListener("click", searchNetXbox);

// حدث عند الضغط على Enter في مربع البحث
document.getElementById("searchBox").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchNetXbox();
    }
});

// قائمة المفضلات
const favorites = [
    { name: "YouTube", url: "https://m.youtube.com" },
    { name: "DuckDuckGo", url: "https://duckduckgo.com" },
];

// عرض المفضلات على الصفحة
function loadFavorites() {
    const favContainer = document.getElementById("favorites");
    favContainer.innerHTML = "";
    favorites.forEach(site => {
        const btn = document.createElement("button");
        btn.textContent = site.name;
        btn.className = "fav-btn";
        btn.onclick = () => { window.location.href = site.url; };
        favContainer.appendChild(btn);
    });
}