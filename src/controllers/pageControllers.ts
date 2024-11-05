import {Request, Response} from 'express'
import {createMenuObject} from '../helpers/createMenuObjects'
import {Manga} from '../models/manga'

export const home = (req:Request, res:Response)=>{
    let list = Manga.getAll()
    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner: {
            title:'Todos os Mangás',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const action = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('action')
    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner: {
            title:'Ação',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const adventure = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('adventure')
    res.render('pages/pages',{
        menu: createMenuObject('adventure'),
        banner: {
            title:'Aventura',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const fantasy = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('fantasy')
    res.render('pages/pages',{
        menu: createMenuObject('fantasy'),
        banner: {
            title:'Fantasia',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const shonen = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('shonen')
    res.render('pages/pages',{
        menu: createMenuObject('shonen'),
        banner: {
            title:'Shonen',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const supernatural = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('supernatural')
    res.render('pages/pages',{
        menu: createMenuObject('supernatural'),
        banner: {
            title:'Supernatural',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const drama = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('drama')
    res.render('pages/pages',{
        menu: createMenuObject('drama'),
        banner: {
            title:'Drama',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const thriller = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('thriller')
    res.render('pages/pages',{
        menu: createMenuObject('thriller'),
        banner: {
            title:'Thriller',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const comedy = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('comedy')
    res.render('pages/pages',{
        menu: createMenuObject('comedy'),
        banner: {
            title:'Comédia',
            background:'MeguminBanner.png'
        },
        list
    })
}

export const romance = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('romance')
    res.render('pages/pages',{
        menu: createMenuObject('romance'),
        banner: {
            title:'Romance',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const SciFi = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('SciFi')
    res.render('pages/pages',{
        menu: createMenuObject('SciFi'),
        banner: {
            title:'Sci-Fi',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const suspense = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('suspense')
    res.render('pages/pages',{
        menu: createMenuObject('suspense'),
        banner: {
            title:'Suspense',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}

export const isekai = (req:Request, res:Response)=>{
    let list = Manga.getFromtype('isekai')
    res.render('pages/pages',{
        menu: createMenuObject('isekai'),
        banner: {
            title:'Isekai',
            background:'FrierenBanner.jpeg'
        },
        list
    })
}