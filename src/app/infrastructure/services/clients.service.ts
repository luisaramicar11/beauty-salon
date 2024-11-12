
import { IAllClients, IAllClientsRequest, IClientRequest, IClientResponse } from "@/app/core/application/dto/clients";
import { HttpClient } from "../utils/client-http";
import { PClients } from "@/app/core/application/ports/clients.port";

export class ClientService implements PClients {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async findAll({page, size}:IAllClientsRequest){
        try {
            const services = await this.httpClient.get<IAllClients>(`clients?page=${page}&size=${size}`);
            return services;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener los clientes");
        }
    }

    async create(client: IClientRequest){
        try {
            const newClient = await this.httpClient.post< IClientResponse, IClientRequest>(`clients`, client)
            return newClient;
        } catch (error) {
            console.log(error);
            throw new Error("Error al crear el cliente");
        }
    }

    async update(id: number, client: IClientRequest){
        try {
            const updatedClient = await this.httpClient.put<IClientResponse, IClientRequest>(`clients/${id}`, client)
            return updatedClient;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar el cliente");
        }
    }

    async destroy(id: number){
        try {
            console.log("id del service.service.ts", id)
            const client = await this.httpClient.delete(`clients/${id}`);
            return client;
        } catch (error) {
            console.log(error)
            throw new Error("Error al eliminar el cliente");
        }
    }

}