import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div class="h-30 w-100 p-6 mx-auto bg-white rounded-xl shadow-lg flex flex-row items-center space-x-4">
      <div class="shrink-0 flex-auto">
        <img class="h-50 w-50" src={logo} alt="" />
      </div>
      <div class="shrink-0 flex-auto w-70">
        <ul class="flex flex-row">
          <li class="flex-auto text-xl font-medium text-black">About us</li>
          <li class="flex-auto text-xl font-medium text-black">Services</li>
          <li class="flex-auto text-xl font-medium text-black">The Team</li>
          <li class="flex-auto text-xl font-medium text-black">Locations</li>
        </ul>
      </div>
      <div class="shrink-0 flex-auto w-50 mx-5">
        <ul class="flex flex-row-reverse">
          <li class="flex-auto text-xl font-medium text-black">a</li>
          <li class="flex-auto text-xl font-medium text-black">b</li>
          <li class="flex-auto text-xl font-medium text-black">c</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
