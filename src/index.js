import _ from 'lodash';
import './css/main.scss'

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 // Lodash, now imported by this script
  return element;
}

document.body.appendChild(component());