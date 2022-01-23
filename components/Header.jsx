import generativeart from "../assets/generativeart.gif";

const Header = () => {
  return (
    <div class="h-auto w-100 p-6 mx-auto bg-black rounded-xl shadow-lg flex flex-row items-center space-x-4">
      <div class="shrink-0 flex-1 w-70 h-5/6 z-2">
        <ul class="flex flex-col">
          <li class="flex-auto text-slate-300 text-9xl font-semibold text-white my-5 text-center">
            ABCD
          </li>
        </ul>
        <ul class="flex flex-col">
          <li class="flex-auto text-xl font-medium text-white my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            praesentium, quibusdam, aliquam voluptates adipisci placeat
            blanditiis quia illo velit et rem maxime? Dolorem expedita pariatur
            ab ducimus ex optio sapiente fugit modi a, delectus minima unde quam
            aliquid, labore obcaecati, quia consectetur. Hic officiis aliquam,
            vel repudiandae quam quos suscipit facere earum sunt id ad dicta
            repellendus! Dolorum est neque suscipit qui enim? Exercitationem
            natus consequatur vero accusamus, beatae dignissimos, velit
            molestias dicta illo minus, similique culpa facere cupiditate quia!
            Inventore laudantium voluptatum odit, tempora, consequuntur, quasi
            eius exercitationem facere incidunt voluptatem ratione numquam
            tempore beatae architecto possimus perspiciatis in!
          </li>
          <li class="flex-auto text-xl font-medium text-white my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            praesentium, quibusdam, aliquam voluptates adipisci placeat
            blanditiis quia illo velit et rem maxime? Dolorem expedita pariatur
            ab ducimus ex optio sapiente fugit modi a, delectus minima unde quam
            aliquid, labore obcaecati, quia consectetur. Hic officiis aliquam,
            vel repudiandae quam quos suscipit facere earum sunt id ad dicta
            repellendus! Dolorum est neque suscipit qui enim? Exercitationem
            natus consequatur vero accusamus, beatae dignissimos, velit
            molestias dicta illo minus, similique culpa facere cupiditate quia!
            Inventore laudantium voluptatum odit, tempora, consequuntur, quasi
            eius exercitationem facere incidunt voluptatem ratione numquam
            tempore beatae architecto possimus perspiciatis in!
          </li>
          <li class="flex-auto text-xl font-medium text-white my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            praesentium, quibusdam, aliquam voluptates adipisci placeat
            blanditiis quia illo velit et rem maxime? Dolorem expedita pariatur
            ab ducimus ex optio sapiente fugit modi a, delectus minima unde quam
            aliquid, labore obcaecati, quia consectetur. Hic officiis aliquam,
            vel repudiandae quam quos suscipit facere earum sunt id ad dicta
            repellendus! Dolorum est neque suscipit qui enim? Exercitationem
            natus consequatur vero accusamus, beatae dignissimos, velit
            molestias dicta illo minus, similique culpa facere cupiditate quia!
            Inventore laudantium voluptatum odit, tempora, consequuntur, quasi
            eius exercitationem facere incidunt voluptatem ratione numquam
            tempore beatae architecto possimus perspiciatis in!
          </li>
        </ul>
        <ul class="flex flex-col">
          <li class="flex-auto bg-slate-200 text-9xl font-semibold text-white my-10 text-center">
            ABCD
          </li>
        </ul>
      </div>
      <div class="shrink-0 flex-1 w-1000 h-5/6 mr-0 relative">
        <li class="flex-auto bg-transparent text-2xl font-medium text-slate-400 my-60 text-center z-30 absolute inset-0 items-center justify-center opacity-0 hover:opacity-100 duration-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          praesentium, quibusdam, aliquam voluptates adipisci placeat blanditiis
          quia illo velit et rem maxime? Dolorem expedita pariatur ab ducimus ex
          optio sapiente fugit modi a, delectus minima unde quam aliquid, labore
          obcaecati, quia consectetur. Hic officiis aliquam, vel repudiandae
          quam quos suscipit facere earum sunt id ad dicta repellendus! Dolorum
          est neque suscipit qui enim? Exercitationem natus consequatur vero
          accusamus, beatae dignissimos, velit molestias dicta illo minus,
          similique culpa facere cupiditate quia! Inventore laudantium
          voluptatum odit, tempora, consequuntur, quasi eius exercitationem
          facere incidunt voluptatem ratione numquam tempore beatae architecto
          possimus perspiciatis in!.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </li>
        <img
          class="h-screen w-screen mr-0 items-py8 flex flex-wrap content-center"
          src={generativeart}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
