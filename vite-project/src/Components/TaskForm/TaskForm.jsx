export const TaskForm = ({}) => {
    return (
        <div className="task-form">
            <h3>Create Task</h3>
            <form>
                <input type="text" placeholder="Task Title" />
                <textarea placeholder="Task Description"></textarea>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
}
