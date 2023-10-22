import { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { loadCreateSchedule, loadProduct } from './../../store/products';
import "./styles.scss";

const Header = ({ product }) => {

  const [paginator, setPaginator] = useState(0);
  const dispatch = useDispatch();

  const form = useRef(null)

  const handleSubmit = (event) => {

    event.preventDefault();
    const formData = new FormData(form.current);

    let schedule = {
      name: formData.get('name'),
      description: formData.get('description'),
      duration_minutes: parseInt(formData.get('minutes')),
      color_hex_code: formData.get('color_hex_code')
    }

    if(schedule.name == "" || schedule.description == "" || schedule.duration_minutes == "" || schedule.color_hex_code == "") {
      alert("Todos los campos son obligatorios");
    }else {
      dispatch(
        loadCreateSchedule(schedule)
      )
      form.current.reset();
    }

  };

  const goToAlfter = () => {
    dispatch(
      loadProduct({
        "pagina": paginator + 1,
        "tamanio": 5
      })
    )
    setPaginator(paginator + 1)
  };

  const goToBefore = () => {
    if ((paginator - 1) >= 0) {
      dispatch(
        loadProduct({
          "pagina": paginator - 1,
          "tamanio": 5
        })
      )
      setPaginator(paginator - 1)
    }

  };

  return (
    <div>
      <div className="header-container">


        <div>
          <p>Schedule</p>
        </div>
      </div>

      <div className="header-form">

        <form ref={form}>

          <div className="padding-div">
            Nombre:
            <input
              type="text"
              name="name"
              placeholder="Ej: dawn"
              data-testid="header-input"
              className="header-input"
            />
          </div>

          <div className="padding-div">
            Descripción:
            <input
              type="text"
              name="description"
              className="header-input"
              placeholder="Ej: This is example"
              data-testid="header-input"
            />
          </div>

          <div className="padding-div">
            Duración en minutos:
            <input
              type="number"
              name="minutes"
              className="header-input"
              placeholder="Ej: 58"
              data-testid="header-input"
            />
          </div>

          <div className="padding-div">
            Color en hexadecimal:
            <input
              type="text"
              name="color_hex_code"
              className="header-input"
              placeholder="Ej: dawn snow"
              data-testid="header-input"
            />
          </div>



          <div className="">
            <button
              data-testid="search-button_2"
              className="search-button"
              type="submit"
              onClick={handleSubmit}
            >
              Crear
            </button>
          </div>

        </form>


        <div class="btn-paginator">
          <div>
            <button
              data-testid="search-button_2"
              className="search-button"
              type="submit"
              onClick={goToAlfter}
            >
              Pagina siguiente
            </button>
          </div>
          <div>
            <button
              data-testid="search-button_2"
              className="search-button"
              type="submit"
              onClick={goToBefore}
            >
              Pagina anterior
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Header;
