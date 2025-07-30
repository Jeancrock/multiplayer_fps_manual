// Contenu des pages du livre
const pagesContent = [
    "<img src=\"./assets/00.png\"></img>",
    "<h2>Page 2</h2><p>Voici la deuxième page, affichée à côté de la première.</p>",
    "<h2>Page 3</h2><p>La troisième page arrive, avec plus de texte pour tester.</p>",
    "<h2>Page 4</h2><p>Dernière page, merci de lire ce petit livre.</p>",
  ];
  
  // Indice de la page affichée à gauche
  let currentPageIndex = 0;
  
  const pageLeft = document.getElementById("page-0");
  const pageRight = document.getElementById("page-1");
  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");
  
  // Affiche deux pages en fonction de currentPageIndex
  function renderPages() {
    pageLeft.innerHTML = pagesContent[currentPageIndex] || "";
    pageRight.innerHTML = pagesContent[currentPageIndex + 1] || "";
  
    // Désactiver les boutons si on est au début ou à la fin
    btnPrev.disabled = currentPageIndex === 0;
    btnNext.disabled = currentPageIndex + 2 >= pagesContent.length;
  }
  
  // Gestion clic précédent
  btnPrev.addEventListener("click", () => {
    if (currentPageIndex > 0) {
      currentPageIndex -= 2;
      if (currentPageIndex < 0) currentPageIndex = 0;
      renderPages();
    }
  });
  
  // Gestion clic suivant
  btnNext.addEventListener("click", () => {
    if (currentPageIndex + 2 < pagesContent.length) {
      currentPageIndex += 2;
      renderPages();
    }
  });
  
  // Initialiser l'affichage
  renderPages();
  