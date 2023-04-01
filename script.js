function SendButton() {
    alert("Thank you for your message. We will reply your inquiry as soon as possible.");
  }


let drinksMenuUrl = "https://opensheet.elk.sh/1bqU3Y1RL4RIiah4CIV8i1Ll2q8A0xdFYJTpk4w6ZpyA/drinks+menu";

$(document).ready(function(){
  $.ajax({
    url: drinksMenuUrl,
    dataType:'json',
    success: function(data) {
      console.log(data);
      console.log(data[0]['PicURL'])
      console.log(data[0]['Title'])
      console.log(data[0]['Price'])
      console.log("************")
      data.forEach(function(menuItem){
        $("#drinks").append(`
        <div class="col-md-4 py-2 text-center">
          <img src="${menuItem['PicURL']}" class="img-fluid rounded-circle">
          <p class="text-center">${menuItem['Title']} <br>
              ${menuItem['Price']} <br>
          </p>
        </div>`
        )
      })

    }
  })
})

let foodMenuUrl = "https://opensheet.elk.sh/1bqU3Y1RL4RIiah4CIV8i1Ll2q8A0xdFYJTpk4w6ZpyA/food+menu";

$(document).ready(function(){
  $.ajax({
    url: foodMenuUrl,
    dataType:'json',
    success: function(data) {
      console.log(data);
      console.log(data[0]['PicURL'])
      console.log(data[0]['Title'])
      console.log(data[0]['Price'])
      console.log("************")
      data.forEach(function(menuItem){
        $("#food").append(`
        <div class="col-md-4 py-2 text-center">
          <img src="${menuItem['PicURL']}" class="img-fluid rounded-circle">
          <p class="text-center">${menuItem['Title']} <br>
              ${menuItem['Price']} <br>
          </p>
        </div>`
        )
      })

    }
  })
})