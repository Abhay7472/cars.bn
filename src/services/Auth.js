import {artical_url, _api_key, category,country_coad} from '../Config/rest.consfig';

export async function getArticales(){
    try{
        let articles = await fetch(`${artical_url}?country=${country_coad}&
        category=${category}`,{
            headers:{
                'X-API-KEY': _api_key
            }
        });

        let result = await articles.json();
        articles=null;

        return result.articles;
    }
    catch(error){
        throw error;
    }
}