import supabase from "./supabase";

export async function login(
  email,
  password
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function logout() {
  return await supabase.auth.signOut();
}

export async function getSession() {
  const {
    data,
  } =
    await supabase.auth.getSession();

  return data.session;
}