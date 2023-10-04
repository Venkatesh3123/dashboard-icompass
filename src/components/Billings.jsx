import "../components/billing.css";

export default function Billings() {
  return (
    <>
      <div className="div2">
        <h2 style={{ textAlign: "center" }}>ITEM BILL</h2>
        <div style={{ display: "flex" }}>
          {" "}
          <div>
            {" "}
            <h4>Name:</h4>
          </div>
          <div>
            <p className="p1">Jockey</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <h4>Email: </h4>
          </div>
          <div>
            <p className="p1">Jockey@gmail.com</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <h4>Phone: </h4>
          </div>{" "}
          <div>
            <p className="p1">672387328</p>
          </div>{" "}
        </div>

        <table style={{ borderCollapse: "collapse" }}>
          <tr>
            <th>S.No</th>
            <th>Service/Medication</th>
            <th>Description</th>
            <th>Fee</th>
            <th>Qunatity</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td> 1</td>
            <td>Service 1</td>
            <td>Service 1</td>
            <td>10</td>
            <td>1</td>
            <td>$10</td>
          </tr>
          <tr>
            <td> 2</td>
            <td>Service 2</td>
            <td>Service 2</td>
            <td>100</td>
            <td>1</td>
            <td>$100</td>
          </tr>
          <tr>
            <td> 3</td>
            <td>Medication1</td>
            <td>Medication 1</td>
            <td>10</td>
            <td>5</td>
            <td>$50</td>
          </tr>
        </table>
      </div>
    </>
  );
}
