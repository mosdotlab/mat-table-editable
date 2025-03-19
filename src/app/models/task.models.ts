export interface ITask {
	id: number,
	name: string,
	status: number,
	comment: string,
	spentTime: number
}

export interface IKeyValue {
	key: number,
	value: string,
}