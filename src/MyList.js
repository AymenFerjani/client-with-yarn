import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyList = () => {
  const [users, setUsers] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/getAdherents");
      console.log(res);
      setUsers(res.data.result);
    } catch (error) {
      alert("Erreur pendant la récupération de la liste des adhérents");
      console.log(error);
    }
  };

  useEffect(() => {
    //setTimeout(getData, 2000);
    getData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous supprimer cet adhérent ?")) {
      try {
        const result = await axios.delete(
          `http://localhost:3001/deleteAdherent/${id}`
        );
        console.log(result);
        if (result.status === 200) {
          alert("Suppression effectuée avec succès");
          setUsers(null);
          getData();
        }
      } catch (error) {
        alert("Erreur pendant la suppression de l'adhérent");
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Link to="/add">
        <Button style={{ marginBottom: 5 }}>
          <i className="bi bi-file-earmark-plus"></i> Ajouter
        </Button>
      </Link>
      <Table striped bordered style={{ width: 700 }}>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.prenom}</td>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td style={{ display: "flex", gap: 5 }}>
                  <Link to={`/edit/${user._id}`}>
                    <Button variant="outline-success" size="sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    <i className="bi bi-file-earmark-x"></i>
                  </Button>
                  <Link to={`/details/${user._id}`}>
                    <Button variant="outline-secondary" size="sm">
                      <i className="bi bi-info-circle"></i>
                    </Button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} align="center">
                <Spinner animation="border" variant="primary" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MyList;
