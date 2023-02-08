export const initialData = {
  columns: [
    {
      id: 'column-1',
      columnIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640424/dimension-technical-test-frontend/kanban-columns/todo/todo-icon_uge29o.png',
      title: 'TODO',
      addGrayIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751048/dimension-technical-test-frontend/kanban-columns/todo/add_mujhqc.png',
      dotsIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751198/dimension-technical-test-frontend/kanban-columns/todo/heroicons-solid_dots-horizontal_yf6zy7.png',
      addPurpleIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675757030/dimension-technical-test-frontend/kanban-columns/todo/add_ap01pj.png',
      cards: [
        {
          id: 'FLYTE-1',
          title: 'UX Adjustments',
          previewImage: '',
          imageWidth: 0,
          imageHeight: 0,
          description:
            'Make UI/UX revisions for the project management dashboard on Figma.',
          topic: 'Research',
          users: [
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675642349/dimension-technical-test-frontend/kanban-columns/todo/ux-adjustments/avatar-girl_vtzspu.png',
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675642349/dimension-technical-test-frontend/kanban-columns/todo/ux-adjustments/avatar-guy_zy5sle.png',
          ],
          extraUsers: null,
          numberOfComments: '3',
          numberOfChecks: {
            checked: '0',
            total: '2',
          },
          numberOfLinks: '0',
          dateCreated: '',
          status: 'TODO',
        },
        {
          id: 'FLYTE-2',
          title: 'Moodboards',
          previewImage:
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675808710/dimension-technical-test-frontend/kanban-columns/todo/moodboards/moodboard-preview_hqfzo2.png',

          imageWidth: 212,
          imageHeight: 80,
          description: '',
          topic: 'UI Design',
          users: [
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640424/dimension-technical-test-frontend/kanban-columns/todo/moodboards/avatar-guy-2_adsfnw.png',
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640424/dimension-technical-test-frontend/kanban-columns/todo/moodboards/avatar-guy-1_atlvpl.png',
          ],
          extraUsers: null,
          numberOfComments: '2',
          numberOfChecks: {
            checked: '0',
            total: '2',
          },
          numberOfLinks: '2',
          dateCreated: 'Nov 23',
          status: 'TODO',
        },
      ],
    },
    {
      id: 'column-2',
      columnIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/in-progress-icon_ndkeg7.png',
      title: 'IN PROGRESS',
      addGrayIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751048/dimension-technical-test-frontend/kanban-columns/todo/add_mujhqc.png',
      dotsIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751198/dimension-technical-test-frontend/kanban-columns/todo/heroicons-solid_dots-horizontal_yf6zy7.png',
      addPurpleIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675757030/dimension-technical-test-frontend/kanban-columns/todo/add_ap01pj.png',
      cards: [
        {
          id: 'FLYTE-3',
          title: 'Dashboard Design',
          previewImage:
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675809488/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/dashboard-design-preview_qstu28.png',
          imageWidth: 212,
          imageHeight: 88,
          description: '',
          topic: 'UI Design',
          users: [
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/avatar-guy-2_pebzbq.png',
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/avatar-guy-1_c3e3gc.png',
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/avatar-girl_n92xey.png',
          ],
          extraUsers: null,
          numberOfComments: '5',
          numberOfChecks: {
            checked: '4',
            total: '8',
          },
          numberOfLinks: '1',
          dateCreated: 'Jun 20',
          status: 'TODO',
        },
        {
          id: 'FLYTE-4',
          title: 'Design System',
          previewImage: '',
          imageWidth: 0,
          imageHeight: 0,
          description:
            'Create a consistent look and feel both on web and mobile',
          topic: 'UI Design',
          users: [
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/avatar-guy-2_pebzbq.png',
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/avatar-guy-1_c3e3gc.png',
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/avatar-girl_n92xey.png',
          ],
          extraUsers: '3',
          numberOfComments: '5',
          numberOfChecks: {
            checked: '4',
            total: '8',
          },
          numberOfLinks: '0',
          dateCreated: 'May 20',
          status: 'TODO',
        },
      ],
    },
    {
      id: 'column-3',
      columnIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640423/dimension-technical-test-frontend/kanban-columns/completed/tick-circle_jn0oyt.png',
      title: 'COMPLETED',
      addGrayIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751048/dimension-technical-test-frontend/kanban-columns/todo/add_mujhqc.png',
      dotsIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751198/dimension-technical-test-frontend/kanban-columns/todo/heroicons-solid_dots-horizontal_yf6zy7.png',
      addPurpleIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675757030/dimension-technical-test-frontend/kanban-columns/todo/add_ap01pj.png',
      cards: [
        {
          id: 'FLYTE-5',
          title: 'Presentation',
          previewImage: '',
          imageWidth: 0,
          imageHeight: 0,
          description:
            'Help business to clearly define their anuual e-commerce digital strategy by creating a high-level plan.',
          topic: 'Planning',
          users: [
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640423/dimension-technical-test-frontend/kanban-columns/completed/presentation/avatar-guy-1_vr2roj.png',
          ],
          extraUsers: null,
          numberOfComments: '11',
          numberOfChecks: {
            checked: '0',
            total: '0',
          },
          numberOfLinks: '0',
          dateCreated: '',
          status: 'COMPLETED',
        },
        {
          id: 'FLYTE-6',
          title: 'Brainstorming',
          previewImage: '',
          imageWidth: 0,
          imageHeight: 0,
          description: '',
          topic: 'Research',
          users: [
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640423/dimension-technical-test-frontend/kanban-columns/completed/brainstorming/avatar-girl_vikdtb.png',
            'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640423/dimension-technical-test-frontend/kanban-columns/completed/brainstorming/avatar-guy_k2bjlu.png',
          ],
          extraUsers: null,
          numberOfComments: '12',
          numberOfChecks: {
            checked: '0',
            total: '0',
          },
          numberOfLinks: '0',
          dateCreated: '',
          status: 'COMPLETED',
        },
      ],
    },
    {
      id: 'column-4',
      columnIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640424/dimension-technical-test-frontend/kanban-columns/todo/todo-icon_uge29o.png',
      title: 'FAKE COLUMN',
      addGrayIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751048/dimension-technical-test-frontend/kanban-columns/todo/add_mujhqc.png',
      dotsIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751198/dimension-technical-test-frontend/kanban-columns/todo/heroicons-solid_dots-horizontal_yf6zy7.png',
      addPurpleIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675757030/dimension-technical-test-frontend/kanban-columns/todo/add_ap01pj.png',
      cards: [
        {
          id: 'FLYTE-0',
          title: '',
          previewImage: '',
          imageWidth: 0,
          imageHeight: 0,
          description: '',
          topic: '',
          users: [],
          extraUsers: null,
          numberOfComments: '',
          numberOfChecks: {
            checked: '',
            total: '',
          },
          numberOfLinks: '',
          dateCreated: '',
          status: '',
        },
      ],
    },
    {
      id: 'column-5',
      columnIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640424/dimension-technical-test-frontend/kanban-columns/todo/todo-icon_uge29o.png',
      title: 'FAKE COLUMN',
      addGrayIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751048/dimension-technical-test-frontend/kanban-columns/todo/add_mujhqc.png',
      dotsIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751198/dimension-technical-test-frontend/kanban-columns/todo/heroicons-solid_dots-horizontal_yf6zy7.png',
      addPurpleIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675757030/dimension-technical-test-frontend/kanban-columns/todo/add_ap01pj.png',
      cards: [
        {
          id: 'FLYTE-0',
          title: '',
          previewImage: '',
          imageWidth: 0,
          imageHeight: 0,
          description: '',
          topic: '',
          users: [],
          extraUsers: null,
          numberOfComments: '',
          numberOfChecks: {
            checked: '',
            total: '',
          },
          numberOfLinks: '',
          dateCreated: '',
          status: '',
        },
      ],
    },
    {
      id: 'column-6',
      columnIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640424/dimension-technical-test-frontend/kanban-columns/todo/todo-icon_uge29o.png',
      title: 'FAKE COLUMN',
      addGrayIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751048/dimension-technical-test-frontend/kanban-columns/todo/add_mujhqc.png',
      dotsIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675751198/dimension-technical-test-frontend/kanban-columns/todo/heroicons-solid_dots-horizontal_yf6zy7.png',
      addPurpleIcon:
        'https://res.cloudinary.com/dryh1nvhk/image/upload/v1675757030/dimension-technical-test-frontend/kanban-columns/todo/add_ap01pj.png',
      cards: [
        {
          id: 'FLYTE-0',
          title: '',
          previewImage: '',
          imageWidth: 0,
          imageHeight: 0,
          description: '',
          topic: '',
          users: [],
          extraUsers: null,
          numberOfComments: '',
          numberOfChecks: {
            checked: '',
            total: '',
          },
          numberOfLinks: '',
          dateCreated: '',
          status: '',
        },
      ],
    },
  ],
};
