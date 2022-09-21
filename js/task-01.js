const allEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${allEl.length}`);

allEl.forEach(function(category){
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.lastElementChild.childElementCount);
});


