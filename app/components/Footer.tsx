export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="h-10 my-8 text-sm text-center sm:text-xl">
      <p>Copyright © {curYear} samizak</p>
    </footer>
  );
}
