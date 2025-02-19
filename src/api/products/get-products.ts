interface Dimensions {
  width: number
  height: number
  depth: number
}

interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  thumbnail: string
  images: string[]
}

export interface Products {
  products: Product[]
  total: number
  skip: number
  limit: number
}

async function getProducts(): Promise<Products | undefined> {
  try {
    const response = await fetch(`https://dummyjson.com/products`, {
      next: { revalidate: 60 },
    })

    const data = (await response.json()) as Products

    return data
  } catch (error) {
    console.log(error)
  }
}
export { getProducts }
