
const fetchData = async() => {
  const resp = await fetch('https://api.odcloud.kr/api/15048755/v1/uddi:fec53d3a-2bef-4494-b50e-f4e566f403e0?page=1&perPage=10&serviceKey=q3ByT7Lo3VPWAu5gWZph%2BDvh94We%2FMig302qV4pPNYdNwMOzX2daS3uT4QeJ5uu5wnk%2BALmuiyyQ7k3HvmjdZQ%3D%3D');

  const data = await resp.json();
  console.log(data);
}
export default fetchData;