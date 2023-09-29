import Content from "./Content/Content";
import Header from "./Header/header"


const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course;