import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [adherent, setAdherent] = useState(null);

  const getAdherent = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/getAdherent/${id}`);
      console.log(result);
      setAdherent(result.data.result);
    } catch (error) {
      alert("Erreur pendant la récupération des informations");
      console.log(error);
    }
  };

  useEffect(() => {
    getAdherent();
  }, []);

  return (
    <div
      className="border border-primary rounded"
      style={{ width: 500, padding: 20 }}
    >
      <h2>Détails de l'adhérent</h2>
      {adherent ? (
        <>
          <Table>
            <tbody>
              <tr>
                <th>Prénom</th>
                <td>{adherent.prenom}</td>
              </tr>
              <tr>
                <th>Nom</th>
                <td>{adherent.nom}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{adherent.email}</td>
              </tr>
            </tbody>
          </Table>
          <Link to={`/edit/${adherent._id}`}>
            <Button variant="success" style={{ marginRight: 50 }}>
              <i className="bi bi-pencil-square"></i> Modifier
            </Button>
          </Link>
          <Link to="/">
            <Button>
              <i className="bi bi-backspace"></i> Retour
            </Button>
          </Link>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 300,
            justifyContent: "center",
          }}
        >
          <Spinner variant="primary" />
        </div>
      )}
    </div>
  );
};

export default Details;
