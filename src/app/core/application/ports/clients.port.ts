import { IAllClients, IAllClientsRequest, IClientRequest, IClientResponse } from "../dto/clients";

export interface PClients {
  /**
   * Fetches all clients with pagination.
   * 
   * @param {IAllClientsRequest} request - The request containing pagination parameters.
   * @returns {Promise<IAllClients>} - A promise that resolves with the response containing the clients data.
   */
  findAll(request: IAllClientsRequest): Promise<IAllClients>;

  /**
   * Creates a new client.
   * 
   * @param {IClientRequest} client - The request body for creating a client.
   * @returns {Promise<IClientResponse>} - A promise that resolves with the response containing the created client details.
   */
  create(client: IClientRequest): Promise<IClientResponse>;

  /**
   * Updates an existing client.
   * 
   * @param {number} id - The ID of the client to be updated.
   * @param {IClientRequest} client - The request body for updating the client.
   * @returns {Promise<IClientResponse>} - A promise that resolves with the updated client details.
   */
  update(id: number, client: IClientRequest): Promise<IClientResponse>;

  /**
   * Deletes an existing client.
   * 
   * @param {number} id - The ID of the client to be deleted.
   * @returns {Promise<void>} - A promise that resolves when the client is successfully deleted.
   */
  destroy(id: number): Promise<void>;
}
