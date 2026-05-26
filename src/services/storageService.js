import supabase from "./supabase";

export async function uploadImage(
  file
) {
  const fileName =
    `${Date.now()}-${
      file.name
    }`;

  const {
    error,
  } =
    await supabase
      .storage

      .from(
        "project-images"
      )

      .upload(
        fileName,
        file
      );

  if (
    error
  ) {
    throw error;
  }

  const {
    data,
  } =
    supabase
      .storage

      .from(
        "project-images"
      )

      .getPublicUrl(
        fileName
      );

  return (
    data.publicUrl
  );
}