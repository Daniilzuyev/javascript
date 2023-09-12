// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.name );

// setTimeout(function(){alert('some text')}, 5000)
// prompt(parseInt ("56Fdfgs78"));
function initialize() {
  // Write your code here.
}

document.body.innerHTML = `
<div>
    <span>Read emails</span>
    <button class="downButton" type="button">&darr;</button>
</div>
<div>
    <span>Prepare presentation</span>
    <button class="downButton" type="button">&darr;</button>
    <button class="upButton" type="button">&uarr;</button></div>
<div>
    <span>Monthly report</span>
    <button class="upButton" type="button">&uarr;</button>
</div>`;
function initialize() {
  // Write your code here.
  console.log(1)
}
document.body.innerHTML = `
<div>
    <span>Read emails</span>
    <button class="downButton" type="button">&darr;</button>
</div>
<div>
    <span>Prepare presentation</span>
    <button class="downButton" type="button">&darr;</button>
    <button class="upButton" type="button">&uarr;</button></div>
<div>
    <span>Monthly report</span>
    <button class="upButton" type="button">&uarr;</button>
</div>`;

initialize();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

console.log(document.body.innerHTML);