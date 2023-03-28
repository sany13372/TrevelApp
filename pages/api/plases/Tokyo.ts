import { NextApiRequest, NextApiResponse } from "next";
import { plases } from ".";


export default function handler(req:NextApiRequest,res:NextApiResponse) {
    res.status(200).json(plases.find(p => p.slug === req.query.slug))
}