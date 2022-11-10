import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - DCARE`;
    }, [title])
};

export default useTitle;