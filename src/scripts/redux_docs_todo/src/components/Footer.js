import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../store/actions/index';

// Footer is where we let the user change currently visible todos.

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer;