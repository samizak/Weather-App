export default async function Home() {
  const curYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-between min-h-screen text-white bg-gray-800">
      <header className="h-10 mx-auto my-8">
        <input className="px-6 py-2 rounded-xl"></input>
      </header>

      {/* <ul>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
        <li>Test 4</li>
        <li>Test 5</li>
      </ul> */}

      <main className="flex flex-col justify-center w-8/12 mx-auto text-center">
        <p>London, GB</p>

        <div className="flex flex-col gap-6 mx-auto">
          <div className="flex flex-row">
            <h1 className="text-8xl">23.0</h1>
            <div className="h-full my-auto text-2xl">
              <div className="p-2 m-auto font-bold transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-600">
                °C
              </div>
              <div className="p-2 m-auto font-bold text-gray-400 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-600">
                °F
              </div>
            </div>
          </div>

          <div className="text-xl">
            <div className="italic">
              <span>22.9 °C</span> / <span>26.3 °C</span>
            </div>
            <p>Broken clouds</p>
          </div>
        </div>

        <div className="grid grid-flow-row-dense grid-cols-1 gap-8 mt-8 text-xl text-center sm:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">Pressure</p>
            <p className="text-xl">
              1016 <span className="text-gray-400">hPa</span>
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Wind</p>
            <p className="text-xl">
              2 <span className="text-gray-400">km/h</span>
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Feels like</p>
            <p className="text-xl">
              24.1 <span className="text-gray-400">°C</span>
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Humidity</p>
            <p className="text-xl">
              72 <span className="text-gray-400">%</span>
            </p>
          </div>
        </div>
      </main>

      <footer className="h-10 my-8 text-sm text-center sm:text-xl">
        <p>Copyright ©{curYear} samizak</p>
      </footer>
    </div>
  );
}
