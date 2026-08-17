import "react";
import useQuery from "../hooks/useQuery";

const FetchDataComponent = () => {
    const {data, loading, error} = useQuery("https://jsonplaceholder.typicode.com/posts");

    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Fetch Data Component</h1>
            <p>Requiement: Fetch data from the API and display it in a list</p>
            {data.length > 0 && data.slice(0, 4).map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}

export default FetchDataComponent;
