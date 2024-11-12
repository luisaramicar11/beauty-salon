import { IAllServicesRequest, IAllServicesResponse } from "../dto/services/all-services-response.dto";
import { IServiceRequest } from "../dto/services/service-request.dto";
import { IServiceResponse } from "../dto/services/service-response.dto";

export interface PServices {
  /**
   * Fetches all services with pagination.
   * 
   * @param {IAllServicesRequest} request - The request containing pagination parameters.
   * @returns {Promise<IAllServicesResponse>} - A promise that resolves with the response containing the services data.
   */
  findAll(request: IAllServicesRequest): Promise<IAllServicesResponse>;

  /**
   * Creates a new service.
   * 
   * @param {IServiceRequest} service - The request body for creating a service.
   * @returns {Promise<IServiceResponse>} - A promise that resolves with the response containing the created service details.
   */
  create(service: IServiceRequest): Promise<IServiceResponse>;

  /**
   * Updates an existing service.
   * 
   * @param {number} id - The ID of the service to be updated.
   * @param {IServiceRequest} service - The request body for updating the service.
   * @returns {Promise<IServiceResponse>} - A promise that resolves with the updated service details.
   */
  update(id: number, service: IServiceRequest): Promise<IServiceResponse>;

  /**
   * Deletes an existing service.
   * 
   * @param {number} id - The ID of the service to be deleted.
   * @returns {Promise<void>} - A promise that resolves when the service is successfully deleted.
   */
  destroy(id: number): Promise<void>;
}
