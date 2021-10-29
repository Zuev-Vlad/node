import { API_URL } from '../Config/Config';


export const APP_MODEL = {
    getMenu: async() => {
        let r = await fetch(API_URL.settings + '/menu/')
        return await r.json()
    }
}