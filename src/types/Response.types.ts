import { IPhrasesItem, IProfile, IWishlistItem } from "./Profile.types";

export interface IBasicResponse {
    status: number;
    msg: string;
}

export interface IProfileResponse extends IProfile, IBasicResponse { }


export interface IPhraseResponse extends IBasicResponse {
    phrases?: IPhrasesItem[]
}

export interface IWishlistResponse extends IBasicResponse {
    wishlist?: IWishlistItem[],
    shelter?: string
}