const Main = () => {
  return (
    <div class="h-30 w-100 p-6 mx-auto bg-stone-900 shadow-lg flex flex-row items-center space-x-4">
      <div class="shrink-0 flex-auto w-70">
        <ul class="flex flex-row">
          <li class="flex-auto text-xl font-medium text-amber-500">Main</li>
        </ul>
      </div>

      <div class="shrink-0 flex-auto w-50 mx-5">
        <ul class="flex flex-row-reverse">
          <li class="flex-auto text-xl font-medium text-black">a</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
