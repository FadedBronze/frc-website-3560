import { useRef, useState, useEffect } from "react";
import windowSizeContext from "../contexts/windowSizeContext.tsx"

export default function ResponsiveIframe(props: any) {
  const divRef = useRef<HTMLDivElement>(null);
  const { width, height } = windowSizeContext();
  const [divWidth, setDivWidth] = useState(480);
  const [divHeight, setDivHeight] = useState(360);

  const setSize = () => {
    if (divRef.current == null) return;
    setDivWidth(divRef.current.clientWidth);
    setDivHeight(divRef.current.clientHeight);
  };

  useEffect(setSize, [width, height])

  return (
    <div ref={divRef} {...props} className="w-full h-full">
      <iframe
        style={{
          border: 0,
        }}
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width={divWidth}
        height={props.holdAspect ? ((divWidth * 1080) / 1920) : divHeight }
        src={props.src}
      ></iframe>
    </div>
  );
}
