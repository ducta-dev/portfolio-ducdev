import {
deleteProject
}

from "../services/projectService";

export default function AdminTable({

projects,
edit,
reload,

}) {

async function remove(
id
){

const ok=

confirm(
"Xóa dự án?"
);

if(
!ok
){

return;

}

const deleted=

await deleteProject(
id
);

if(
deleted
){

reload();

}

}

return(

<div
className="
mt-12
space-y-4
"
>

{

projects.map(

project=>(

<div

key={
project.id
}

className="
border
rounded-3xl
p-6

flex

justify-between

items-center
"

>

<div>

<h3
className="
font-bold
text-xl
"
>

{
project.title
}

</h3>

<div
className="
text-gray-500
"
>

{
project.price
}

</div>

</div>

<div
className="
flex
gap-3
"
>

<button

onClick={()=>

edit(
project
)

}

className="
px-5
py-2

bg-black

text-white

rounded-xl
"

>

Sửa

</button>

<button

onClick={()=>

remove(
project.id
)

}

className="
px-5
py-2

bg-red-600

text-white

rounded-xl
"

>

Xóa

</button>

</div>

</div>

)

)

}

</div>

);

}