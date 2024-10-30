import {Request, Response} from 'express'
import {createMenuObject} from '../helpers/createMenuObjects'

export const home = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner: {
            title:'Todos os Mangás',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const action = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner: {
            title:'Ação',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const adventure = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('adventure'),
        banner: {
            title:'Aventura',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const fantasy = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('fantasy'),
        banner: {
            title:'Fantasia',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const shonen = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('shonen'),
        banner: {
            title:'Shonen',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const supernatural = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('supernatural'),
        banner: {
            title:'Supernatural',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const drama = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('drama'),
        banner: {
            title:'Drama',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const thriller = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('thriller'),
        banner: {
            title:'Thriller',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const comedy = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('comedy'),
        banner: {
            title:'Comédia',
            background:'MeguminBanner.png'
        }
    })
}

export const romance = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('romance'),
        banner: {
            title:'Romance',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const SciFi = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('SciFi'),
        banner: {
            title:'Sci-Fi',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const suspense = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('suspense'),
        banner: {
            title:'Suspense',
            background:'FrierenBanner.jpeg'
        }
    })
}

export const isekai = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('isekai'),
        banner: {
            title:'Isekai',
            background:'FrierenBanner.jpeg'
        }
    })
}