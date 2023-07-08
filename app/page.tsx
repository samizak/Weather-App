import Footer from "./components/Footer";
import SearchInput from "./components/Header";

export default async function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen text-white bg-gray-800">
      <SearchInput />

      <main className="flex flex-col gap-8 px-4 mx-auto text-center sm:w-1/2">
        <h1 className="text-4xl">Welcome to the Weather App</h1>
        <p className="text-xl">To check the current weather, use the input field above and enter a city name.</p>
      </main>

      <Footer />
    </div>
  );
}
