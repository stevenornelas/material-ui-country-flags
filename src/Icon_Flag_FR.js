'use strict';

var React = require('react')
var SvgIcon = require('material-ui/lib/svg-icon')

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

module.exports = function(props)
{
  return(
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z"/>
        <path fill="#00267f" d="M0 0h213.337v480H0z"/>
        <path fill="#f31830" d="M426.662 0H640v480H426.662z"/>
      </g>
    </SvgIcon>
  )
}
