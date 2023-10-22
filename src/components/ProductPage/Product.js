import "./styles.scss";
import { useDispatch } from 'react-redux';
import { loadDeleteSchedule } from './../../store/products';

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const goToDelete = (id) => {
    var data = {
      data: product.filter(p => p.id != id),
      schedule: id
    }
    dispatch(
      loadDeleteSchedule(data)
    )
  };

  return (
    <div className="product-container">

      {
        product && product.map((item, index) => (
          <div className="product-content" key={index}>

            <div className="product-section product-responsive">

              <div>
                <b>Nombre:</b> {item.name.substr(0, 21)}
              </div>

              <div>
                <b>Duración en minutos:</b> {item.duration_minutes}
              </div>

              <div>
                <b>Descripción:</b> {item.description.substr(0, 35)}
              </div>

              <div>
                <b>Color:</b> {item.color_hex_code.substr(0, 9)}
              </div>

              <div>
                <button
                  data-testid="search-button_2"
                  className="search-button color"
                  type="submit"
                  onClick={() => goToDelete(item.id)}
                >
                  Eliminar
                </button>
              </div>

            </div>
          </div>
        ))
      }

    </div>
  );

};

export default Product