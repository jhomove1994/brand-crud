export interface ApiResponse<T> {
    message: string | string[];
    data?: T;
}
