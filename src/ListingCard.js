import { Link } from "react-router-dom";

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
    <Link className="Listing card" to={`/listings/${id}`}>
      <h3 className="card-body">{name}</h3>
      <small>{details}</small><br />
      <small>${price}</small>
      {photos && <img src={photos[0].url} className="img-thumbnail"></img>}
    </Link>
  );
}

export default ListingCard;