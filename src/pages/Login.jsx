import {
useState
} from "react";

import {
login
} from "../services/authService";

import {
useNavigate
} from "react-router-dom";

export default function Login(){

const nav=
useNavigate();

const [
email,
setEmail
]=
useState("");

const [
password,
setPassword
]=
useState("");

async function submit(
e
){

e.preventDefault();

const {
error
}=
await login(
email,
password
);

if(
error
){

alert(
"Sai tài khoản"
);

return;

}

nav(
"/admin"
);

}

return(

<section
className="
min-h-screen

grid

place-items-center
"
>

<form
onSubmit={
submit
}

className="
w-[400px]

grid

gap-5
"
>

<h1
className="
text-4xl

font-black
"
>

Admin Login

</h1>

<input
value={
email
}

onChange={
e=>
setEmail(
e.target.value
)
}

placeholder="Email"

className="
h-16

px-5

border

rounded-2xl
"
/>

<input
type="password"

value={
password
}

onChange={
e=>
setPassword(
e.target.value
)
}

placeholder="Password"

className="
h-16

px-5

border

rounded-2xl
"
/>

<button
className="
h-16

bg-black

text-white

rounded-2xl
"
>

Đăng nhập

</button>

</form>

</section>

);

}