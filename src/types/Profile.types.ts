export interface IWishlistItem {
  _id: string;
  title: string;
  link: string;
}

export interface IPhrasesItem {
  _id: string;
  title: string;
}

export interface IProfile {
  _id?: string;
  email?: string;
  avatar?: string;
  fullName?: string;
  cashTag?: string;
  bio?: string;
  shelter?: string
  phrase?: IPhrasesItem;
  wishlist?: IWishlistItem[];
}


