const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    return (
      <Default>
 
  <h2>404 Error, Page not found!</h2>
 
</Default>
    )
}



module.exports = error404