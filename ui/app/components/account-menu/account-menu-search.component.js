const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits

inherits(AccountMenuSearch, Component)

function AccountMenuSearch () { 
  this.state = { value: "" }
  Component.call(this) 
}

AccountMenuSearch.prototype.render = function () {
  return h('div.account-menu__search', [
    h('input.account-menu__search__input', {
      autoFocus: true,
      type: 'text',
      value: this.state.value,
      onChange: (event) => {
        const value = (event.target.value === '') ? '' : event.target.value
        this.handleChange(value);
      }
    })
  ])
}

AccountMenuSearch.prototype.handleChange = function(value) {
  this.setState({ value });
}

module.exports = AccountMenuSearch;
