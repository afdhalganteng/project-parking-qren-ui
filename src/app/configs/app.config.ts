/**
 * List of Application constants
 */
export const AppConstant = {
    applicationId: 1,
    essId: 2,
    appVersion: '4.0.0-alpha',
    coreVersion: '4.0.0-alpha',
    timeVersion: '4.0.0-alpha',
    umVersion: '4.0.0-alpha',
    payrollVersion: '4.0.0-alpha',
    userSessionKey: btoa('user'),
    generalSettingKey: btoa('setting'),
    actionKey: btoa('action'),
    menuKey: btoa('menuKey'),
    routeKey: btoa('route'),
    companyKey: btoa('company'),
    langKey: 'LANG',
    devActivityComponent: {
        type: 'type',
        category: 'category',
        deliveryMethod: 'deliveryMethod',
        deliveryType: 'deliveryType',
        topic: 'topic',
        assignActivityReason: 'assignActivityReason',
    },
    activeData: [
        {
            field: 'eff_begin',
            conj: '<=',
            val: new Date(),
        },
        {
            field: 'eff_end',
            conj: '>=',
            val: new Date(),
        },
    ],
    supportedLangDescription: ['English', 'Bahasa Indonesia'],
    supportedLang: ['en', 'id'], // UI supported language. Index 0 would be a default.
    supportedLocale: { en: 'en-US', id: 'id-ID' }, // UI supported locale. Mapping with supportedLang
    dateFormatKey: 'DATE',
    supportedDateFormat: [
        'dd MMM yyyy',
        'dd-MM-yyyy',
        'dd/MM/yyyy',
        'dd.MM.yyyy',
    ], // UI supported date format. Index 0 would be a default.
    primeMappingDateFormat: {
        'dd MMM yyyy': 'dd M yy',
        'dd-MM-yyyy': 'dd-mm-yy',
        'dd/MM/yyyy': 'dd/mm/yy',
        'dd.MM.yyyy': 'dd.mm.yy',
    }, // Mapping prime date format with supportedDateFormat array
    dateFormatApi: 'yyyy-MM-dd',
    autoCompleteBounceTime: 2000,
    deleteMessage: 'Are you sure want to delete ', // TODO Delete this!
    maxFileSize: 5 * 1000 * 1000,
    defaultEndDate: '9999-12-31', // Default end date. If end date is empty, then set with this value.
    yearRange: '2000:2050',
    primeBeginYearRange: '1900',
    primeEndYearRange: '2050',
    primeBeginBirthYearRange: '1900',
    primeEndBirthYearRange: '2050',
};
