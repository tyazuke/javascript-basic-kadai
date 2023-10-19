const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const texts = document.getElementById("text");
  setTimeout(()=>{
  texts.textContent = ("ボタンをクリックしました");},2000);
  
  
  
});
