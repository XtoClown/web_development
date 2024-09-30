export class Processor{
    constructor(series, socket, tp, cores, threads, frequency, turboboost, l1, l2, l3, tdp){
        this.series = series;
        this.socket = socket;
        this.tp = tp;
        this.cores = cores;
        this.threads = threads;
        this.frequency = frequency;
        this.turboboost = turboboost;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.tdp = tdp;
    }

    processorInfo(){
        let returnedArray = [];
        returnedArray[0] = `Series: ${this.series}`;
        returnedArray[1] = `Socket: ${this.socket}`;
        returnedArray[2] = `Technological process: ${this.tp}`;
        returnedArray[3] = `Number of cores: ${this.cores}`;
        returnedArray[4] = `Number of threads: ${this.threads}`;
        returnedArray[5] = `Clock frequency: ${this.frequency}`;
        returnedArray[6] = `TurboBoost / TurboCore frequency: ${this.turboboost}`;
        returnedArray[7] = `L1 level 1 cache: ${this.l1}`;
        returnedArray[8] = `L2 level 2 cache: ${this.l2}`;
        returnedArray[9] = `L3 level 3 cache: ${this.l3}`;
        returnedArray[9] = `Heat dissipation (TDP): ${this.tdp}`;
        return returnedArray;
    }
}

