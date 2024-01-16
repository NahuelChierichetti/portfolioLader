import { gsap, scrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(scrollTrigger);

const Title = () => {
  const title = "Portfolio Lader";

  const animation = gsap.fromTo(
    document.createElement("h1"), // Envolver el título en un elemento h1
    { scale: 0.5 },
    { duration: 1, scale: 1, ease: "power2.in" }
  );

  const scrollTrigger = scrollTrigger.create({
    trigger: "window",
    start: "bottom top",
    end: "bottom bottom",
    onEnter: () => {
      animation.play();
    },
  });

  return (
    <div className="title">
      {title}
    </div>
  );
};

export default Title;