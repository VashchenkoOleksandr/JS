export default function doneTask(someParam) {
  const elem = someParam.parentNode;
  elem.classList.toggle('list-item--done');
}
