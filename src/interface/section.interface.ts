import ShopItem from './shop-item.interface';

interface Section {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl?: string,
  routeName?: string,
  items: ShopItem[]
}

export default Section;