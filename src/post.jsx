export default function Post({post}){
    const {userId, id, title, body} = post;
    return (
        <div style={{border: "2px solid tomato", padding: "10px", margin:"10px", borderRadius:"10px"}}>
            <h3>userId: {userId}</h3>
            <h3>Id: {id}</h3>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    )
}