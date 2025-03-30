export function WolfButton({
  title,
  href,
  callback,
  hollow,
}: {
  title: string;
  href?: string;
  callback?: any;
  hollow?: boolean;
}) {
  hollow = hollow ? hollow : false;
  return (
    <button
      onClick={
        href
          ? () => {
              window.location.href = href;
            }
          : callback
      }
      className={`rounded-sm px-4 py-3 ${
        hollow
          ? "border-2 border-white hover:bg-white hover:text-wolf-black"
          : "bg-wolf-blue text-white hover:bg-blue-500"
      } font-[Passion_One] hover:-translate-y-1 transition-all duration-300 cursor-pointer text-xl uppercase`}
    >
      {title}
    </button>
  );
}
