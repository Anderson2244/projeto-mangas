import {Request, Response} from 'express'
import {Manga} from '../models/manga'
import { createMenuObject } from '../helpers/createMenuObjects'

export const search = (req:Request, res: Response)=>{

    let query: string = req.query.q as string
    let list = Manga.getFromName(query)

    res.render('pages/pages',{
        menu:createMenuObject(''),
        list
    })
}