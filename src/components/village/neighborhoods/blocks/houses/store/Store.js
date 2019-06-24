import { LOGIN } from './Api';

export async function login(token, secret, name, dp) {


    var formData = new FormData()
    formData.append('token', token)
    formData.append('secret', secret)
    formData.append('name', name)
    formData.append('dp', dp)
  
  
    try {
      const res = await fetch(LOGIN, {
  
       body :formData,
       method: 'POST',
       credentials: 'same-origin',
       mode: 'cors',
  
      });
      const auth_code = await res.json();
      localStorage.setItem('auth_code', auth_code)
    } catch (e) {
      console.log(e);
    }
  
  }

  export default login
