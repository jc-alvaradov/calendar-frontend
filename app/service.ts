export async function query() {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`).then((res) =>
    res.json().then((data) => data.data)
  );
}
