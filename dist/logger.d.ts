export default interface Logger {
    error(...data: any[]): void;
    info(...data: any[]): void;
    warn(...data: any[]): void;
}
export declare enum LogLevel {
    INFO = 1,
    WARN = 2,
    ERROR = 3
}
export declare class TastytradeLogger implements Logger {
    logLevel: LogLevel;
    private logger;
    constructor(logger?: Logger, logLevel?: LogLevel);
    error(...data: any[]): void;
    info(...data: any[]): void;
    warn(...data: any[]): void;
    private shouldLog;
}
//# sourceMappingURL=logger.d.ts.map