import { createSelector } from "reselect";

const selectShop =  (state) => state.shop

export const selectShopData = createSelector(
    [selectShop],
    shop => {
        const collections = [];
        for (const property in shop.shopData) {
            collections.push(shop.shopData[property])
          }
        return collections;
    }
)

export const selectShopCollection = urlParam => 
createSelector(
    [selectShop],
    shop => shop.shopData[urlParam]
)