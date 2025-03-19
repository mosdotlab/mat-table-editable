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

export const STATUSES: IKeyValue[] = [
	{
		key: 1,
		value: "Создана",
	},
	{
		key: 2,
		value: "В работе",
	},
	{
		key: 3,
		value: "В тестировании",
	},
	{
		key: 4,
		value: "Завершена",
	}
];