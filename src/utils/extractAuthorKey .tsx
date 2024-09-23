export default function extractAuthorKey(url: string){
    const regex = /\/authors\/(OL[0-9]+A)\//;
    const match = url.match(regex);
    return match ? match[1] : null;
}