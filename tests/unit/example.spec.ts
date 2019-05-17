import { shallowMount } from '@vue/test-utils';
import Avatar from '@/components/avatar/index.vue';

describe('Avatar.vue', () => {
  it('renders props.avatar when passed', () => {
    const avatar = 'new message';
    const wrapper = shallowMount(Avatar, {
      propsData: { avatar },
    });
    expect(wrapper.props('avatar')).toMatch(avatar);
  });
});
