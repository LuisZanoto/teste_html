const visitorCounter = document.querySelector("[data-visitor-counter]");
let badgeRequest = 0;

function renderVisitorBadge(language) {
    if (!visitorCounter) return;

    const currentRequest = ++badgeRequest;
    const badge = new Image();
    const badgeUrl = new URL("https://visitor-badge.laobi.icu/badge");
    const isEnglish = language === "en";

    badgeUrl.search = new URLSearchParams({
        page_id: "LuisZanoto.teste_html",
        left_text: isEnglish ? "visits" : "visitas",
        left_color: "#315d4b",
        right_color: "#df5b3f",
        radius: "6",
        height: "24",
    });

    badge.alt = isEnglish ? "Total website visits" : "Total de visitas ao site";
    badge.decoding = "async";
    badge.onload = () => {
        if (currentRequest === badgeRequest) visitorCounter.replaceChildren(badge);
    };
    badge.onerror = () => {
        if (currentRequest !== badgeRequest) return;
        visitorCounter.textContent = isEnglish ? "Counter unavailable" : "Contador indisponível";
        visitorCounter.setAttribute(
            "aria-label",
            isEnglish ? "Visitor counter unavailable" : "Contador de visitas indisponível",
        );
    };
    badge.src = badgeUrl.href;
}

renderVisitorBadge(document.documentElement.lang === "en" ? "en" : "pt-BR");
window.addEventListener("languagechange", (event) => renderVisitorBadge(event.detail));