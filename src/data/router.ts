export interface IRoute {
	id: number
	pid: number //0为主路由
	path: string
	link?: string //router-link对应
	name: string
	title: string
}

/**
 * 课程管理 2
 *   课程操作 3
 *     课程数据 4
 *   增加课程 5
 *
 * 学生管理 6
 *   学生操作 7
 *   增加学生 8
 */

export default <IRoute[]>[
	{
		id: 2,
		pid: 0,
		path: '/course',
		name: 'Course',
		title: '课程管理',
	},
	{
		id: 3,
		name: 'CourseOperate',
		path: 'operate',
		link: '/course/operate',
		pid: 2,
		title: '课程操作',
	},
	{
		id: 4,
		name: 'CourseInfoData',
		path: 'info_data',
		link: '/course/operate/info_data',
		pid: 3,
		title: '课程数据',
	},
	{
		id: 5,
		name: 'CourseAdd',
		path: 'add',
		link: '/course/add',
		pid: 2,
		title: '增加课程',
	},
	{
		id: 6,
		pid: 0,
		path: '/student',
		name: 'Student',
		title: '学生管理',
	},
	{
		id: 7,
		name: 'StudentOperate',
		path: 'operate',
		link: '/student/operate',
		pid: 6,
		title: '学生操作',
	},
	{
		id: 8,
		name: 'StudentAdd',
		path: 'add',
		link: '/student/add',
		pid: 6,
		title: '增加学生',
	},
]
