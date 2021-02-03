export interface ThemeState {
  value: boolean;
}

export interface State {
  themes: ThemeState
  basket: ProductItem[]
}
 
export interface ProductItem {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
    added?: boolean
  }