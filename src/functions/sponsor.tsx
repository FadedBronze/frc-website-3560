export function openSponsorModal() {
  const blurDiv = document.createElement("div");
  blurDiv.className =
    "fixed top-0 left-0 w-full h-full bg-wolf-black/50 backdrop-blur-sm z-[9999]";

  const modal = document.createElement("div");
  modal.className =
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-white z-[10000] rounded-lg overflow-hidden shadow-lg";

  const iframe = document.createElement("iframe");
  iframe.src = "/sponsorship.pdf";
  iframe.className = "w-full h-full border-none";

  const closeButton = document.createElement("button");
  closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon"><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`;
  closeButton.className =
    "fixed top-2.5 right-2.5 text-white rounded p-1 cursor-pointer scale-[200%]";

  blurDiv.addEventListener("click", () => {
    document.body.removeChild(modal);
    document.body.removeChild(blurDiv);
  });

  modal.appendChild(iframe);
  blurDiv.appendChild(closeButton);
  document.body.appendChild(modal);
  document.body.appendChild(blurDiv);
}
