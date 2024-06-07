import TodoList from "../components/TodoList";

// display user todos
const HomePage = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <TodoList />
    </section>
  );
};

export default HomePage;
