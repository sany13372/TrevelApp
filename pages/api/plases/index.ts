
import { NextApiRequest, NextApiResponse } from "next";
import { Iplace } from "../../../app/components/types/place";
export const plases:Iplace[] =[
    {
        slug:'Tokyo',
        location:{country:'Japan',cities:'Tokio'},
        duration:'This is tokyo',
        pathImga: 'http://localhost:3000/images/plases/japan.jpg',
        rating: 5,
        distance:12,
        googlemap:'gfgs'
    },
    {
        slug:'Milan',
        location:{country:'Italy',cities:'Milan'},
        duration:'This is tokyo',
        pathImga: 'http://localhost:3000/images/plases/italy.jpg',
        rating: 8,
        distance:45,
        googlemap:'gfgs'
    }
];

export default function handler(req:NextApiRequest,res:NextApiResponse) {
    res.status(200).json(plases)
}
