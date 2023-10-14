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
      <div class="rounded-md text-gray-700 overflow-hidden relative h-10 flex items-stretch flex-1">
        <select class="w-14 min-w-14 bg-gray-200 px-2 text-xs">
          <option value="1">All</option>
          <option value="1">Household and hold-house</option>
        </select>
        <input type="text" class="min-w-96 flex-1 p-2" />
        <button class="bg-orange-300 min-w-10 w-10 flex justify-center items-center">
          <img class="w-5 object-cntain" src="./public/assets/search.png" />
        </button>
      </div>
      <div class="px-2 hover:outline hover:outline-[0.5px] outline-white flex">
        <div class="flex flex-col">
          <span class="text-xs opacity-70">Hello, sign in</span>
          <span class="text-sm font-bold">Account & Lists</span>
        </div>
      </div>
      <div class="px-2 hover:outline hover:outline-[0.5px] outline-white flex">
        <div class="flex flex-col">
          <span class="text-xs opacity-70">Return</span>
          <span class="text-sm font-bold">& Orders</span>
        </div>
      </div>

      <div class="px-2 hover:outline hover:outline-[0.5px] outline-white flex">
        <div class="flex items-end m-1 relative">
          <span class="text-orange-500 font-bold absolute -top-2 left-4">
            0
          </span>
          <img
            class="w-[38px] object-contain mt-auto"
            src="./public/assets/cart.png"
          />
        </div>
        <div class="flex flex-col justify-end">
          <span class="text-sm font-bold">Cart</span>
        </div>
      </div>
    </nav>
    <nav class="h-10 bg-nav-2 w-full"></nav>
  </header>
);

export default Header;
