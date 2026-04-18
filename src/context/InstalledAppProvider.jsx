import React, { useState } from 'react';
import { InstalledAppContext } from './InstalledAppContext';

const InstalledAppProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([]);
    const data = [installedApps, setInstalledApps]
    return (
        <InstalledAppContext.Provider value={data}>
            {children}
        </InstalledAppContext.Provider>
    );
};

export default InstalledAppProvider;