import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  image: string;
  route?: string;
  children?: React.ReactNode;
}

const Card = ({ title, image, route, children }: CardProps) => {
  const card = <>
    <img className="card-image" src={image} alt={title} />
    <span className="card-title">{title}</span>
    {!!children && <div className="card-content">{children}</div>}
  </>;

  if (route) {
    return <Link className="card" to={route}>{card}</Link>;
  }

  return <div className="card">{card}</div>;
}

export default Card;
