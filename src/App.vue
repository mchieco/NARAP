<template>
  <div id="app">
    <section class="main-navbar-section">
      <div class="container">
        <vue-navigation-bar
          :options="navbarOptions"
          @vnb-item-clicked="vnbItemClicked"
        >
          <!-- Custom Slot - Uncomment to use -->
          <!-- <template v-slot:custom-section>
            <div class="custom-section-content">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </template> -->
        </vue-navigation-bar>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImage: require('@/assets/narap_logo.png'),
        brandImageAltText: 'brand-image',
        collapseButtonImageOpen: require('@/assets/collapse-menu-dark.png'),
        collapseButtonImageClose: require('@/assets/times.png'),
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Home',
            path: './',
          },
          {
            type: 'link',
            text: 'About Us',
            subMenuOptions: [
              {
                type: 'link',
                text: 'About Us',
                path: './aboutus',
                iconLeft: '<i class="fa fa-user fa-fw"></i>',
              },
              {
                type: 'link',
                text: 'Our Team',
                path: './ourteam',
                iconLeft: '<i class="fa fa-star fa-fw"></i>',
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
            text: 'Affiliates',
            path: './affiliates',
          },
          {
            type: 'link',
            text: 'Alumni',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Mentoring Program',
                path: './alumnimentor',
                iconLeft: '<i class="fa fa-user fa-fw"></i>',
              },
              {
                type: 'link',
                text: 'Where Are They Now?',
                path: './alumninow',
                iconLeft: '<i class="fa fa-star fa-fw"></i>',
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
                path: './research',
                iconLeft: '<i class="fa fa-user fa-fw"></i>',
              },
              {
                type: 'link',
                text: 'Research Associates',
                path: './researchassociates',
                iconLeft: '<i class="fa fa-star fa-fw"></i>',
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
                path: './inthenews',
                iconLeft: '<i class="fa fa-user fa-fw"></i>',
              },
              {
                type: 'link',
                text: 'News Magazine',
                path: './newmagazine',
                iconLeft: '<i class="fa fa-star fa-fw"></i>',
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
                path: './yoursupport',
                iconLeft: '<i class="fa fa-user fa-fw"></i>',
              },
              {
                type: 'link',
                text: 'Wish List',
                path: './wishlist',
                iconLeft: '<i class="fa fa-star fa-fw"></i>',
              },
            ],
          },
        ],
        menuOptionsRight: [
          {
            type: 'button',
            text: 'Login',
            path: './login',
            iconRight:
              '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>',
          },
        ],
      },
    };
  },
  methods: {
    vnbItemClicked(text) {
      if (text === 'About') {
        alert("'About' was selected.");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
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
  height: 100%;
  height: 100vh;
  width: 100%;
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
@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}
.btn {
  text-transform: uppercase;
  font-weight: bold;
}
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
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
  .button-red {
    background: #ff3b30;
    &:hover {
      background: darken(#ff3b30, 10%);
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
}
</style>
