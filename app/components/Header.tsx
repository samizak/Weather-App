"use client";

export default function SearchInput() {
  return (
    <header className="h-10 mx-auto my-8">
      <form
        className="flex flex-row justify-between px-4 py-2 text-white align-middle border-2 border-gray-400 rounded-2xl"
        onSubmit={onSubmitHandler}
      >
        <input placeholder="Enter a city" className="bg-transparent outline-none appearance-none" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 m-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>
    </header>
  );
}

function onSubmitHandler(event: any) {
  event.preventDefault();
  location.href = `/${event.target.children[0].value}`;
}
