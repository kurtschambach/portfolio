'use client'

import { Minimize, Maximize } from 'lucide-react';
import { useEffect, useState } from 'react';

const FullScreenSwitch = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = () => {
        if (!document.fullscreenElement && !isFullScreen) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    };

    return (
        <button
            onClick={handleFullScreen}
            className="bg-transparent border-2 border-orange/60 hover:border-orange text-orange/60 hover:text-orange font-bold p-2 rounded-lg duration-500"
        >
            {isFullScreen ? (
                <Minimize />
            ) : (
                <Maximize />
            )}
        </button>
    );
};

export default FullScreenSwitch;