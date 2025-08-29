import { useParams } from "react-router-dom";
import { warPlanes } from "../data/planes";

const PlaneInfo = () => {
  const { id } = useParams();

  if (!id) {
    return <div>No plane ID provided.</div>;
  }

  const plane = warPlanes.find((plane) => plane.id === parseInt(id));

  if (!plane) {
    return <div>Plane not found.</div>;
  }

  return <div className="plane-info">
    <img src={plane.image} className="plane-image" alt={plane.name} />
    <div className="plane-details">
      <h2>{plane.name}</h2>
      <div>Manufacturer: {plane.manufacturer}</div>
      <div>Origin: {plane.origin}</div>
      <div>Role: {plane.role}</div>
      <div>First Flight: {plane.firstFlight}</div>
      <div>Top Speed: {plane.topSpeedKmh} km/h</div>
      <div>Range: {plane.rangeKm} km</div>
    </div>
  </div >;
}

export default PlaneInfo;
