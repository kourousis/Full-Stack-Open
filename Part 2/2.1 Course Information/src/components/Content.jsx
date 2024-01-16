const Content = ({ courses }) => {
    return (
        <>
            {courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    {course.parts.map(part => (
                        <p key={part.id}>{part.name} {part.exercises}</p>
                    ))}
                    <b><p>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p></b>
                </div>
            ))}
        </>
    );
}

export default Content