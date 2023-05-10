
import CurrencyFormatter from '../helpers/CurrencyFormatter'
const HouseRow = ({house}) => {
    return (
        <>
        <tr>
        <td>{house.town}</td>
        <td>{house.city}</td>
        <td>{house.country}</td>
        <td>{CurrencyFormatter.format(house.price)}</td>
        </tr>
        </>
    )
}

export default HouseRow;