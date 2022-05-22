export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType
    }[]
}

export const data: Data = {
    report: [{
        id: "Diego",
        source: "Salary",
        amount: 3000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME 
    },
    {
        id: "Diego2",
        source: "Drawing",
        amount: 2000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME 
    },
    {
        id: "Diego3",
        source: "Survival KIT",
        amount: 1000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE 
    },
]
}

