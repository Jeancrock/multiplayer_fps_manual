document.addEventListener("DOMContentLoaded", () => {
    // Initialisation du PageFlip sur l'élément avec id "flipbook"
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

    // Crée les éléments div contenant les images et retourne une promesse
    function createPageElement(src) {
        return new Promise((resolve, reject) => {
            const page = document.createElement("div");
            page.classList.add("page");

            const img = new Image();
            img.src = src;
            img.style.width = "100%";
            img.style.height = "100%";

            img.onload = () => {
                page.appendChild(img);
                resolve(page);
            };
            img.onerror = () => {
                console.error(`Erreur chargement image : ${src}`);
                // Résout quand même pour ne pas bloquer le chargement complet
                resolve(page);
            };
        });
    }

    // Crée tous les éléments pages en attendant le chargement des images
    Promise.all(pages.map(createPageElement))
        .then((pageElements) => {
            // Charge les pages dans PageFlip une fois toutes prêtes
            pageFlip.loadFromHTML(pageElements);
        });
});
