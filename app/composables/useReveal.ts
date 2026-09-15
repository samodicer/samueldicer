export function useReveal() {
  onMounted(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((element) => {
        // Progressive enhancement: content stays visible if JavaScript is unavailable.
        element.classList.add("reveal-ready");
        observer.observe(element);
      });
    const showAll = () => {
      if (media.matches) {
        document
          .querySelectorAll(".reveal-ready")
          .forEach((el) => el.classList.add("is-visible"));
        observer.disconnect();
      }
    };
    media.addEventListener("change", showAll);
    onBeforeUnmount(() => {
      observer.disconnect();
      media.removeEventListener("change", showAll);
    });
  });
}
