var h = require('hyperscript')
var morphdom = require('morphdom')

var container = document.getElementById('container')
var button = h('button', {onclick: function() { morphinTime() } }, "what time is it?")
container.appendChild(button)

function morphinTime() {
  container.removeChild(button)
  container.appendChild(h('span#time', { style: {'font-size': '100px'} }, "IT'S MORPHIN TIME!"))

  document.getElementById('logo').style.visibility = 'visible'

  window.setInterval(function() {
    var timeEl = document.getElementById('time')
    if (timeEl.textContent === "IT'S MORPHIN TIME!") {
      morphdom(timeEl, h('span#time', { style: {'font-size': '14px', 'color': 'grey'} }, "oh shit it's power rangers"))
    } else {
      morphdom(timeEl, h('span#time', { style: {'font-size': '100px'} }, "IT'S MORPHIN TIME!"))
    }

    // if (container.style.backgroundColor == 'white') {
    //   container.style.backgroundColor = 'black'
    // } else {
    //   container.style.backgroundColor = 'white'
    // }
  }, 100)
}
