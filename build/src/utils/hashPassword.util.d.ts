export declare function hashPassword(password: string): Promise<string>;
export declare const comparePassword: (canidatePassword: string, hashPassword: string) => Promise<boolean>;
