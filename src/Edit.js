import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const [prenom, setPrenom] = useState(null);
  const [nom, setNom] = useState(null);
  const [email, setEmail] = useState(null);
  const { id } = useParams();

  const getAdherent = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/getAdherent/${id}`);
      console.log(result.data.result);
      setPrenom(result.data.result.prenom);
      setNom(result.data.result.nom);
      setEmail(result.data.result.email);
    } catch (error) {
      alert("Erreur pendant la récupération des informations");
      console.log(error);
    }
  };

  useEffect(() => {
    getAdherent();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.put(
        `http://localhost:3001/editAdherent/${id}`,
        {
          prenom,
          nom,
          email,
        }
      );
      console.log(result);
      alert("Adhérent modifié avec succès");
    } catch (error) {
      alert("Erreur pendant la modification de l'adhérent");
      console.log(error);
    }
  };

  return (
    <div
      className="border border-primary rounded"
      style={{ width: 500, padding: 20 }}
    >
      <h2>Modifier l'adhérent</h2>
      {prenom ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group style={{ marginBottom: 10 }}>
            <Form.Label>
              <b>Prénom</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le prénom"
              onChange={(event) => setPrenom(event.target.value)}
              value={prenom}
            ></Form.Control>
          </Form.Group>
          <Form.Group style={{ marginBottom: 10 }}>
            <Form.Label>
              <b>Nom</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom"
              onChange={(event) => setNom(event.target.value)}
              value={nom}
            ></Form.Control>
          </Form.Group>
          <Form.Group style={{ marginBottom: 10 }}>
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez l'email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            ></Form.Control>
          </Form.Group>
          <Button variant="success" style={{ marginRight: 50 }} type="submit">
            <i className="bi bi-check-circle"></i> Envoyer
          </Button>
          <Link to="/">
            <Button>
              <i className="bi bi-backspace"></i> Retour
            </Button>
          </Link>
        </Form>
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

export default Edit;
