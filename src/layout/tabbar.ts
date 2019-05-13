export interface ITabbarTypes {
  index: number;
  icon: string;
  name: string;
  alias: string;
}

const tabbarConfig: ITabbarTypes[] = [
  {
    index: 0,
    icon: 'lm-ketang',
    name: '课堂',
    alias: 'Clzroom',
  },
  {
    index: 1,
    icon: 'lm-zhanghu',
    name: '我的',
    alias: 'Mine',
  },
];

export default tabbarConfig;
