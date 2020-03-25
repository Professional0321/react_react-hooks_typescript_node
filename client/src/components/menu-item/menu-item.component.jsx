import React from 'react';
import { withRouter } from 'react-router-dom';
// import './menu-item.styles.scss';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => {
  return (
    <MenuItemContainer
      size={size} 
      onClick={() => history.push(`${match.url}${linkUrl}`)} 
    >
      <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
      <ContentContainer>
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);