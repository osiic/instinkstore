export async function getApi(url, props = { next: { revalidate: 10 }}) {
  const req = await fetch(url, props)
  const res = await req.json()
  return res
}