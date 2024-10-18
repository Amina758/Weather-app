function getweather() {
  const pickname= document.getElementById("temp1").value;
  axios.get(`https://api.weatherapi.com/v1/current.json?key=4d84b07176dd4334b9272747242602&q=${pickname}&aqi=yes`)

  .then(function (response) {
    // handle success
    let weather= response.data;
    console.log(weather);
    console.log(response);
    document.getElementById("change").innerHTML=(`Temp of any country in celsius${weather.current .temp_c}`
  )
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
