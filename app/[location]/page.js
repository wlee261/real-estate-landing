import Image from "next/image";
import saratogaImg from "../../assets/saratoga.jpg";

export default function Page({ params }) {
  return (
    <div>
      <div className="location--background-image-container">
        <Image
          src={saratogaImg}
          fill={true}
          className="location--background-image"
        />
        <span className="location--location-name">SARATOGA</span>
        <span className="location--location-description">
          Vibrant Silicon Valley community nestled in scenic foothills.
        </span>
      </div>
      <p>Location: {params.location}</p>
    </div>
  );
}
