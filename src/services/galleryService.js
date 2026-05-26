import supabase from "./supabase";

export async function uploadGallery(
files
){

const urls=[];

for(
const file
of files
){

const name=
`${Date.now()}-${file.name}`;

const {
error
}
=
await supabase

.storage

.from(
"project-images"
)

.upload(
name,
file
);

if(
error)
throw error;

const {
data
}
=
supabase

.storage

.from(
"project-images"
)

.getPublicUrl(
name
);

urls.push(
data.publicUrl
);

}

return urls;

}

export async function saveGallery(
projectId,
images
){

const rows=

images.map(

(
url,
index

)=>({

project_id:
projectId,

image_url:
url,

sort_order:
index+1,

})

);

return await supabase

.from(
"project_images"
)

.insert(
rows
);

}