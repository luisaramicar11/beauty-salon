import { PServices } from "@/app/core/application/ports/service.port";
import { IAllServicesRequest, IAllServicesResponse} from "../../core/application/dto/services/all-services-response.dto";
import { IServiceRequest } from "../../core/application/dto/services/service-request.dto";
import { IServiceResponse } from "../../core/application/dto/services/service-response.dto";
import { HttpClient } from "../utils/client-http";

export class ServicesService implements PServices{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async findAll({page, size}:IAllServicesRequest){
        try {
            const services = await this.httpClient.get<IAllServicesResponse>(`services?page=${page}&size=${size}`);
            return services;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener llos servicios");
        }
    }

    async create(service: IServiceRequest){
        try {
            const newService = await this.httpClient.post< IServiceResponse, IServiceRequest>(`services`, service)
            return newService;
        } catch (error) {
            console.log(error);
            throw new Error("Error al crear el servicio");
        }
    }

    async update(id: number, service: IServiceRequest){
        try {
            const updatedService = await this.httpClient.put<IServiceResponse, IServiceRequest>(`services/${id}`, service)
            return updatedService;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar el servicio");
        }
    }

    async destroy(id: number){
        try {
            console.log("id del service.service.ts", id)
            const service = await this.httpClient.delete(`services/${id}`);
            return service;
        } catch (error) {
            console.log(error)
            throw new Error("Error al eliminar el servicio");
        }
    }

}