import { createContext, useState, useEffect, useContext, type ReactElement } from "react"

const windowSizeContext = createContext<{
  width: number,
  height: number,
}>({
  width: 0,
  height: 0,
});

export function WindowSizeContextProvider(props: { children: ReactElement }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resizeFn = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeFn();
    window.addEventListener("resize", resizeFn)
    return () => window.removeEventListener("resize", resizeFn);
  }, []);

  return <windowSizeContext.Provider value={{ width, height }}>{props.children}</windowSizeContext.Provider>
}

export default () => useContext(windowSizeContext);
