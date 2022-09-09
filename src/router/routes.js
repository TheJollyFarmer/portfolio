import { h } from "vue";
import VRouter from "@/components/utility/VRouter";

const AboutView = () => h(VRouter, { component: "about" });
const PortfolioView = () => h(VRouter, { component: "portfolio" });

AboutView.displayName = "AboutView";
PortfolioView.displayName = "PortfolioView";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("@/views/WelcomeView"),
    meta: { index: 0 }
  },
  {
    path: "/about/",
    name: "about",
    component: AboutView,
    meta: { index: 1 },
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/about/HomeView"),
        meta: { index: 0 }
      },
      {
        path: "moi",
        name: "moi",
        component: () => import("@/views/about/MoiView"),
        meta: { index: 1 }
      },
      {
        path: "interests",
        name: "interests",
        component: () => import("@/views/about/InterestsView"),
        meta: { index: 2 }
      },
      {
        path: "skills",
        name: "skills",
        component: () => import("@/views/about/SkillsView"),
        meta: { index: 3 }
      }
    ]
  },
  {
    path: "/portfolio/",
    name: "portfolio",
    component: PortfolioView,
    meta: { index: 2 },
    children: [
      {
        path: "",
        name: "aphelion",
        component: () => import("@/views/portfolio/HomeView"),
        meta: { index: 0 }
      },
      {
        path: "sol",
        name: "sol",
        component: () => import("@/views/portfolio/SolView"),
        meta: { index: 1 }
      },
      {
        path: "tft",
        name: "tft",
        component: () => import("@/views/portfolio/TFTView"),
        meta: { index: 2 }
      }
    ]
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView"),
    meta: { index: 3 }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

export default routes;
