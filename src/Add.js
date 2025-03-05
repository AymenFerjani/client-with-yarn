import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Add = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/createAdherent", {
        prenom,
        nom,
        email,
      });
      console.log(result);
      alert("Adhérent ajouté avec succès");
    } catch (error) {
      alert("Erreur pendant l'ajout d'un nouvel adhérent");
      console.log(error);
    }
  };

  return (
    <div
      className="border border-primary rounded"
      style={{ width: 500, padding: 20 }}
    >
      <h2>Ajouter un adhérent</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={{ marginBottom: 10 }}>
          <Form.Label>
            <b>Prénom</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez le prénom"
            onChange={(event) => setPrenom(event.target.value)}
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
    </div>
  );
};

export default Add;
