import { useCallback, useState } from "react";
import { Get, Add } from "../../../shared/utils/Storage";
import { notifySuccess, notifyWarn } from "../../../shared/utils/Tostify";

export default function useCart() {

       const [_, setRefresh] = useState(0)

       const add = (id , max = null) => {
              const cart = Get("cart");
              if (!cart) {
                     Add("cart", [{ productId: id, quantity: 1 }]);
                     notifySuccess("محصول به سبد خرید افزوده شد");
              } else {
                     const item = cart.filter(item => item.productId === id)[0];
                     if (item) {
                            const newData = cart.filter(item => item.productId !== id);
                            if (max && item.quantity >= max) return
                            Add("cart", [...newData, { ...item, quantity: item.quantity + 1 }]);
                     } else {
                            Add("cart", [...cart, { productId: id, quantity: 1 }]);
                            notifySuccess("محصول به سبد خرید افزوده شد");
                     }
              }
              setRefresh(prev => prev + 1)
       }
       const has = (id) => {
              const cart = Get("cart");
              if (!cart) return false;
              return cart.filter(item => item.productId === Number(id))[0];
       }
       const deleteItem = (id) => {
              const cart = Get("cart");
              if (!cart) return false;
              const item = cart.filter(item => item.productId === id)[0];
              if (item) {
                     const newData = cart.filter(item => item.productId !== id);
                     if (item.quantity <= 1) {
                            Add("cart", [...newData]);
                            notifyWarn("محصول از سبد خرید حذف شد")
                     } else {
                            Add("cart", [...newData, { ...item, quantity: item.quantity - 1 }]);
                     }
              }
              setRefresh(prev => prev + 1)
       }

       return {
              add,
              get: Get("cart"),
              has,
              deleteItem
       }
}
