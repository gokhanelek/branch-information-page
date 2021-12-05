export interface LocationResponse {
    image: string;
    licences: number;
    name: string;
    products: Products;
    enrollmentDate: number;
}

export interface Products {
    monitoring: boolean;
    exams: boolean;
    applicationLibrary: boolean;
}

export class LocationRequest {
    name: string = '';
    licenses: number = 0;
    image: string = '';
    exams: boolean = true;
    monitoring: boolean = true;
    applicationLibrary: boolean = true;
    enrollmentDate: string = '';
}