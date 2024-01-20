'use client'

import { Minimize, Maximize } from 'lucide-react';
import { useEffect, useState } from 'react';

const FullScreenSwitch = () => {
    const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement);

    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    };

    const handleFullScreenChange = () => {
        if (!document.fullscreenElement) {
            setIsFullScreen(false);
        } else {
            setIsFullScreen(true);
        }
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, []);

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