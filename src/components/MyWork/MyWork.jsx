import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from "./MyWork.module.css";

const works = [
  {
    company: {
      id: 'eversvoz',
      name: 'EversVoz',
      summary: 'This is a language learning app focused on helping Spanish speakers improve their English pronunciation. I contribute to enhancing its AI-driven feedback system, phonetic transcription features, and user interface to provide a more effective and user-friendly experience.',
      stack: 'Technologies: React Native, Flask, Supabase, OpenAI, Adapty',
      website: null,
      appIOS:'https://apps.apple.com/us/app/eversvoz/id6740795207',
      appAndroid: null,
      github: 'https://github.com/urielcookies/EversVoz',
      thumbnail: "/images/mywork/EversVoz/eversvoz_pics1.png",
      images: [
        "/images/mywork/EversVoz/eversvoz_pics1.png",
        "/images/mywork/EversVoz/eversvoz_pics2.png",
        "/images/mywork/EversVoz/eversvoz_pics3.png",
      ],
    },
  },
  {
    company: {
      id: 'mydocsaid',
      name: 'MyDocSaid',
      summary: 'This is a healthcare communication app that helps patients understand and follow their doctor’s instructions. I work on improving usability, organizing medical notes, and enhancing secure messaging between patients and providers.',
      stack: 'Technologies: React Native, Django REST, MongoDB, Adapty',
      website:'https://www.recordedhealth.com/',
      appIOS:'https://play.google.com/store/apps/details?id=com.my123&hl=en-CA',
      appAndroid:'https://play.google.com/store/apps/details?id=com.recordedhealth&hl=en-US',
      github: null,
      thumbnail: "/images/mywork/MDS/mds_pics1.png",
      images: [
        "/images/mywork/MDS/mds_pics1.png",
        "/images/mywork/MDS/mds_pics2.png",
        "/images/mywork/MDS/mds_pics3.png",
      ],
    },
  },
  {
    company: {
      id: '123dentist',
      name: '123 Dentist',
      summary: 'This is a dental services app for 123Dentist, a large Canadian dental network. I work on improving features such as appointment booking, clinic search, and user engagement through gamification.',
      stack: 'Technologies: Vue, Django, PostgreSQL, React Native for the mobile version',
      website:'https://app.123dentist.com/',
      appIOS:'https://apps.apple.com/us/app/my123-app/id6499281979',
      appAndroid:'https://play.google.com/store/apps/details?id=com.my123&hl=en-CA',
      github: null,
      thumbnail: "/images/mywork/PA/job3_pics1.png",
      images: [
        "/images/mywork/PA/job3_pics1.png",
        "/images/mywork/PA/job3_pics2.jpg",
        "/images/mywork/PA/job3_pics3.png",
      ],
    },
  },
    {
    company: {
      id: 'halolink',
      name: 'Halo Link',
      summary: 'This is a collaborative digital pathology platform developed by Indica Labs. I worked on enhancing features like remote slide viewing, AI-powered image analysis integration, and secure data sharing to support research workflows.',
      stack: 'Technologies: React, C# .NET Core, Apollo GraphQL, MySQL',
      website:'https://indicalab.com/',
      appIOS: null,
      appAndroid: null,
      github: null,
      thumbnail: "/images/mywork/IL/job2_pics1.jpg",
      images: [
        "/images/mywork/IL/job2_pics1.jpg",
        "/images/mywork/IL/job2_pics2.jpg",
        "/images/mywork/IL/job2_pics3.jpg",
      ],
    },
  },
  {
    company: {
      id: 'cellularoutfitter',
      name: 'Cellular Outfitter',
      summary: 'This is an e-commerce platform specializing in affordable mobile accessories like phone cases, chargers, and Bluetooth devices. I focused on enhancing product listings, streamlining the checkout process, and optimizing the user interface to improve customer experience.',
      stack: 'Technologies: Shopify, Liquid Templates, JavaScript, jQuery, PostgreSQL',
      website:'https://app.cashet.com/',
      appIOS: null,
      appAndroid: null,
      github: null,
      thumbnail: "/images/mywork/CO/cellularoutfitter_pics1.png",
      images: [
        "/images/mywork/CO/cellularoutfitter_pics1.png",
        "/images/mywork/CO/cellularoutfitter_pics2.png",
        "/images/mywork/CO/cellularoutfitter_pics3.png",
      ],
    },
  },
  {
    company: {
      id: 'cashet',
      name: 'Cashet',
      summary: 'This is a financial management app tailored for film and TV production teams. I worked on enhancing features like real-time transaction tracking, receipt uploads, and card controls to streamline expense management and improve user experience.',
      stack: 'Technologies: jQuery, PHP, PostgreSQL',
      website:'https://cellularoutfitter.com/',
      appIOS: null,
      appAndroid: null,
      github: null,
      thumbnail: "/images/mywork/C/job1_pics1.png",
      images: [
        "/images/mywork/C/job1_pics1.png",
        "/images/mywork/C/job1_pics2.png",
        "/images/mywork/C/job1_pics3.jpg",
      ],
    },
  },
];

