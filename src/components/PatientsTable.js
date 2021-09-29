import { Col, Row, Table, Button } from "react-bootstrap"
import { useHistory, useLocation } from "react-router";

export const PatientsTable = ({ patientsData }) => {

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {

        if (location.pathname === "/") {
            history.push("/pacientes")
        } else {
            history.push("/");
        }
    }


    return (

        <div>
            <Row>
                <Col>
                    <h2>Pacientes</h2>
                </Col>
                <Col>
                    <Button onClick={handleClick}> {location.pathname === "/" ? "Administrar pacientes" : "Volver a la home"} </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Fecha Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                {patientsData.length ? patientsData.map((patient, index) => (
                    <tr key={index}>
                        <td>{patient.nombre}</td>
                        <td>{patient.apellido}</td>
                        <td>{patient.dni}</td>
                        <td>{patient.fechaIngreso}</td>
                    </tr>
                )) : <tr><td colSpan="5">Aún no hay pacientes cargados, agrega un paciente para verlo en la tabla.</td></tr>}
                </tbody>
            </Table>
        </div>
    )
}
