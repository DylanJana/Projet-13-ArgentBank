import axios from 'axios';

const BASEURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1/';

console.log("AXIOS", axios)

export const connectUser = async(email, password) => {
  let userInfos;
  await axios
    .post(`${BASEURL}user/login`, {
      email: email,
      password: password,
    })
    .then(({data}) => {
      if(data.body?.token) {
        // token is equal to a JSON Web Token to inform that an user has connected
        const token = `Bearer ${data.body.token}` ;
        userInfos = getInfosProfile(token);
      } else {
        throw new Error("Error API")
      }
    })
    return userInfos;
}

export const getInfosProfile = async(token) => {
  let userInfos;
  const header = {
    Authorization: token.string,
    "Content-Type": "application/json"
  }
  await axios
    // Run request post on url http://localhost:3001/api/v1/user/profile.
    // My first parameter is an empty object
    // My second parameter is a configuration of the request post
    .post(`${BASEURL}user/profile`, {}, { header })
    .then(({data}) => {
      userInfos = data.body;
    });
    return userInfos
}

export const setInfosProfile = async(firstName, lastName, token) => {
  const header = {
    Authorization: token.string,
    "Content-Type": "application/json"
  }
  await axios
    // Put is use to change my resource
    .put(`${BASEURL}/user/profile`, {firstName, lastName}, {header})
    .then((response) => {
      return response;
    })
}