export interface Iplace {
    slug:string
    location: TypeLocation
    pathImga:string
    rating: 1|2|3|4|5|6|7|8|9|10
    duration: string
    distance:number
    googlemap:string
}
type TypeLocation{
    cities:string
    country:string
}
interface Iimage{
    path:string
    sizi:string
}
export interface Ifavorite {
    slug:string
    name:string
}