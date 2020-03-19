import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import SECTIONS_DATA from '../../sections.data';
import { getCollectionSections } from '../../context/collections/collection.utils';

class Directory extends Component {
  constructor() {
    super()
    this.state = { 
      sections: SECTIONS_DATA
    }
  }

  componentDidMount() {
    getCollectionSections().then(res => console.log(res));
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem 
              key={id}
              {...otherSectionProps}
            />
          ))
        }
      </div> 
    )
  } 
}

export default Directory;