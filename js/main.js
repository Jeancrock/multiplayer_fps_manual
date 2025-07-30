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
      "assets/page1.png",
      "assets/page2.png",
      "assets/page3.png",
      "assets/page4.png"
    ];
  
    const pageElements = pages.map((src) => {
      const page = document.createElement("div");
      page.classList.add("page");
      page.innerHTML = `<img src="${src}" style="width:100%; height:100%;" />`;
      return page;
    });
  
    pageFlip.loadFromHTML(pageElements);
  });
  