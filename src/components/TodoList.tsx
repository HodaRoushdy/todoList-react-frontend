import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import Button from "./ui/Button";
const TodoList = () => {
  const userDataKey = "loggedInUserData";
  const userDataString = localStorage.getItem(userDataKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;



  const { isLoading, error, data } = useAuthenticatedQuery({
    url: "http://localhost:1337/api/todos?populate=todos",
    queryKey: ["todos"],
    config: {
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    },
  });

  if (isLoading) return <h3>loading</h3>
  if (error) return <h3>error</h3>;


  return (
    <div className="space-y-1 ">
      { data.data.map((todo) => (
      <div
        className="flex items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100"
        key={todo.id}>
        <p className="w-full font-semibold">
          {todo.id} - {todo.attributes.title}
        </p>
        <div className="flex items-center justify-end w-full space-x-3">
          <Button size={"sm"}>Edit</Button>
          <Button variant={"danger"} size={"sm"}>
            Remove
          </Button>
        </div>
      </div>
    
  ))}
      </div>
  )
  
 
};

export default TodoList;
