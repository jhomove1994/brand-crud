import { Filter } from '../models/filter.model';

export const FilterMapper = (headers: any) => {
    const filters = new Filter();
    filters.page = headers.page || 1;
    filters.limit = headers.limit || 10;
    return filters;
};
