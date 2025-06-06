function myClick(event) {
  console.log('click');
  console.log('--------------------');
  console.log(event.target);
  console.log('--------------------');
  console.log(this);
  //console.log(event);
}

// document.querySelector('#one').onclick = myClick;
// document.querySelector('body').onclick = myClick;
// document.querySelector('html').onclick = myClick;

document.onclick = function (event) {
  //console.log(event);
  if (event.target.id == 'one') {
    console.log('кликнули на one');
  }
};

document.querySelector('.two').onclick = function () {
  event.stopPropagation();
  console.log('click!!!!!!');
};

document.querySelector('.three').onclick = function () {
  this.style.display = 'none';
};
