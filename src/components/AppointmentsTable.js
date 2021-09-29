import { Col, Row, Table, Button } from "react-bootstrap"
import { useHistory, useLocation } from "react-router";

export const AppointmentsTable = ({ appointmentsData }) => {

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {

        if (location.pathname === "/") {
            history.push("/turnos")
        } else {
            history.push("/");
        }
    }

    return (
        <div>
            <Row>
                <Col>
                    <h2>Turnos</h2>
                </Col>
                <Col>
                    <Button onClick={handleClick}> {location.pathname === "/" ? "Administrar turnos" : "Volver a la home"} </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Odontologo</th>
                        <th>Paciente</th>
                    </tr>
                </thead>
                <tbody>
                {appointmentsData.length ? appointmentsData.map((appointment, index) => (
                    <tr key={index}>
                        <td>{appointment.fecha}</td>
                        <td>{appointment.odontologo?.nombre}</td>
                        <td>{appointment.paciente?.nombre}</td>
                    </tr>
                )) : <tr><td colSpan="5">Aún no hay turnos cargados, agrega un turno para verlo en la tabla.</td></tr>}
                </tbody>
            </Table>
        </div>
    )
}