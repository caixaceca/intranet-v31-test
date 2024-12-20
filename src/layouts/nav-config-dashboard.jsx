import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    items: [{ title: 'Início', path: paths.root, icon: ICONS.dashboard }],
  },
  /**
   * Overview
   */
  {
    subheader: 'Overview',
    items: [
      { title: 'App', path: paths.general.app, icon: ICONS.dashboard },
      { title: 'Ecommerce', path: paths.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'Analytics', path: paths.general.analytics, icon: ICONS.analytics },
      { title: 'Banking', path: paths.general.banking, icon: ICONS.banking },
      { title: 'Booking', path: paths.general.booking, icon: ICONS.booking },
      { title: 'File', path: paths.general.file, icon: ICONS.file },
      { title: 'Course', path: paths.general.course, icon: ICONS.course },
    ],
  },
  /**
   * Management
   */
  {
    subheader: 'Management',
    items: [
      {
        title: 'User',
        path: paths.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Profile', path: paths.user.root },
          { title: 'Cards', path: paths.user.cards },
          { title: 'List', path: paths.user.list },
          { title: 'Create', path: paths.user.new },
          { title: 'Edit', path: paths.user.demo.edit },
          { title: 'Account', path: paths.user.account },
        ],
      },
      {
        title: 'Product',
        path: paths.product.root,
        icon: ICONS.product,
        children: [
          { title: 'List', path: paths.product.root },
          { title: 'Details', path: paths.product.demo.details },
          { title: 'Create', path: paths.product.new },
          { title: 'Edit', path: paths.product.demo.edit },
        ],
      },
      {
        title: 'Order',
        path: paths.order.root,
        icon: ICONS.order,
        children: [
          { title: 'List', path: paths.order.root },
          { title: 'Details', path: paths.order.demo.details },
        ],
      },
      {
        title: 'Invoice',
        path: paths.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'List', path: paths.invoice.root },
          { title: 'Details', path: paths.invoice.demo.details },
          { title: 'Create', path: paths.invoice.new },
          { title: 'Edit', path: paths.invoice.demo.edit },
        ],
      },
      {
        title: 'Blog',
        path: paths.post.root,
        icon: ICONS.blog,
        children: [
          { title: 'List', path: paths.post.root },
          { title: 'Details', path: paths.post.demo.details },
          { title: 'Create', path: paths.post.new },
          { title: 'Edit', path: paths.post.demo.edit },
        ],
      },
      {
        title: 'Job',
        path: paths.job.root,
        icon: ICONS.job,
        children: [
          { title: 'List', path: paths.job.root },
          { title: 'Details', path: paths.job.demo.details },
          { title: 'Create', path: paths.job.new },
          { title: 'Edit', path: paths.job.demo.edit },
        ],
      },
      {
        title: 'Tour',
        path: paths.tour.root,
        icon: ICONS.tour,
        children: [
          { title: 'List', path: paths.tour.root },
          { title: 'Details', path: paths.tour.demo.details },
          { title: 'Create', path: paths.tour.new },
          { title: 'Edit', path: paths.tour.demo.edit },
        ],
      },
      { title: 'File manager', path: paths.fileManager, icon: ICONS.folder },
      {
        title: 'Mail',
        path: paths.mail,
        icon: ICONS.mail,
        info: (
          <Label color="error" variant="inverted">
            +32
          </Label>
        ),
      },
      { title: 'Chat', path: paths.chat, icon: ICONS.chat },
      { title: 'Calendar', path: paths.calendar, icon: ICONS.calendar },
      { title: 'Kanban', path: paths.kanban, icon: ICONS.kanban },
    ],
  },
  /**
   * Item State
   */
  {
    subheader: 'Misc',
    items: [
      {
        // default roles : All roles can see this entry.
        // roles: ['user'] Only users can see this item.
        // roles: ['admin'] Only admin can see this item.
        // roles: ['admin', 'manager'] Only admin/manager can see this item.
        // Reference from 'src/guards/RoleBasedGuard'.
        title: 'Permission',
        path: paths.permission,
        icon: ICONS.lock,
        roles: ['admin', 'manager'],
        caption: 'Only admin can see this item',
      },
      {
        title: 'Level',
        path: '#/menu_level',
        icon: ICONS.menuItem,
        children: [
          {
            title: 'Level 1a',
            path: '#/menu_level/menu_level_1a',
            children: [
              { title: 'Level 2a', path: '#/menu_level/menu_level_1a/menu_level_2a' },
              {
                title: 'Level 2b',
                path: '#/menu_level/menu_level_1a/menu_level_2b',
                children: [
                  {
                    title: 'Level 3a',
                    path: '#/menu_level/menu_level_1a/menu_level_2b/menu_level_3a',
                  },
                  {
                    title: 'Level 3b',
                    path: '#/menu_level/menu_level_1a/menu_level_2b/menu_level_3b',
                  },
                ],
              },
            ],
          },
          { title: 'Level 1b', path: '#/menu_level/menu_level_1b' },
        ],
      },
      {
        title: 'Disabled',
        path: '#disabled',
        icon: ICONS.disabled,
        disabled: true,
      },
      {
        title: 'Label',
        path: '#label',
        icon: ICONS.label,
        info: (
          <Label
            color="info"
            variant="inverted"
            startIcon={<Iconify icon="solar:bell-bing-bold-duotone" />}
          >
            NEW
          </Label>
        ),
      },
      {
        title: 'Caption',
        path: '#caption',
        icon: ICONS.menuItem,
        caption:
          'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
      },
      {
        title: 'Params',
        path: '/params?id=e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
        icon: ICONS.parameter,
      },
      {
        title: 'External link',
        path: 'https://www.google.com/',
        icon: ICONS.external,
        info: <Iconify width={18} icon="prime:external-link" />,
      },
      { title: 'Blank', path: paths.blank, icon: ICONS.blank },
    ],
  },
];
