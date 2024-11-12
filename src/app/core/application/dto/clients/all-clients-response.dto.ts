export interface IAllClients {
    totalPages:       number;
    totalElements:    number;
    pageable:         IPageable;
    numberOfElements: number;
    size:             number;
    content:          IContent[];
    number:           number;
    sort:             ISort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface IAppointment {
    id:       number;
    dateTime: Date;
    duration: number;
    comments: string;
    service:  IService;
    employee: IContent;
}

export interface IContent {
    id:            number;
    firstName:     string;
    lastName:      string;
    phone:         string;
    email:         string;
    appointments?: IAppointment[];
    role?:         string;
}

export interface IService {
    id:          number;
    name:        string;
    description: string;
    price:       number;
}

export interface IPageable {
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
    offset:     number;
    sort:       ISort[];
}

export interface ISort {
    direction:    string;
    nullHandling: string;
    ascending:    boolean;
    property:     string;
    ignoreCase:   boolean;
}

export interface IAllClientsRequest {
    page: number;
    size: number;
}