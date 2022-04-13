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
    result.innerHTML = `<h1><strong>Congratulations!!</strong></h1>
    <h1>Your score is <strong>${count}</strong></h1>`;
    result.style.backgroundColor = "green";
  } else if (count == 2 || count == 3) {
    result.innerHTML = `<h1><strong>Better luck next time!</strong></h1>
    <h1>Your score is <strong>${count}</strong></h1>`;
    result.style.backgroundColor = "rgb(163, 157, 3)";
  } else {
    result.innerHTML = `<h1><strong>You need to work more!!</strong></h1>
    <h1>Your score is <strong>${count}</strong></h1>`;
    result.style.backgroundColor = "red";
  }
}
