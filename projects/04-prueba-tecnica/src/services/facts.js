//ESTO PASÓ A SER UN CUSTOM HOOK.

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = function(){
    return fetch(CAT_ENDPOINT_FACT)
    .then(res => res.json())
    .then(data => {
        return (data.fact);
    })
}