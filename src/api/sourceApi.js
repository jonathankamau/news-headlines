class sourceApi {  
  static getSources() {
    return fetch('/sources?language=en&apiKey='+process.env.REACT_APP_API_KEY).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default sourceApi;  
