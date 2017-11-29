class sourceApi {  
  static getSources() {
    return fetch('/sources').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default sourceApi;  
