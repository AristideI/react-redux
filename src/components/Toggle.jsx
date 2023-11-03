import { useState } from "react";

export default function DayNightToggle() {
  const [isNight, setIsNight] = useState(false);

  const handleToggle = () => {
    setIsNight(!isNight);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all ${
        isNight ? "bg-night" : "bg-day"
      }`}
    >
      <label
        htmlFor="toggle"
        className="cursor-pointer outline-none"
        id="toggle-label"
      >
        <div
          id="toggle-div"
          className={`h-72 w-96 bg-toggle ${isNight ? "night" : "day"}`}
        >
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            onChange={handleToggle}
          />
          <div className="clouds">{/* Clouds */}</div>
          <div className="backdrops">{/* Backdrops */}</div>
          <div className="stars">{/* Stars */}</div>
          <div className="sun-moon">
            <div className="crater"></div>
          </div>
        </div>
      </label>
    </div>
  );
}
