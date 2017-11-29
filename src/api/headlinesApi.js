class headlinesApi {
static getHeadlines(sourceName) {
    return fetch('/top-headlines?sources='+sourceName+'&apiKey='+process.env.REACT_APP_API_KEY).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      console.log(error);
      return error;
    });
  }
}

export default headlinesApi;