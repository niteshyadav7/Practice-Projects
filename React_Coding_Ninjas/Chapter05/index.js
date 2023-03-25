const App = () => {
  const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
  ];
  const newSum = itemsSold.reduce(function (acc, curr) {
    return acc + curr.price;
  }, 0);
  return (
    <>
      <table border="1px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Selling Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemsSold.map((num, key) => (
            <>
              <tr>
                <td>{num.id}</td>
                <td>{num.name}</td>
                <td>{num.price}</td>
                <td>{num.qty}</td>
              </tr>
            </>
          ))}
          <tr>
            <td>Total Revenue</td>
            <td colspan="3">{newSum}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
