// Make it so that the initialize function can only be called once!
let view;
function initialize() {
      view = '🏔';
      console.log('view has been set!')
}

initialize();
initialize();
initialize();

console.log(view);

// Solution 

let view;
function initialize() {
      view = 'page';
      console.log('view has been set!');
      return () => {
        return view;
      }
}

const init = initialize();

init();
init();
init();

console.log(view);