import { createContext, useState, useEffect, useContext, type ReactElement } from "react"

const windowSizeContext = createContext<{
  width: number,
  height: number,
}>({
  width: 1440,
  height: 1080,
});

export function WindowSizeContextProvider(props: { children: ReactElement }) {
  const [width, setWidth] = useState(1440);
  const [height, setHeight] = useState(1080);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("hi");
      setWidth(window.innerWidth);
      setHeight(window.innerWidth);
    })
  });

  return <windowSizeContext.Provider value={{ width, height }}>{props.children}</windowSizeContext.Provider>
}

export default () => useContext(windowSizeContext);
