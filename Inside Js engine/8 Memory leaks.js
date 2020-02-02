// memory leaks happen when there is some data on the page that is no longer needed anymore
// but it's still there
// Also memory leak happens when there is no space in memory heap and garbage collection don't collect gabrage for some reason

// There are several comon ways to make a memory leak

// 1 Creating global variables
// When function finishes executing all memory related to data in it is removed
// but when we init a global variable its memory is never cleaned
// as it's located in global execution context
const a = 3;


// 2 Event listeners
// In SPA there can be lots of pages with lots of elements on them
// With lots of event listeners
// so if we don't clean event listeners when we don't need them
// they will be stacking in memory and slow things down

const elem = document.querySelector('#button');
elem.addEventListener('click', onClickFunction);

// 3 setInterval
// Code inside setInterval is never garbage collected unless there are not some condition to stop the loop
setInterval(() => {}, 0);

//* This is true for all kinds of loop (for, while etc)