const MyWork = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const isCarouselOpenRef = useRef(isCarouselOpen);

  const gridRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    isCarouselOpenRef.current = isCarouselOpen;
  }, [isCarouselOpen]);

  useEffect(() => {
  const workSectionElement = sectionRef.current;

  if (!workSectionElement) {
    return;
  }

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      // If Work section is less than 20% visible and carousel is open, close it.
      if (entry.intersectionRatio < 0.2 && isCarouselOpenRef.current) {
        setIsCarouselOpen(false);
      }
      },
      {
        // Trigger callback when visibility crosses these points
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    scrollObserver.observe(workSectionElement);

    return () => {
      scrollObserver.unobserve(workSectionElement);
    };
  }, []);

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
      emblaApi.scrollTo(0); // Always start at the first image
    }
  }, [emblaApi, isCarouselOpen]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedImageIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const handleCardClick = (index) => {
    setSelectedWorkIndex(index);
    setSelectedImageIndex(0);
    setIsCarouselOpen(true);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToIndex = (index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  const company = works[selectedWorkIndex].company;

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`${styles.work} ${styles["fade-in"]} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles["section-title"]}>Work</h2>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isCarouselOpen ? 'carouselView' : 'gridView'} // This key change triggers the transition
            nodeRef={isCarouselOpen ? carouselRef : gridRef}
            timeout={250}
            addEndListener={(node, done) => {
              if (node && typeof node.addEventListener === 'function') {
                const eventListener = () => {
                  node.removeEventListener("transitionend", eventListener);
                  done();
                };
                node.addEventListener("transitionend", eventListener, false);
              } else {
                // Fallback if node is not valid, rely on the timeout prop
                setTimeout(done, 250); // Match your timeout duration
              }
            }}
            classNames={{
              enter: styles.viewEnter,
              enterActive: styles.viewEnterActive,
              exit: styles.viewExit,
              exitActive: styles.viewExitActive,
            }}>
            {!isCarouselOpen ? (
              <div ref={gridRef} className={styles["work-grid"]}>
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
              <div ref={carouselRef} className={styles.carouselWrapper}>
                <button className={styles.closeButton} onClick={() => setIsCarouselOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div className={styles.embla} ref={emblaRef}>
                  <div className={styles.emblaContainer}>
                    {company.images.map((img, i) => (
                      <div className={styles.emblaSlide} key={i}>
                        <img src={img} alt={`Carousel project ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.dotsContainer}>
                  {company.images.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === selectedImageIndex ? styles.dotActive : ""}`}
                      onClick={() => scrollToIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className={styles.summary}>
                  <h3>{company.name}</h3>
                  <p>{company.summary}</p>
                  <p><small>{company.stack}</small></p>

                  <div className={styles.buttonGroup}>
                    {company.website && (
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.summaryButton}>
                        Visit Website
                      </a>
                    )}
                    {company.github && (
                      <a href={company.github} target="_blank" rel="noopener noreferrer" className={styles.summaryButton}>
                        GitHub
                      </a>
                    )}
                    {company.appIOS && (
                      <a href={company.appIOS} target="_blank" rel="noopener noreferrer" className={styles.summaryButton}>
                        iOS App
                      </a>
                    )}
                    {company.appAndroid && (
                      <a href={company.appAndroid} target="_blank" rel="noopener noreferrer" className={styles.summaryButton}>
                        Android App
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </section>
  );
};

export default MyWork;
