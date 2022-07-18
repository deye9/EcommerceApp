const BaseURL = 'https://api.storerestapi.com/';

export const ValidateEmail = email => {
  if (/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    return true;
  }
  return false;
};

export const FetchData = async (url, method, body) => {
  try {
    const response = await fetch(BaseURL + url, {
      method: method,
      headers: {
        'Content-Type': 'application/json; charaset=utf-8',
        // 'Authorization': 'Bearer ' + AsyncStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (error) {
    return {status: error.status, message: error.message};
  }
};
