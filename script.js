$(document).ready(function () {
  console.log("doc is ready");

  //let revName;

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    // handle it if input is blank

    let userName = $("#userName").val();
    console.log("user name = ", userName);
    //let coolFacts = generateCoolNameFacts(userName);

    console.log("name length f/n = ", nameLength(userName));

    console.log("you clicked the button");
    //console.log("from ln 12", generateCoolNameFacts(userName));

    $("#coolNameFactsOutput").html(nameLength(userName));
    
    $("#coolNameFactsOutput").html(getSpiritAnimal(userName));

    // $("#coolNameFactsOutput").html(
    //   '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y-YVLipceJt1DMU3Bs8uIAHaFj%26pid%3DApi&f=1">'
    // );

    // $("#coolNameImg").attr(
    //   "src",
    //   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y-YVLipceJt1DMU3Bs8uIAHaFj%26pid%3DApi&f=1"
    // );
  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>";

  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {
  //named, not anonymous. Name = nameLength
  //parameters, one = j
  //void if it has no return value

  return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
  return "the first letter of your name is " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;

  return "the last letter of your name is " + name[lastIndex];
}

function reverseName(name) {
  // let arrSomeArray = [1, "cat", "Susan", [j, "stuff"]];

  let arrName = name.split();

  revName = arrName.reverse();
}

function getSpiritAnimal(x) {
  //flow control: case switch, loop, if/then

  if (x.length < 6) {
    //execute some code
    return "Your spirit animal is a unicorn!";
  } else if (x.length > 6) {
    return "Your spirit animal is a monkey";}
    else {
    return "You don't have a spirit animal. Sorry!";
  }
}

function generateFunNameFacts(userName) {
  let funFacts = "";

  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>";

  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}
