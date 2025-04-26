import axios from 'axios';
import config, { origin } from '../Api-requests/config'; // correct path

export const postSignup = async (data: any) => {
  const newData = JSON.stringify(data);

  try {
    const response = await axios({
      method: 'post',
      url: `${origin}/api/v1/user`,
      headers: {
        "Content-Type": "application/json",
      },
      data: newData,
    });

    const responseData = response.data;
    return responseData;
  } catch (error: any) {
    console.error("Signup error:", error);
    throw new Error(error.response?.data?.message || "Signup failed. Please try again.");
  }
};

export const postLogin = async (data: any) => {
    const newData = JSON.stringify(data);
  
    try {
      const response = await axios({
        method: 'post',
        url: `${origin}/api/v1/user/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: newData,
      });
  
      return response.data;
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };


  export const sendOtp = async (data: { phone: string }) => {
    const newData = JSON.stringify(data);
  
    try {
      const response = await axios({
        method: 'post',
        url: `${origin}/api/v1/otp/send-otp`, // your backend send-otp route
        headers: {
          'Content-Type': 'application/json',
        },
        data: newData,
      });
  
      const responseData = response.data;
      return responseData;
    } catch (error: any) {
      console.error('Send OTP error:', error);
      throw new Error(error.response?.data?.error || 'Failed to send OTP. Please try again.');
    }
  };

  export const verifyOtp = async (data: { phone: string; otp: string; orderId: string }) => {
    const newData = JSON.stringify(data);
  
    try {
      const response = await axios({
        method: 'post',
        url: `${origin}/api/v1/otp/verify-otp`, // your backend verify-otp route
        headers: {
          'Content-Type': 'application/json',
        },
        data: newData,
      });
  
      const responseData = response.data;
      return responseData;
    } catch (error: any) {
      console.error('Verify OTP error:', error);
      throw new Error(error.response?.data?.error || 'Failed to verify OTP. Please try again.');
    }
  };

  export const resetPassword = async (data: { phone: string; newPassword: string }) => {
    const newData = JSON.stringify(data);
  
    try {
      const response = await axios({
        method: 'put',
        url: `${origin}/api/v1/user/reset-password`, // Your backend reset-password route
        headers: {
          'Content-Type': 'application/json',
        },
        data: newData,
      });
  
      const responseData = response.data;
      return responseData;
    } catch (error: any) {
      console.error('Reset password error:', error);
      throw new Error(
        error.response?.data?.message || 
        error.response?.data?.error || 
        'Failed to reset password. Please try again.'
      );
    }
  };