import Api from "./api";

const appointmentsService = {};

appointmentsService.getAppointments = () => {
    return Api.get("/turnos/")
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.postAppointments = (data) => {
    console.log(data)
    return Api.post("/turnos/registrar", data)
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.getAppointmentsById = (id) => {
    return Api.get(`/turnos/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.updateAppointmentsById = (id) => {
    return Api.put(`/turnos/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.deleteAppointmentsById = (id) => {
    return Api.delete(`/turnos/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

export default appointmentsService;