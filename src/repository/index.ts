import AsyncStorage from '@react-native-async-storage/async-storage';

export type TReportCard = {
	id: number;
	title: string;
}

export type TReport = {
	id: number;
	config: TReportConfig,
	dailySpending: TDailySpending[]; 
	otherSpending: TOtherSpending[];
	income: TIncome[];
}

export type TReportConfig = {
	title: string;
	periodStart: Date;
	periodEnd: Date;
	dailyBudget: number;
}

export type TDailySpending = {
	id: number,
	value: number,
}

export type TOtherSpending = {
	id: number,
	title: string,
	value: number,
}

export type TIncome = {
	id: number,
	title: string,
	value: number,
}

export const Repository = {
	async getReports(): Promise<TReport[]> {
		const res = await AsyncStorage.getItem('reports');
		return res ? JSON.parse(res) as TReport[] : [];
	},

	async getReportById(id: number): Promise<TReport> {
		const reports = await this.getReports();
		const report = findReport(reports, id);

		return report;
	},

	async getReportCards(): Promise<TReportCard[]> {
		const reports = await this.getReports();
		const reportCards: TReportCard[] = reports.map(
			(report) => ({ id: report.id, title: report.config.title })
		);
		return reportCards;
	},

	async setReports(reports: TReport[]): Promise<void> {
		AsyncStorage.setItem('reports', JSON.stringify(reports));
	},

	async uploadReports(newReports: TReport[]): Promise<void> {
		const reports = await this.getReports();
		await this.setReports(
			reports.concat(
				newReports.map((report, index) => ({ ...report, id: reports.length + 1 + index, }))
			)
		);
	},

	async addReport(): Promise<void> {
		const reports = await this.getReports();

		const newReport: TReport = {
			id: reports.length + 1,
			config: {
				title: 'Новый отчёт',
				periodStart: new Date(),
				periodEnd: new Date(),
				dailyBudget: 1000,
			},
			dailySpending: [] as TDailySpending[], 
			otherSpending: [] as TOtherSpending[],
			income: [] as TIncome[], 
		};

		this.setReports(reports.concat(newReport));
	},

	async deleteReport(id: number): Promise<void> {
		const reports = await this.getReports();
		const filteredReports = reports.filter((report) => report.id !== id);
		this.setReports(filteredReports);
	},

	async getReportConfig(id: number): Promise<TReportConfig> {
		const { config } = await this.getReportById(id);
		return { 
			title: config.title,
			periodStart: new Date(config.periodStart),
			periodEnd: new Date(config.periodEnd),
			dailyBudget: Number(config.dailyBudget),
		};
	},

	async updateReportCofig(data: { id: number, config: TReportConfig }): Promise<void> {
		const reports = await this.getReports();
		const updatedReports = reports.map((report) => {
			if (report.id === data.id) {
				return { ...report, config: data.config };
			} else {
				return report;
			}
		});
		this.setReports(updatedReports);
	},

	async addDailySpending(data: { id: number, value: number }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, data.id);
		
		currentReport.dailySpending = currentReport.dailySpending.concat({
			id: currentReport.dailySpending.length + 1, 
			value: data.value 
		});

		const updatedReports = reports.map((report) => {
			if (report.id === data.id) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);
	},

	async editDailySpending(params: { reportId: number, data: TDailySpending }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, params.reportId);
		
		currentReport.dailySpending = currentReport.dailySpending.map((item) => {
			if (item.id === params.data.id) {
				return params.data;
			} else {
				return item;
			}
		});

		const updatedReports = reports.map((report) => {
			if (report.id === params.reportId) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);	
	},

	async addOtherSpending(data: { id: number, value: number, title: string }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, data.id);
		
		currentReport.otherSpending = currentReport.otherSpending.concat({
			id: currentReport.otherSpending.length + 1, 
			value: data.value,
			title: data.title,
		});

		const updatedReports = reports.map((report) => {
			if (report.id === data.id) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);
	},

	async editOtherSpending(params: { reportId: number, data: TOtherSpending }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, params.reportId);
		
		currentReport.otherSpending = currentReport.otherSpending.map((item) => {
			if (item.id === params.data.id) {
				return params.data;
			} else {
				return item;
			}
		});

		const updatedReports = reports.map((report) => {
			if (report.id === params.reportId) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);	
	},

	async deleteOtherSpending(params: { reportId: number, id: number }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, params.reportId);
		
		currentReport.otherSpending = currentReport.otherSpending.filter((item) => item.id !== params.id);

		const updatedReports = reports.map((report) => {
			if (report.id === params.reportId) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);	
	},

	async addIncome(data: { id: number, value: number, title: string }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, data.id);
		
		currentReport.income = currentReport.income.concat({
			id: currentReport.income.length + 1, 
			value: data.value,
			title: data.title,
		});

		const updatedReports = reports.map((report) => {
			if (report.id === data.id) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);
	},

	async editIncome(params: { reportId: number, data: TIncome }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, params.reportId);
		
		currentReport.income = currentReport.income.map((item) => {
			if (item.id === params.data.id) {
				return params.data;
			} else {
				return item;
			}
		});

		const updatedReports = reports.map((report) => {
			if (report.id === params.reportId) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);	
	},

	async deleteIncome(params: { reportId: number, id: number }): Promise<void> {
		const reports = await this.getReports();
		const currentReport = findReport(reports, params.reportId);
		
		currentReport.income = currentReport.income.filter((item) => item.id !== params.id);

		const updatedReports = reports.map((report) => {
			if (report.id === params.reportId) {
				return currentReport;
			} else {
				return report
			}
		});

		await this.setReports(updatedReports);	
	},
};

function findReport(reports: TReport[], id: number): TReport {
	const report = reports.find((report) => report.id === id);

	if (!report) {
		throw new Error('Отчёт не найден');
	}

	return {
		...report,
		config: {
			title: report.config.title,
			periodStart: new Date(report.config.periodStart),
			periodEnd: new Date(report.config.periodEnd),
			dailyBudget: Number(report.config.dailyBudget),
		}
	};
}