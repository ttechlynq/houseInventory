import CurrencyFormatter from "../components/CurrencyFormatter";



const House = ({ house }) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid"
                    src={house.photo ? `./gallery/${house.photo}.png` : defaultPhoto
                        }
                        alt="House image"
                        />
                    </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{house.town}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{house.city}</h3>
                </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">
                    {currencyFormatter.format(house.price)}
                    </h2>
                </div>
                <div className="row">
                <div className="col-12 mt-3">{house.country}</div>
                </div>
            </div>
        </div>
    );
};