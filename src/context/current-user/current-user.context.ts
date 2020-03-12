import React, { createContext } from 'react';

const CurrentUserContext: React.Context<any> = createContext(undefined);

export default CurrentUserContext;