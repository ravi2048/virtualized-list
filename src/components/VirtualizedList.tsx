import React, { useState } from "react";
interface Props {
    count: number;
}

const VirtualizedList = ({ count }: Props) => {
    const [scrollTop, setScrollTop] = useState(0); // 0 based indexing
    const data = Array(count).fill(-1);
    const overScan = 5;
    const windowSize = 10;
    const sIdx = Math.max(Math.floor(scrollTop/32)-overScan, 0);
    const eIdx = Math.min(sIdx+windowSize+overScan, data.length);
    const windowItems = [];

    for(let i=sIdx; i<eIdx; i++) {
        windowItems.push(i);
    }

    function handleScroll(e: React.UIEvent<HTMLUListElement, UIEvent>) {
        const scrollTopHeight = e.currentTarget.scrollTop;
        setScrollTop(scrollTopHeight)
    }

    return (
        <ul className="regular" onScroll={handleScroll}>
            <div className="dummy" style={{ height: `${data.length*32}px`}}></div>
            {windowItems.map((idx, _) => (
                <li className="list-item" style={{top: `${(idx+1)*2}rem`, backgroundColor: idx%2==0?'lightgray':''}} key={idx}>V-List item number: {idx + 1}</li>
            ))}
        </ul>
    );
};

export { VirtualizedList };
