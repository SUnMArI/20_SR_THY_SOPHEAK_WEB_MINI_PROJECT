
export const loginService = async (user) => {
  try {
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};


export const registerService = async (user) =>{
  try {
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/sign-up`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
}