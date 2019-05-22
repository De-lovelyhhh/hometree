/* let d3 = require('d3')
let jsdom = require('jsdom')

let document = jsdom.jsdom()
let svg = d3.select(document.body).append('svg') */

let xhr = new XMLHttpRequest()

let url = 'https://www.easy-mock.com/mock/5b616dab0f34b755cbc58b91/dai/tree'
xhr.open('GET', url, true)
xhr.send()

// let data = d3.xhr(url)
console.log(data)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('successful')
    }
  }
}
