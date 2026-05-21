export async function fetchProducts() {
  const res = await fetch(
    "https://test-case-kencana-frontend.vercel.app/api/products",
    {
      cache: "no-store",
    },
  );

  return res.json();
}
