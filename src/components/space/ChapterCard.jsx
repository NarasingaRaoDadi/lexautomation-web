import { Link } from "react-router-dom";

export default function ChapterCard({chapter}){

return(

<div
className="chapter-card"
style={{
borderTop:`5px solid ${chapter.color}`
}}
>

<div
style={{
fontSize:"45px"
}}
>
{chapter.icon}
</div>

<h2 style={{ color:"#fff" }}>

{chapter.title}

</h2>

<p>

📚 {chapter.topics} Topics

</p>

<p>

❓ {chapter.mcqs} MCQs

</p>

<Link

className="chapter-button"

to={`/space/chapter/${chapter.id}`}

>

Start Learning →

</Link>

</div>

);

}