import { useEffect, useRef, useState } from "react";
import "./AnimatedSection.css";

function AnimatedSection({ children, className = "" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${
        isVisible ? "animated-section-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;