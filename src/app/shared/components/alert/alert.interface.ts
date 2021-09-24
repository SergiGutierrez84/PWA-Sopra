
export interface IOptionsAlert  {
    link?: string;
    urlLink?: string;
    queryParams?: {[key: string]: string};
    clear?: boolean ;
}


export interface IAlert {
    color: string;
    icon: string;
    title: string;
    text: string;
    type: string;
    options: IOptionsAlert;
}
