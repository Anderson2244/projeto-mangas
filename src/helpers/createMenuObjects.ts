type menuOptions = '' | 'all' | 'action' | 'adventure' | 'fantasy' | 'shonen' | 'supernatural' | 'drama' | 'thriller' | 'comedy' | 'romance' | 'SciFi' | 'suspense' | 'isekai'

export const createMenuObject = (activeMenu:menuOptions)=>{
    let returnObject = {
        all:false,
        action:false,
        adventure:false,
        fantasy:false,
        shonen:false,
        supernatural:false,
        drama:false,
        thriller:false,
        comedy:false,
        romance:false,
        SciFi:false,
        suspense:false,
        isekai:false,
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    } else {
        return returnObject
    }
}