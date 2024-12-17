import { loginDTO } from "../types/DTOs/usersDTOs";

const fetchLogin = async (username: string, password: string, isLogin: boolean): Promise<boolean> => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/${isLogin ?  "users" : "users/register"}` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        if (!res.ok) throw new Error("status code is " + res.status);

        const data = await res.json() as loginDTO;
        localStorage.setItem("token", data.token);
        
        return true
    } catch(err) {
        console.error((err as Error).message);
        return false
    }
}

export default fetchLogin