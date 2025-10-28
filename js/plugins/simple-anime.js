window.SimpleAnime = class {
  constructor() {
    this.items = document.querySelectorAll("[data-anime]");
    this.init();
  }

  animateItem(item) {
    const delay = Number(item.getAttribute("data-anime")) || 0;
    setTimeout(() => {
      item.classList.add("anime");
    }, delay);
  }

  handleScroll() {
    this.items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

      if (isVisible && !item.classList.contains("anime")) {
        this.animateItem(item);
      }
    });
  }

  init() {
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScroll(); // anima o que já está visível ao carregar
    window.addEventListener("scroll", this.handleScroll);
  }
};
