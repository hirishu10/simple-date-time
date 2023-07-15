/**
 *
 * @param dateValue default current date will be displayed otherwise enter datevalue unix number for paarticular date.
 * @returns `String`
 */
export declare const getCustomDTFormatter: (dateValue?: number) => {
    format: (formatValue: string, insertCharacters?: {
        yy?: string | undefined;
        yyyy?: string | undefined;
        M?: string | undefined;
        Mu?: string | undefined;
        Mp?: string | undefined;
        MM?: string | undefined;
        MMu?: string | undefined;
        MMp?: string | undefined;
        mt?: string | undefined;
        dt?: string | undefined;
        d?: string | undefined;
        du?: string | undefined;
        dp?: string | undefined;
        dd?: string | undefined;
        ddu?: string | undefined;
        ddp?: string | undefined;
        m?: string | undefined;
        h?: string | undefined;
        s?: string | undefined;
        ap?: string | undefined;
        apu?: string | undefined;
        "h:m:s"?: string | undefined;
        "h:m"?: string | undefined;
    } | undefined) => string;
};
//# sourceMappingURL=getCustomDTFormatter.d.ts.map