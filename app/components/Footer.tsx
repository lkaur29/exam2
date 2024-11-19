export default function Footer() {
  return (
    <>
      <footer className="mt-10 flex-1 flex-col min-h-24 footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by HopS
            LLC
          </p>
        </aside>
      </footer>
    </>
  );
}
