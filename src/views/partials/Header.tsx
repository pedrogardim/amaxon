const Header = () => (
  <header class="h-24 bg-nav-1 w-full text-white">
    <nav class="h-14 w-full flex items-center px-2">
      <img
        src="./public/assets/nav-logo.png"
        class="hover:outline hover:outline-[0.5px] outline-white"
      />
      <div class="px-2 hover:outline hover:outline-[0.5px] outline-white flex">
        <div class="flex items-end m-1">
          <img
            class="w-[18px] object-contain mt-auto"
            src="./public/assets/map-marker.png"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-xs opacity-70">Deliver to</span>
          <span class="text-sm font-bold">Spain</span>
        </div>
      </div>
    </nav>
    <nav class="h-10 bg-nav-2 w-full"></nav>
  </header>
);

export default Header;
