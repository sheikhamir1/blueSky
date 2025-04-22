import "./WeatherSkeleton.css";

const WeatherSkeleton = () => {
  return (
    <div className="weather-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-location">
          <div className="shimmer skeleton-title"></div>
          <div className="shimmer skeleton-subtitle"></div>
          <div className="shimmer skeleton-text"></div>
        </div>
        <div className="skeleton-temp">
          <div className="shimmer skeleton-icon"></div>
          <div className="shimmer skeleton-temp-value"></div>
        </div>
      </div>

      <div className="skeleton-details">
        {[...Array(6)].map((_, index) => (
          <div className="skeleton-detail-item" key={index}>
            <div className="shimmer skeleton-detail-icon"></div>
            <div className="skeleton-detail-info">
              <div className="shimmer skeleton-detail-label"></div>
              <div className="shimmer skeleton-detail-value"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSkeleton;
