//ESTO PASÓ A SER UN CUSTOM HOOK.

export const getImgUrl = function(firstThreeWords){
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?size=50&colores=red&json=true`;
    return fetch(CAT_ENDPOINT_IMAGE_URL)
    .then(res => res.json())
    .then(data => {
        return (data.url);
    })
}
