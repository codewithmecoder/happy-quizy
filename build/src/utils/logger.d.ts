declare const log: import("pino").Logger<{
    base: {
        pid: boolean;
    };
    transport: {
        target: string;
        options: {
            colorize: boolean;
        };
    };
    timestamp: () => string;
}>;
export default log;
