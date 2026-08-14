"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DESKTOP_QUERY = "(min-width: 1280px)";
const MOBILE_QUERY = "(max-width: 1279px)";

export function LandingMotion() {
  useGSAP(() => {
    const root = document.querySelector<HTMLElement>("[data-motion-root]");

    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const one = (selector: string, scope: ParentNode = root) => scope.querySelector<HTMLElement>(selector);
    const all = (selector: string, scope: ParentNode = root) => Array.from(scope.querySelectorAll<HTMLElement>(selector));
    const section = (name: string) => one(`[data-motion-section="${name}"]`);
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: DESKTOP_QUERY,
        mobile: MOBILE_QUERY,
      },
      (context) => {
        const isDesktop = Boolean(context.conditions?.desktop);
        const hoverCleanups: Array<() => void> = [];

        const hero = section("hero");
        if (hero) {
          const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
          const heroPuzzles = all('[data-motion="hero-puzzle"]', hero);

          heroTimeline
            .from(one('[data-motion="hero-badge"]', hero), { opacity: 0, y: 12, duration: 0.6 })
            .from(all('[data-motion="hero-heading-line"]', hero), { opacity: 0, y: 34, duration: 0.78, stagger: 0.1 }, "-=0.3")
            .from(one('[data-motion="hero-description"]', hero), { opacity: 0, y: 20, duration: 0.68 }, "-=0.42")
            .from(all('[data-motion="hero-cta"]', hero), { opacity: 0, y: 16, duration: 0.64, stagger: 0.08 }, "-=0.38")
            .from(one('[data-motion="hero-footer-copy"]', hero), { opacity: 0, duration: 0.55 }, "-=0.28")
            .from(
              heroPuzzles,
              {
                opacity: 0,
                scale: 0.94,
                x: (_, target) => Number((target as HTMLElement).dataset.motionX ?? 0),
                y: (_, target) => Number((target as HTMLElement).dataset.motionY ?? 18),
                duration: 0.8,
                stagger: 0.07,
              },
              "-=0.42",
            );

          const indicatorDot = one('[data-motion="scroll-indicator-dot"]', hero);
          if (indicatorDot && isDesktop) {
            gsap.to(indicatorDot, {
              y: 9,
              opacity: 0.35,
              duration: 0.75,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true,
            });
          }

          if (isDesktop) {
            const parallaxPuzzles = all('[data-motion="hero-puzzle-parallax"]', hero);
            gsap.to(parallaxPuzzles, {
              y: (_, target) => Number((target as HTMLElement).dataset.parallaxY ?? -18),
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
              },
            });
          }
        }

        const features = section("features");
        if (features) {
          const cards = all('[data-motion="feature-card"]', features);
          const featureTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: features, start: "top 72%", once: true },
          });

          featureTimeline
            .from(all('[data-motion="feature-heading"]', features), { opacity: 0, y: 25, duration: 0.7, stagger: 0.08 })
            .from(cards, { opacity: 0, y: 42, scale: 0.975, duration: 0.76, stagger: 0.1 }, "-=0.35")
            .from(all('[data-motion="feature-preview"]', features), { opacity: 0, y: 9, duration: 0.55, stagger: 0.07 }, "-=0.48");

          if (isDesktop) {
            cards.forEach((card) => {
              const enter = () => gsap.to(card, { y: -4, duration: 0.26, ease: "power2.out", overwrite: "auto" });
              const leave = () => gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
              card.addEventListener("mouseenter", enter);
              card.addEventListener("mouseleave", leave);
              hoverCleanups.push(() => {
                card.removeEventListener("mouseenter", enter);
                card.removeEventListener("mouseleave", leave);
              });
            });
          }
        }

        const difference = section("difference");
        if (difference) {
          const differenceTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: difference, start: "top 72%", once: true },
          });

          differenceTimeline
            .from(all('[data-motion="difference-copy"]', difference), { opacity: 0, y: 28, duration: 0.7, stagger: 0.08 })
            .from(all('[data-motion="difference-item"]', difference), { opacity: 0, y: 18, duration: 0.55, stagger: 0.07 }, "-=0.34")
            .from(
              one('[data-motion="difference-journey"]', difference),
              { opacity: 0, x: isDesktop ? 28 : 0, y: isDesktop ? 0 : 24, scale: 0.98, duration: 0.78 },
              "-=0.42",
            )
            .from(all('[data-motion="difference-icon"]', difference), { opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.075 }, "-=0.42");
        }

        const journey = section("journey");
        if (journey) {
          gsap.from(all('[data-motion="journey-heading"]', journey), {
            opacity: 0,
            y: 25,
            duration: 0.72,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: journey, start: "top 72%", once: true },
          });

          const lines = all('[data-motion="journey-line"]', journey);
          if (isDesktop && lines.length > 0) {
            gsap.set(lines, { transformOrigin: "top center" });
            lines.forEach((line) => {
              gsap.fromTo(
                line,
                { scaleY: 0 },
                {
                  scaleY: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: line,
                    start: "top 82%",
                    end: "bottom 58%",
                    scrub: 0.45,
                  },
                },
              );
            });
          }

          const journeyIcons = isDesktop ? all('[data-motion="journey-icon"]', journey) : [];
          all('[data-motion="journey-step"]', journey).forEach((card, index) => {
            const cardTimeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: { trigger: card, start: "top 82%", once: true },
            });
            const direction = card.dataset.journeySide === "right" ? 34 : -34;
            const icon = journeyIcons[index];

            if (icon) {
              cardTimeline.from(icon, { opacity: 0, scale: 0.78, duration: 0.5 });
            }
            cardTimeline.from(
              card,
              { opacity: 0, x: isDesktop ? direction : 0, y: isDesktop ? 0 : 30, duration: 0.74 },
              icon ? "-=0.3" : 0,
            );

            const chips = all('[data-motion="journey-chip"]', card);
            const volunteerCard = one('[data-motion="journey-volunteer-card"]', card);
            const avatars = all('[data-motion="journey-avatar"]', card);
            const recordPuzzle = one('[data-motion="journey-record-puzzle"]', card);
            const recordCard = one('[data-motion="journey-record-card"]', card);

            if (chips.length > 0) {
              cardTimeline.from(chips, { opacity: 0, scale: 0.85, duration: 0.36, stagger: 0.035 }, "-=0.35");
            }
            if (volunteerCard) {
              cardTimeline.from(volunteerCard, { opacity: 0, y: 8, duration: 0.42 }, "-=0.32");
            }
            if (avatars.length > 0) {
              cardTimeline.from(avatars, { opacity: 0, scale: 0.75, duration: 0.36, stagger: 0.035 }, "-=0.34");
            }
            if (recordPuzzle) {
              cardTimeline.from(recordPuzzle, { opacity: 0, scale: 0.96, duration: 0.46 }, "-=0.34");
            }
            if (recordCard) {
              cardTimeline.from(recordCard, { opacity: 0, y: 8, duration: 0.42 }, "-=0.28");
            }
          });
        }

        const volunteerType = section("volunteer-type");
        if (volunteerType) {
          gsap.set(all('[data-motion="type-action"]', volunteerType), { clearProps: "opacity,transform,visibility" });

          const typeTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: volunteerType, start: "top 72%", once: true },
          });

          typeTimeline
            .from(all('[data-motion="type-copy"]', volunteerType), { opacity: 0, y: 25, duration: 0.68, stagger: 0.075 })
            .from(
              all('[data-motion="type-puzzle-piece"]', volunteerType),
              {
                opacity: 0,
                scale: 0.96,
                x: (_, target) => Number((target as HTMLElement).dataset.motionX ?? 0),
                y: (_, target) => Number((target as HTMLElement).dataset.motionY ?? 10),
                duration: 0.74,
                stagger: 0.075,
              },
              "-=0.42",
            )
            .from(all('[data-motion="type-puzzle-answer"]', volunteerType), { opacity: 0, scale: 0.7, duration: 0.48, stagger: 0.06 }, "-=0.28");
        }

        const explore = section("explore");
        if (explore) {
          const exploreTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: explore, start: "top 72%", once: true },
          });

          exploreTimeline
            .from(all('[data-motion="explore-heading"]', explore), { opacity: 0, y: 25, duration: 0.68, stagger: 0.075 })
            .from(all('[data-motion="explore-card"]', explore), { opacity: 0, y: 35, duration: 0.72, stagger: 0.1 }, "-=0.36")
            .from(one('[data-motion="explore-panel"]', explore), { opacity: 0, y: 27, scale: 0.96, duration: 0.88 }, "-=0.3")
            .from(all('[data-motion="explore-chip"]', explore), { opacity: 0, scale: 0.9, duration: 0.35, stagger: 0.03 }, "-=0.48")
            .from(all('[data-motion="explore-listing"]', explore), { opacity: 0, y: 11, duration: 0.5, stagger: 0.075 }, "-=0.34");
        }

        const brand = section("brand");
        if (brand) {
          const brandTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: brand, start: "top 72%", once: true },
          });

          brandTimeline
            .from(all('[data-motion="brand-line"]', brand), { opacity: 0, y: 35, duration: 0.8, stagger: 0.12 })
            .from(one('[data-motion="brand-bar"]', brand), { scaleX: 0, transformOrigin: "center", duration: 0.62 }, "-=0.34")
            .from(one('[data-motion="brand-description"]', brand), { opacity: 0, y: 18, duration: 0.62 }, "-=0.3")
            .from(all('[data-motion="brand-chip"]', brand), { opacity: 0, scale: 0.85, duration: 0.42, stagger: 0.06 }, "-=0.28");
        }

        const bottomCta = section("bottom-cta");
        if (bottomCta) {
          gsap.set(all('[data-motion="bottom-cta-action"]', bottomCta), { clearProps: "opacity,transform,visibility" });

          const ctaTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: bottomCta, start: "top 78%", once: true },
          });

          ctaTimeline
            .from(one('[data-motion="bottom-cta-panel"]', bottomCta), { opacity: 0, y: 32, scale: 0.98, duration: 0.82 })
            .from(all('[data-motion="bottom-cta-icon"]', bottomCta), { opacity: 0, scale: 0.8, duration: 0.42, stagger: 0.05 }, "-=0.46")
            .from(all('[data-motion="bottom-cta-copy"]', bottomCta), { opacity: 0, y: 15, duration: 0.58, stagger: 0.07 }, "-=0.32");
        }

        return () => hoverCleanups.forEach((cleanup) => cleanup());
      },
    );

    let active = true;
    const refresh = () => {
      if (active) {
        ScrollTrigger.refresh();
      }
    };
    const refreshFrame = window.requestAnimationFrame(refresh);

    if (document.readyState !== "complete") {
      window.addEventListener("load", refresh, { once: true });
    }
    void document.fonts.ready.then(refresh);

    return () => {
      active = false;
      window.cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  return null;
}
