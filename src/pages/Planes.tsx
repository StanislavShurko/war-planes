import { useState } from "react";
import Card from "../components/Card";
import { warPlanes } from "../data/planes";

const Planes = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [originFilter, setOriginFilter] = useState<string>("");

  const originPossibilities = Array.from(new Set(warPlanes.map(plane => plane.origin))).map(origin => (
    <option key={origin} value={origin}>{origin}</option>
  ))

  const filteredPlanes = warPlanes.filter(plane => {
    return (
      plane.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (originFilter === "" || plane.origin === originFilter)
    );
  });

  return (
    <>
      <div className="filters">
        <input id="plane-search" type="text" placeholder="Search by name..." className="search" onChange={(e) => setSearchText(e.target.value)} />
        <select name="origin" id="plane-origin" onChange={(e) => setOriginFilter(e.target.value)}>
          <option value="">All Manufacturers</option>
          {originPossibilities}
        </select>
      </div>
      <div className="planes">
        {filteredPlanes.map(plane => (
          <Card key={plane.id} title={plane.name} image={plane.image} route={`/${plane.id}`}>
            <div className="plane-info-row">Manufacturer: {plane.manufacturer}</div>
            <div className="plane-info-row">Origin: {plane.origin}</div>
            <div className="plane-info-row">Role: {plane.role}</div>
            <div className="plane-info-row">First Flight: {plane.firstFlight}</div>
            <div className="plane-info-row">Top Speed: {plane.topSpeedKmh} km/h</div>
            <div className="plane-info-row">Range: {plane.rangeKm} km</div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Planes;
