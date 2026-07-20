

const getVehicles = async () => {
  const response = await fetch('https://dummyjson.com/products/category/vehicle');
  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return response.json();
};

const getVehicleBrands = async () => {
  const response = await fetch('https://dummyjson.com/products/category/vehicle?select=brand');
  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return response.json();
};

const getVehicleById = async (id:number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return response.json();
};

export { getVehicles, getVehicleBrands, getVehicleById };