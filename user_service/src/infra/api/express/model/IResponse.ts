export default interface IResponse<T> {
    status: number;
    msg: string;
    data: T;
}
