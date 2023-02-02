import React, { useState } from "react";

function Form() {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [invoice, setInvoice] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    if (producto === "" || cantidad===0) {
        return;
    }
    setInvoice([...invoice, { producto, precio, cantidad }]);
    setTotal(total + precio * cantidad);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={producto} onChange={e => setProducto(e.target.value)}>
          <option >Seleccione un producto</option>
          <option value="Manzanas">Manzanas</option>
          <option value="Peras">Peras</option>
          <option value="Carro de combate M1A2">Carro de combate M1A2</option>
        </select>
        <input
          type="number"
          placeholder="precio"
          value={precio}
          onChange={e => setPrecio(e.target.value)}
        />
        <input
          type="number"
          placeholder="cantidad"
          value={cantidad}
          onChange={e => setCantidad(e.target.value)}
        />
        <button type="submit">añadir a la lista</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {invoice.map((item, index) => (
            <tr key={index}>
              <td>{item.producto}</td>
              <td>{item.precio}</td>
              <td>{item.cantidad}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td>{total}€</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Form;
