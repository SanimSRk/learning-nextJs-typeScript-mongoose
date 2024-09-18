export default async function  photoDeatils({params}) {
    const photo=await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    const data=await photo.json()
    return (
        <div>
            <h2>this photo deatils pages :{params.id}</h2>
            <img src={data. thumbnailUrl} alt="" />
        </div>
    );
}