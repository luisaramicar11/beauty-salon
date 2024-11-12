import { IAppointment } from "./all-clients-response.dto";

export interface IClientResponse {
    id:            number;
    firstName:     string;
    lastName:      string;
    phone:         string;
    email:         string;
    appointments?: IAppointment[];
    role?:         string;
}
