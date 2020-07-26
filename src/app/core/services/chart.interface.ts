export interface Chart {
    labels: string[];
    datasets: Datasets[];
}

interface Datasets {
    label?: string;
    data: any[];
    backgroundColor?: string[] | string;
    hoverBackgroundColor?: string[];
    borderColor?: string;
    fill?: boolean;
}
