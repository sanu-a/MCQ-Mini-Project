const result = document.createElement("div");
function getPoints() {
  let count = 0;
  let qstn1 = $("input[name='question1']:checked").val();
  let qstn2 = $("input[name='question2']:checked").val();
  let qstn3 = $("input[name='question3']:checked").val();
  let qstn4 = $("input[name='question4']:checked").val();
  let qstn5 = $("input[name='question5']:checked").val();
  if (qstn1 === "7") {
    count++;
  }
  if (qstn2 === "Messi") {
    count++;
  }
  if (qstn3 === "Chelsea") {
    count++;
  }
  if (qstn4 === "20") {
    count++;
  }
  if (qstn5 === "Ronaldo") {
    count++;
  }

  result.setAttribute("id", "result");
  document.getElementById("container").appendChild(result);
  if (count >= 4) {
    result.innerHTML = "Yes, Your score is " + count;
    console.log(count);
  } else if (count == 2 || count == 3) {
    result.innerHTML = "Maybe, Your score is " + count;
  } else {
    result.innerHTML = "No, Your score is " + count;
  }
}
