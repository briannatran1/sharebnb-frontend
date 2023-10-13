import { Link } from "react-router-dom";
import './ListingCard.css';

/** Shows Company Info.
 *
 * State
 * - company: {name, description, handle, logoUrl, numEmployees}
 *
 * App -> CompanyList -> {CompanyCard, SearchBar}
 */
function ListingCard({ listing }) {
  const { name, photos, price, details, id } = listing;
  return (
    <div className="CompanyCard card w-75 mb-4 mt-4 mx-auto">
      <Link className="Listing card text-decoration-none" to={`/listings/${id}`}>
        <h3 className="card-body">{name}</h3>
        <small>{details}</small><br />
        <small>${price}</small>
        {photos && <img src={photos[0]?.url} width={150}></img>}
      </Link>
    </div>
  );
}

export default ListingCard;