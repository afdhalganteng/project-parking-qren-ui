import { Chart } from './chart.interface';

export function onConstructPieChart(labels: string[], data: any[]): Chart {
    return {
        labels,
        datasets: [
            {
                data,
                backgroundColor: ['#42A5F5'],
                hoverBackgroundColor: ['#42A5F5'],
            },
        ],
    };
}
export function onConstructBarChart(
    labels: string[],
    data: any[],
    type: string
): Chart {
    return {
        labels,
        datasets: [
            {
                label: type,
                backgroundColor: ' #e00000',
                borderColor: ' #e00000',
                data,
            },
        ],
    };
}