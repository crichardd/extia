export interface Mission {
    _id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    skill: [Skil];
    company: Company;
};

export interface Skil {
    name: string
}

export interface Company {
    name: string;
    address: string;
}