const getImages = async () => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=30&api_key=live_jF3os406tvIKWjKAJ4JX1Qg23bv6H1niLJh9nWq6incfGH0cTmu7VJ8unV7Sbghq'
  );
  const data = await response.json();
  const newArr = data.map((obj) => {
    console.log(obj);
    return obj.url;
  });
  return newArr;
};

export default getImages;
