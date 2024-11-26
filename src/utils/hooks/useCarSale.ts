const useCarSale = (sum: number, days: number) => {
    let saleSum = sum / 100;
    let saleProc = 0;

    if (days >= 21) {
        saleProc = 20;
    } else if (days >= 14) {
        saleProc = 15;
    } else if (days >= 7) {
        saleProc = 10;
    } else if (days >= 4) {
        saleProc = 5;
    }

    saleSum = saleSum * saleProc;

    return {
        decrementSum: saleSum,
        proc: saleProc,
        totalSum: sum - saleSum,
    };
};

export default useCarSale;
