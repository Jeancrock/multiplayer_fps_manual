document.addEventListener("DOMContentLoaded", () => {
    const pageFlip = new St.PageFlip(document.getElementById("flipbook"), {
        width: 400,
        height: 600,
        size: "fixed",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
    });

    const pages = [
        "assets/00.png",
        "assets/01.png",
        "assets/02.png",
        "assets/03.png",
        "assets/04.png",
    ];

    const pageElements = pages.map((src) => {
        const page = document.createElement("div");
        page.classList.add("page");
        page.innerHTML = `<img src="${src}" style="width:100%; height:100%;" />`;
        return page;
    });

    pageFlip.loadFromHTML(pageElements);
});
