module.exports = {
    useTabs: false,
    tabWidth: 4,
    printWidth: 120,
    endOfLine: 'lf',
    overrides: [
        {
            files: ['*.vue', '*.js', '*.mjs', '*.ts'],
            options: {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                quoteProps: 'as-needed',
                bracketSpacing: true,
                bracketSameLine: false,
                arrowParens: 'always',
                vueIndentScriptAndStyle: false,
                singleAttributePerLine: false,
            },
        },
    ],
};
