<template>
  <v-app>
    <section class="main-navbar-section">
      <div class="container" style="align-content: center;">
        <vue-navigation-bar
          :options="navbarOptions"
          @vnb-item-clicked="vnbItemClicked"
        >
        </vue-navigation-bar>
      </div>
    </section>
    <router-view></router-view>
    <section class="main-footer-section">
      <v-footer
        color="grey lighten-3 black--text"
      >
          <v-container fluid class="footer">
              <v-layout row>
                <v-col cols="12" lg="4" md="4" sm="4" xs="12">
                  <div class="address">
                    <strong class="subheading">Contact NARAP</strong>
                    <p>NARAP <br>
                     66 Lilalyn Drive <br>
                     Fairfield, CT 06825 <br>
                     (860) 386-5676 <br>
                     </p>
                  </div>

                </v-col>
                <v-col cols="12" lg="4" md="4" sm="4" xs="12">
                  <a href="mailto:ask@thenarap.org">ask@thenarap.org</a>
                </v-col>
                <v-col cols="12" lg="4" md="4" sm="4" xs="12">
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 blue--text"
                    icon
                    @click="iconLink(icon)"
                    >
                    <v-icon size="44px">{{ icon }}</v-icon>
                    </v-btn>
                </v-col>
              </v-layout>
            </v-container>
          <v-col
            class="grey lighten-3 black--text text-center"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>NARAP</strong>
          </v-col>
      </v-footer>
    </section>
    <login-modal @close="showLogin=false"
                  :dialog="showLogin"/>
  </v-app>
</template>

<script>
import Login from '@/components/loginModal.vue';

export default {
  components: { 'login-modal': Login },
  name: 'app',
  data() {
    return {
      showLogin: false,
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImage: require('./assets/narapmain.png'),
        brandImageAltText: 'brand-image',
        collapseButtonImageOpen: require('./assets/collapse-menu-dark.png'),
        collapseButtonImageClose: require('./assets/times.png'),
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Home',
            path: '/',
          },
          {
            type: 'link',
            text: 'About Us',
            subMenuOptions: [
              {
                type: 'link',
                text: 'About Us',
                path: '/aboutus',
                iconLeft: '<i class="fa fa-user fa-fw"></i>',
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'Our Team',
                path: './ourteam',
                iconLeft: '<i class="fas fa-star"></i>',
              },
            ],
          },
          {
            type: 'link',
            text: 'The Program',
            path: './theprogram',
          },
          {
            type: 'link',
            text: 'Live Data',
            path: './livedata',
          },
          {
            type: 'link',
            text: 'Affiliates',
            path: './affiliates',
          },
          {
            type: 'link',
            text: 'Alumni',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Alumni Association',
                path: './alumniassoc',
                iconLeft: '<i class="fas fa-users"></i>',
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'Mentoring Program',
                path: './alumnimentor',
                iconLeft: '<i class="fas fa-user"></i>',
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'Where Are They Now?',
                path: './alumninow',
                iconLeft: '<i class="fas fa-search-location"></i>',
              },
            ],
          },
          {
            type: 'link',
            text: 'Research',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Research',
                path: './our-research',
                iconLeft: '<i class="fas fa-poll"></i>',
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'Research Associates',
                path: './research-associates',
                iconLeft: '<i class="fas fa-user"></i>',
              },
            ],
          },
          {
            type: 'link',
            text: 'Press Room',
            subMenuOptions: [
              {
                type: 'link',
                text: 'NARAP in the News',
                path: './NARAPInTheNews',
                iconLeft: '<i class="fas fa-tv"></i>',
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'NARAP Magazine',
                path: './NARAPMagazine',
                iconLeft: '<i class="far fa-newspaper"></i>',
              },
            ],
          },
          {
            type: 'link',
            text: 'Support',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Your Support',
                path: './support',
                iconLeft: '<i class="fas fa-users"></i>',
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'NARAP Wish List',
                path: './NARAPWishList',
                iconLeft: '<i class="fas fa-gift"></i>',
              },
            ],
          },
          // {
          //   type: 'button',
          //   text: 'Login',
          //   class: 'button-green',
          //   iconRight:
          //     '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>',
          // },
        ],
      },
      icons: [
        'fab fa-facebook',
        'fab fa-linkedin',
      ],
    };
  },
  methods: {
    vnbItemClicked(text) {
      if (text === 'Login') {
        this.showLogin = !this.showLogin;
      }
    },
    iconLink(icon) {
      if (icon === 'fab fa-facebook') {
        window.open('https://www.facebook.com/thenarap');
      }
      if (icon === 'fab fa-linkedin') {
        window.open('https://www.linkedin.com/company/the-national-alliance-of-research-associates-programs/');
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");
html {
  width: 100%;
  font-size: 18px;
  color: #333;
}
body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}
#app {
  height: auto;
  max-width: 100%;
  line-height: 1.5;
}
.code-text {
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

.address{
  font-size: 15px;
  font-weight: 300;
  max-width: 100%;
  margin-bottom: 0% !important;
}

.main-footer-section{
  max-width: 100%;
  bottom: 0;
}

.footer{
  margin: 0 auto;
  margin-left: 20%;
  max-width: 70%;
  margin-bottom: -20px;
}

.donate{
  width: 150px;
  }

.news{
  width: 100px;
  margin-right: 50px;
}
.register{
  font-size: 10px;
  margin-top: 3%;
}

.header{
  font-size: 15px;
}

.btn{
  margin-top: 10%;
}


@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}
.btn {
  text-transform: uppercase;
  font-weight: bold;
}
.main-content-section {
  padding: 45px 0;
  background: #eee;
  height: 95vh;
}
//
// vue-navigation-bar customization below
//
.main-navbar-section {
  background: #fff;
}
.vnb {
  font-family: "Montserrat", sans-serif;
  .button-green {
    background: green;
    color: #ffffff;
    &:hover {
      background: darken(green, 10%);
    }
  }
  &__menu-options {
    &__option {
      &__button {
        &__icon {
          svg {
            margin-top: -3px;
          }
        }
      }
    }
  }
  &__popup {
    &__bottom {
      &__menu-options {
        &__option {
          &__link {
            &__icon {
              svg {
                margin-top: -4px;
              }
            }
          }
        }
      }
    }
  }
  .custom-section-content {
    width: 100%;
    @media (min-width: 568px) {
      width: 50%;
    }
    @media (min-width: 992px) {
      width: 15%;
    }
    @media (min-width: 1200px) {
      width: 20%;
    }
  }
    &__menu-options {
      &__option {
        &__link {
          color: #333 !important;
        }
      }
    }
    &__sub-menu-options {
      &__option {
        &__link {
          color: #333 !important;
        }
      }
    }
}
</style>
