const visitorCounter = document.querySelector("[data-visitor-counter]");

if (visitorCounter) {
    const badge = new Image();
    const badgeUrl = new URL("https://visitor-badge.laobi.icu/badge");

    badgeUrl.search = new URLSearchParams({
        page_id: "LuisZanoto.teste_html",
        left_text: "visitas",
        left_color: "#315d4b",
        right_color: "#df5b3f",
        radius: "6",
        height: "24",
    });

    badge.alt = "Total de visitas ao site";
    badge.decoding = "async";
    badge.onload = () => visitorCounter.replaceChildren(badge);
    badge.onerror = () => {
        visitorCounter.textContent = "Contador indisponível";
        visitorCounter.setAttribute("aria-label", "Contador de visitas indisponível");
    };
    badge.src = badgeUrl.href;
}