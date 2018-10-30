import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-trial-1178d.firebaseio.com/",
    // headers: {
    //     'Authorization': 'Bearer ' + 'yQGthDoSxPlBogIc0QvGp5hQ6aUCvY87K3yhiv83'
    //   }
});

export default instance;