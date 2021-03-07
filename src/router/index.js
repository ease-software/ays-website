import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/categories/:id",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/Category.vue"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
  },
  {
    path: "/apartments",
    name: "Apartments",
    component: () =>
      import(
        /* webpackChunkName: "apartments" */ "../views/RentApartments.vue"
      ),
  },
  {
    path: "/apartments/:category_slug",
    name: "Apartment Category",
    component: () =>
      import(
        /* webpackChunkName: "apartment_category" */ "../views/ApartmentsCategory.vue"
      ),
  },
  {
    path: "/apartments/:category_slug/:offer",
    name: "Rent Offer",
    component: () =>
      import(/* webpackChunkName: "rent_offer" */ "../views/RentOffer.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue"),
  },
];

// const routesWithLang = [
//   {
//     path: "/:lang",
//     component: {
//       render(h) {
//         return h("router-view");
//       },
//     },
//     children: routes,
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
      return { x: 0, y: 0 };
    }
  },
});

export default router;
