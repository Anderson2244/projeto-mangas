/*
PRECISAREMOS DE 3 FUNÇÕES DIFERENTES

1. PEGAR TODOS OS ITENS
2. FILTRAR POR TIPO (ISEKAI, ETC..)
3. FILTRAR ITENS PELO NOME
*/

type Mangatype = 'action'|'adventure'|'fantasy'|'shonen'|'supernatural'|'drama'|'thriller'|'comedy'|'romance'|'SciFi'|'suspense'|'isekai'

type Manga = {
    type: Mangatype,
    image:string,
    name:string
}

const data: Manga[] = [
    {
        type: 'action',
        image: 'Kimetsu_no_Yaiba_(capa_do_volume_1).png',
        name: 'Demon Slayer: Kimetsu no Yaiba',
    },
    {
        type: 'action',
        image: 'Jujutsu_Kaisen_Cover.png',
        name: 'JUJUTSU KAISEN',
    },
    {
        type: 'action',
        image: 'Fullmetal_Alchemist_Brotherhood_key_visual.png',
        name: 'Fullmetal Alchemist: Brotherhood',
    },
    {
        type: 'action',
        image: 'That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_volume_1_cover.jpg',
        name: 'That Time I Got Reincarnated as a Slime',
    },
    {
        type: 'action',
        image: 'Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg',
        name: 'Re:ZERO Starting Life in Another World',
    },
    {
        type: 'action',
        image: 'Doctor_stone.jpg',
        name: 'Dr. STONE',
    },
    {
        type: 'action',
        image: 'JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg',
        name: 'JoJos Bizarre Adventure',
    },
    {
        type: 'action',
        image: 'Dragon Ball Z.jpg',
        name: 'Dragon Ball Z',
    },
    {
        type: 'action',
        image: 'Cowboy Bebop.jpg',
        name: 'Cowboy Bebop',
    },
    {
        type: 'action',
        image: 'YuYu_Hakusho_volume_1.jpg',
        name: 'Yu Yu Hakusho',
    },
    {
        type: 'action',
        image: 'One_Piece_vol._01.jpg',
        name: 'One Piece',
    },
    {
        type: 'adventure',
        image: 'Mushoku_Tensei_1.png',
        name: 'Mushoku Tensei: Jobless Reincarnation',
    },
    {
        type: 'adventure',
        image: 'TSUKIMICHI -Moonlit Fantasy-.jfif',
        name: 'TSUKIMICHI -Moonlit Fantasy-',
    },
    {
        type: 'shonen',
        image: 'naruto classico.jpg',
        name: 'Naruto',
    },
    {
        type: 'supernatural',
        image: 'Another_(novel)_Cover.JPG',
        name: 'Another',
    },
    {
        type: 'drama',
        image: 'cover-grisaia.jpg',
        name: 'The Fruit of Grisaia',
    },
    {
        type: 'comedy',
        image: 'The Quintessential Quintuplets.jpg',
        name: 'The Quintessential Quintuplets',
    },
]

export const Manga = {


    getAll:() =>{
        return data
    },

    getFromtype: (type: Mangatype): Manga[] =>{
        return data.filter(item => {
            if(item.type == type){
                return true
            } else {
                return false
            }
        })
    },

    getFromName:(name: string): Manga[]=>{
        return data.filter(item =>{
            if(item.name.toLowerCase().indexOf(name.toLocaleLowerCase()) > -1){
                return true
            } else {
                return false
            }
        })
    }
}