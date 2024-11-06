export interface IPageable {
    pageNumber: number;
    pageSize:   number;
    sort:       ISort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface ISort {
    unsorted: boolean;
    sorted:   boolean;
    empty:    boolean;
}