export type Payload = object;
export type HeaderObject = object;


export interface RequestObject {
    method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'HEAD';
    url: string;
    data?: Payload;
    headers: HeaderObject;
    ServiceName: string;
}