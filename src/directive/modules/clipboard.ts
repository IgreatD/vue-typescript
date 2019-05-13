import Clipboard from 'clipboard';
import { DirectiveOptions } from 'vue';
import { DirectiveBinding } from 'vue/types/options';
interface IElProps extends HTMLElement {
  __clipboard__?: any;
  __success_callback__?: (e: Clipboard.Event) => void;
  __error_callback__?: (e: Clipboard.Event) => void;
}

const directive: DirectiveOptions = {
  bind: (el: IElProps, binding: DirectiveBinding, vnode) => {
    const clipboard = new Clipboard(el, {
      text: () => binding.value.value,
    });

    el.__success_callback__ = binding.value.success;
    el.__error_callback__ = binding.value.error;
    clipboard.on('success', (e: Clipboard.Event) => {
      const callback = el.__success_callback__;
      callback && callback(e); // tslint:disable-line
    });
    clipboard.on('error', (e: Clipboard.Event) => {
      const callback = el.__error_callback__;
      callback && callback(e); // tslint:disable-line
    });
    el.__clipboard__ = clipboard;
  },
  update: (el: IElProps, binding: DirectiveBinding) => {
    el.__clipboard__.text = () => binding.value.value;
    el.__success_callback__ = binding.value.success;
    el.__error_callback__ = binding.value.error;
  },
  unbind: (el: IElProps) => {
    delete el.__success_callback__;
    delete el.__error_callback__;
    el.__clipboard__.destroy();
    delete el.__clipboard__;
  },
};

export default directive;
