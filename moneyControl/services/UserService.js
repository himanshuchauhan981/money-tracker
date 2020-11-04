import axios from 'axios';

class UserService {
  createNewUser = (userData) => {
    return axios({
      method: 'post',
      url: `http://127.0.0.1:8080/api/signup`,
      data: userData,
    });
  };
}

export default UserService;
