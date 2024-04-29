// import  Axios  from "axios";
export const addUserToLocalStorage = (user) => {

    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };
  
  export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user');
   
    // const user = result ? JSON.parse(result) : null;
    const user  = result
    return user;
  };

  // export const getUserFromLocalStorage1 = (email) => {
  //   Axios.get('http://localhost:8800/api/v1/auth/user', {email:email})
  //   .then((response) => {
  //     const result = response.existingUser;
  //     const user = result ? JSON.parse(result) : null;
  //     return user;
  //   }
  //   );
  // }



