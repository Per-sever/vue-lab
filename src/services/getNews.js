const getNews = async () => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '4a394d2553msha461fad9ecac3bbp11c33ajsnaa3ad813453d',
      'X-RapidAPI-Host': 'joke3.p.rapidapi.com',
    },
    body: '{"content":"A joke here","nsfw":"false"}',
  };

  fetch('https://joke3.p.rapidapi.com/v1/joke', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  // const response = await fetch(
  //   'https://api.spaceflightnewsapi.net/v3/articles'
  // );
  // return response.json();
};
export default getNews;
