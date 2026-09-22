import React, { useState, useEffect, useRef } from "react";

const Achievements = () => {
  const [flippedAchievement, setFlippedAchievement] = useState(null);
  const [isSliding, setIsSliding] = useState(true);
  const sliderRef = useRef(null);

  const achievementsData = [
    { image: "pr1.jpg", description: "2nd Prize - SIMATS Web Design" },
    { image: "pp4.jpg", description: "1st Prize - Sairam Institute" },
    { image: "pr4.jpg", description: "On Stage - St. Joseph's" },
    { image: "pr7.jpg", description: "Best Design 2nd Prize - National level Hackathon" },
    { image: "pp3.jpg", description: "Winner in Kabaddi" },
    { image: "pr9.jpg", description: "Participated in Inter college Symposium - Project presentation" }
  ];

  const duplicatedAchievements = [...achievementsData, ...achievementsData];

  const handleAchievementClick = (index, e) => {
    e.stopPropagation();
    setFlippedAchievement(flippedAchievement === index ? null : index);
    setIsSliding(false);
  };

  const handleSectionClick = () => {
    if (!isSliding) {
      setIsSliding(true);
      setFlippedAchievement(null);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animation;

    if (isSliding) {
      slider.style.transform = "translateX(0)";

      const slide = () => {
        const currentTransform = slider.style.transform || "translateX(0)";
        const currentX = parseInt(currentTransform.match(/translateX\\(([-\\d]+)px\\)/)?.[1] || 0);
        const newX = currentX - 1;
        slider.style.transform = `translateX(${newX}px)`;

        if (-newX >= slider.scrollWidth / 2) {
          slider.style.transform = "translateX(0)";
        }

        animation = requestAnimationFrame(slide);
      };

      animation = requestAnimationFrame(slide);
    } else if (animation) {
      cancelAnimationFrame(animation);
    }

    return () => {
      if (animation) cancelAnimationFrame(animation);
    };
  }, [isSliding]);

  return (
    <section id="achievements" className="achievements" onClick={handleSectionClick}>
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-slider-container">
          <div
            ref={sliderRef}
            className="achievements-slider"
            style={{ animationPlayState: isSliding ? "running" : "paused" }}
          >
            {duplicatedAchievements.map((achievement, index) => (
              <div
                key={index}
                className={`flip-card ${flippedAchievement === index ? "flipped" : ""}`}
                onClick={(e) => handleAchievementClick(index, e)}
              >
                <div className="flip-card-inner">
                  {/* Front: image */}
                  <div className="flip-card-front">
                    <img src={achievement.image} alt={`Achievement ${index + 1}`} />
                  </div>
                  {/* Back: description */}
                  <div className="flip-card-back">
                    <p>{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
