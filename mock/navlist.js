var data = [{
        path: '/home',
        name: '首页',
        icon: 'el-icon-star-on'
    },
    {
        name: '系统组件',
        icon: 'el-icon-menu',
        child: [{
                name: '介绍',
                path: '/components',
                icon: 'el-icon-info',
                permission: ['query', 'add', 'edit', 'delete']
            },
            {
                name: '功能类',
                icon: 'el-icon-info',
                child: [{
                        path: '/components/permission',
                        name: '详细鉴权'
                    },
                    {
                        path: '/components/pageTable',
                        name: '表格分页'
                    }
                ]
            },
            {
                name: '布局类',
                icon: 'el-icon-info',
                child: [{
                        name: '页面标题',
                        path: '/components/pageTitle',
                        permission: ['query', 'add', 'edit', 'delete']
                    },
                    {
                        name: '子区域',
                        path: '/components/pageSection',
                        permission: ['query', 'add', 'edit', 'delete']
                    },
                    {
                        name: '搜索条',
                        path: '/components/pageSearch',
                        permission: ['query', 'add', 'edit', 'delete']
                    },
                    {
                        name: '工具条',
                        path: '/components/pageToolbar',
                        permission: ['query', 'add', 'edit', 'delete']
                    }
                ]
            },
            {
                name: '辅助类',
                icon: 'el-icon-info',
                child: [{
                    name: '引用说明',
                    path: '/components/pageNotes',
                    permission: ['query', 'add', 'edit', 'delete']
                }]
            }
        ]
    },
    {
        name: '完整示例',
        icon: 'el-icon-location',
        child: [{
                name: '列表页面',
                path: '/example/table',
                icon: 'el-icon-info',
                permission: ['query', 'add', 'edit', 'delete']
            },
            {
                name: '图表页面',
                path: '/example/charts',
                icon: 'el-icon-info',
                permission: ['query', 'add', 'edit', 'delete']
            },
            {
                name: '地图页面',
                path: '/example/map',
                icon: 'el-icon-info',
                permission: ['query', 'add', 'edit', 'delete']
            }
        ]
    },
    {
        name: '国际化',
        path: '/i18n',
        icon: 'el-icon-setting',
        permission: ['query', 'add', 'edit', 'delete']
    },
    {
        name: '主题切换',
        path: '/theme',
        icon: 'el-icon-warning',
        permission: ['query', 'add', 'edit', 'delete']
    }
]

export default [{
    path: '/user/navlist',
    data: data
}]