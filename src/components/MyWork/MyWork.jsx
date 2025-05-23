import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./MyWork.module.css";

const works = [
  {
    company: {
      id: 'cellularoutfitter',
      name: 'Cellular Outfitter (Shopify)',
      summary: 'This is an e commerce store. I am constantly editing the site and making improvements on it',
      stack: 'Technologies: Shopify, JavaScript, HTML5, CSS3',
      website:'https://cellularoutfitter.com/',
      github: 'https://github.com/Xevnik/fridge2plate',
      thumbnail: "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
      images: [
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics2.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics3.png",
      ],
    },
  },
  {
    company: {
      id: 'cellularoutfitter',
      name: 'Cellular Outfitter (Shopify)',
      summary: 'This is an e commerce store. I am constantly editing the site and making improvements on it',
      stack: 'Technologies: Shopify, JavaScript, HTML5, CSS3',
      website:'https://cellularoutfitter.com/',
      github: 'https://github.com/Xevnik/fridge2plate',
      thumbnail: "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
      images: [
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics2.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics3.png",
      ],
    },
  },
  {
    company: {
      id: 'cellularoutfitter',
      name: 'Cellular Outfitter (Shopify)',
      summary: 'This is an e commerce store. I am constantly editing the site and making improvements on it',
      stack: 'Technologies: Shopify, JavaScript, HTML5, CSS3',
      website:'https://cellularoutfitter.com/',
      github: 'https://github.com/Xevnik/fridge2plate',
      thumbnail: "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
      images: [
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics2.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics3.png",
      ],
    },
  },
  {
    company: {
      id: 'cellularoutfitter',
      name: 'Cellular Outfitter (Shopify)',
      summary: 'This is an e commerce store. I am constantly editing the site and making improvements on it',
      stack: 'Technologies: Shopify, JavaScript, HTML5, CSS3',
      website:'https://cellularoutfitter.com/',
      github: 'https://github.com/Xevnik/fridge2plate',
      thumbnail: "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
      images: [
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics2.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics3.png",
      ],
    },
  },
  {
    company: {
      id: 'cellularoutfitter',
      name: 'Cellular Outfitter (Shopify)',
      summary: 'This is an e commerce store. I am constantly editing the site and making improvements on it',
      stack: 'Technologies: Shopify, JavaScript, HTML5, CSS3',
      website:'https://cellularoutfitter.com/',
      github: 'https://github.com/Xevnik/fridge2plate',
      thumbnail: "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
      images: [
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics2.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics3.png",
      ],
    },
  },
  {
    company: {
      id: 'cellularoutfitter',
      name: 'Cellular Outfitter (Shopify)',
      summary: 'This is an e commerce store. I am constantly editing the site and making improvements on it',
      stack: 'Technologies: Shopify, JavaScript, HTML5, CSS3',
      website:'https://cellularoutfitter.com/',
      github: 'https://github.com/Xevnik/fridge2plate',
      thumbnail: "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
      images: [
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics1.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics2.png",
        "/images/mywork/cellularoutfitter/cellularoutfitter_pics3.png",
      ],
    },
  },
];

const MyWork = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  // IntersectionObserver to trigger fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (emblaApi && isCarouselOpen) {
      emblaApi.scrollTo(selectedIndex);
    }
  }, [emblaApi, isCarouselOpen, selectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setIsCarouselOpen(true);
  };

  const scrollToIndex = (index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`${styles.work} ${styles["fade-in"]} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        <h2 className={styles['section-title']}>Work</h2>

        {!isCarouselOpen ? (
          <div className={styles["work-grid"]}>
            {works.map(({ company }, i) => (
              <div
                key={company.id + i}
                className={styles["work-card"]}
                onClick={() => handleCardClick(i)}
              >
                <img src={company.thumbnail} alt={`Work project ${company.name}`} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.carouselWrapper}>
            <button className={styles.closeButton} onClick={() => setIsCarouselOpen(false)}>
              ×
            </button>

            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {works[selectedIndex].company.images.map((img, i) => (
                  <div className={styles.emblaSlide} key={i}>
                    <img src={img} alt={`Carousel project ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className={styles.dotsContainer}>
              {works[selectedIndex].company.images.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ""}`}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Summary and stack */}
            <div className={styles.summary}>
              <h3>{works[selectedIndex].company.name}</h3>
              <p>{works[selectedIndex].company.summary}</p>
              <p><small>{works[selectedIndex].company.stack}</small></p>

              <div className={styles.buttonGroup}>
                <a href={works[selectedIndex].company.website} target="_blank" rel="noopener noreferrer" className={styles.summaryButton}>
                  Visit Website
                </a>
                <a href={works[selectedIndex].company.github} target="_blank" rel="noopener noreferrer" className={styles.summaryButton}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWork;
