export interface Skills{
    id:number,
        name:string,
        img:string,
        percentage:number
}

export interface Projects{
    id:number,
        title:string,
        image:string,
        description:string,
        build_with:string[];
        url?:string;
}
