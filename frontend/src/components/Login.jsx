import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import {client} from '../client';


const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log("----------------------------");
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl
    }
    client.createIfNotExists(doc).then(()=>{
      navigate('/', { replace: true })
    })
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-centre items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img
              src={logo}
              width="130px"
              alt='logo'
            />
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin 
              clientId='958652468921-4ltk22uokrpft85f7af02rmv9k1d0i48.apps.googleusercontent.com'
              render={(renderProps) => (
                <button
                  type='button'
                  className='bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className=''>Sign in with Google</FcGoogle>
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
