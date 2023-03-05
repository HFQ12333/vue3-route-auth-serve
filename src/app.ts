import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { router, user, IRoute, IUser } from './data'

const app: Application = express()
const PORT: number = 8081

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

interface IBody {
	uid: number
}

app.post('/user_router_list', (requset: Request, response: Response) => {
	const { uid }: IBody = requset.body
	if (uid) {
		const userinfo: IUser | undefined = user.find((item) => item.id == uid)
		if (userinfo) {
			const autoRouteList: IRoute[] = []
			userinfo?.auth.forEach((uid) => {
				router.forEach((rout: IRoute) => {
					if (uid === rout.id) {
						autoRouteList.push(rout)
					}
				})
			})
			response.status(200).send({
				data: autoRouteList,
			})
		} else {
			response.status(200).send({
				data: null,
			})
		}
	} else {
		response.status(200).send({
			data: null,
		})
	}
})

app.listen(PORT, () => {
	console.log('server is running at http://127.0.0.1:' + PORT)
})
