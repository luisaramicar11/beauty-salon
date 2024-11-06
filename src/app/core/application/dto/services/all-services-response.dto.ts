import {IPageable, ISort} from "./service-pageable.dto";

export interface IAllServicesResponse {
    content:          IContent[];
    pageable:         IPageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    numberOfElements: number;
    size:             number;
    number:           number;
    sort:             ISort;
    first:            boolean;
    empty:            boolean;
}

export interface IContent {
    id:          number;
    name:        string;
    description: string;
    price:       number;
}

export interface IAllServicesRequest {
    page: number;
    size: number;
}