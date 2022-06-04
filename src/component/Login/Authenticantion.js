import { useEffect, useState } from 'react';
import axios from 'axios';
import { useProviderContext } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constains';

function Authenticantion(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState(sessionStorage.getItem('refreshToken') || '');
  const [setExpiresIn] = useState(sessionStorage.getItem('expiresIn') || '');

  const [{ URL_SERVER }, dispatch] = useProviderContext();

  useEffect(() => {
    async function Login() {
      let res = await axios.post(URL_SERVER + '/login', {
        code,
      })
        .then(res => {
          setAccessToken(res.data.accessToken);
          sessionStorage.setItem('accessToken', (res.data.accessToken));

          setRefreshToken(res.data.refreshToken);
          sessionStorage.setItem('refreshToken', (res.data.refreshToken));

          setExpiresIn(res.data.expiresIn);
          sessionStorage.setItem('expiresIn', (res.data.expiresIn));
          window.history.pushState({}, null, "/");

          console.log("login");
        })
        .catch((err) => {
          console.log(err);
          // window.location = "/";
        })
    }
    Login();

  }, [code]);

  useEffect(() => {
    // if (!refreshToken || !expiresIn) return
    // const interval = setInterval(() => {
    async function hrefresh() {
      let res = await axios.post(URL_SERVER + '/refresh', {
        refreshToken,
      })
        .then(res => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
          console.log("refresh ", res.data.accessToken);
          dispatch({
            accessTokenProvider: res.data.accessToken,
            type: reducerCases.SET_TOKEN,
          });

        })
        .catch((err) => {
          console.log(err);
          // window.location = "/";

        })
      // }, (expiresIn - 60) * 1000);

      // return () => clearInterval(interval);
    }
    hrefresh();

  }, [sessionStorage.getItem('expiresIn'), sessionStorage.getItem('refreshToken')]);



  return accessToken;
}

export default Authenticantion