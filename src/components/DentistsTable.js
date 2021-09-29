import { Table, Button, Row, Col } from "react-bootstrap"
import { useHistory, useLocation } from "react-router"

export const DentistsTable = ({ dentistsData }) => {

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {

        if (location.pathname === "/") {
            history.push("/odontologos")
        } else {
            history.push("/");
        }
    }


    return (

        <div>
            <Row>
                <Col>
                    <h2>Odontologos</h2>
                </Col>
                <Col>
                    <Button onClick={handleClick}> {location.pathname === "/" ? "Administrar odontologos" : "Volver a la home"} </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Matricula</th>
                    </tr>
                </thead>
                <tbody>
                    {dentistsData.length ? dentistsData.map((dentist, index) => (
                        <tr key={index}>
                            <td>{dentist.nombre}</td>
                            <td>{dentist.apellido}</td>
                            <td>{dentist.matricula}</td>
                        </tr>
                    )) : <tr><td colSpan="5">Aún no hay odontologos cargados, agrega un odontologo para verlo en la tabla.</td></tr>}
                </tbody>
            </Table>
        </div>
    )
}

