import router from '@/router/index.ts';
import { Toast } from 'vant';
import { getAuth } from '@/lib/auth';
router.beforeEach((to, from, next) => {
  loading();
  if (to.meta.requireAuth) {
    if (getAuth()) {
      next();
    } else {
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  clear();
});

export function loading() {
  Toast.loading({
    mask: true,
    message: '加载中...',
  });
}

export function clear() {
  Toast.clear();
}

window.addEventListener(
  'popstate',
  () => {
    (router as any).isBack = true;
  },
  {
    passive: false,
  },
);
