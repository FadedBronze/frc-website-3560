import { useRef, useState, useEffect } from "react";
import windowSizeContext from "../contexts/windowSizeContext.tsx"

export default function ResponsiveIframe(props: any) {
  const divRef = useRef<HTMLDivElement>(null);
  const { width, height } = windowSizeContext();
  const [divWidth, setDivWidth] = useState(480);

  const setWidth = () => {
    if (divRef.current == null) return;
    setDivWidth(divRef.current.clientWidth);
  };

  useEffect(setWidth, []);

  useEffect(setWidth, [width, height]);

  return (
    <div ref={divRef} {...props}>
      <iframe
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width={divWidth}
        height={(divWidth * 1080) / 1920}
        src={props.src}
      ></iframe>
    </div>
  );
}
