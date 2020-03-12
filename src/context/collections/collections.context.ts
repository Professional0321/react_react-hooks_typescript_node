import React, { createContext } from 'react';

import SHOP_DATA from './shop.data';
// import Section from '../../interface/section.interface';

const CollectionsContext: React.Context<any> = createContext(SHOP_DATA)

export default CollectionsContext;