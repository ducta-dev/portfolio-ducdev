import supabase from "./supabase";

export async function getProjects() {

  const {
    data,
    error,
  } =
  await supabase
    .from("projects")
    .select(`
      *,
      project_images(
        id,
        image_url,
        sort_order
      )
    `)
    .order(
      "id",
      {
        ascending:false,
      }
    );

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

export async function getProjectBySlug(
  slug
) {

  const {
    data,
    error,
  } =
  await supabase
    .from("projects")
    .select(`
      *,
      project_images(
        id,
        image_url,
        sort_order
      )
    `)
    .eq(
      "slug",
      slug
    )
    .single();

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}

export async function deleteProject(
  id
) {

try {

const {

error:
galleryError

}

=

await supabase

.from(
"project_images"
)

.delete()

.eq(
"project_id",
id
);

if(
galleryError
){

throw galleryError;

}

const {

error:
projectError

}

=

await supabase

.from(
"projects"
)

.delete()

.eq(
"id",
id
);

if(
projectError
){

throw projectError;

}

return true;

}

catch(
err
){

console.log(
err
);

alert(
err.message
);

return false;

}

}