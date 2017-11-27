import { isObject, isFunction } from 'lodash';

class Context {
    constructor (flattenContentObj) {
        this.flattenContentObj = flattenContentObj;
        this.getValue = this.getValue.bind(this);
    }

    getValue (key) {
        let result = null;
        const value = this.flattenContentObj[key];
        if (isFunction(value)) {
            result = value(this);
        } else {
            result = `${value}`;
        }
        return result;
    }
}

const toflatObject = (compositeKey, jsObj, flattenObject) => {
    if (isObject(jsObj)) {
        Object.keys(jsObj).map((key) => {
            if (compositeKey) {
                toflatObject(`${compositeKey}.${key}`, jsObj[key], flattenObject);
            } else {
                toflatObject(`${key}`, jsObj[key], flattenObject);
            }
        });
    } else {
        flattenObject[compositeKey] = jsObj;
    }
};

const transformToJson = (contentObject) => {
    const jsonContent = {
        supportedLocales: [],
        i18nLocaleContentCandidates: {}
    };
    Object.keys(contentObject).forEach((localeKey) => {
        if (localeKey === 'default') {
            jsonContent.defaultLocale = contentObject[localeKey];
            jsonContent.locale = contentObject[localeKey];
        } else {
            jsonContent.supportedLocales.push(localeKey);
            const localeObj = contentObject[localeKey];
            const localeFlatten = {};
            toflatObject('', localeObj, localeFlatten);
            const context = new Context(localeFlatten);
            const flashObj = {};
            Object.keys(localeFlatten).map((key2) => {
                const value = localeFlatten[key2];
                if (isFunction(value)) {
                    flashObj[key2] = value(context);
                }
            });
            const localeJson = {
                ...localeFlatten,
                ...flashObj,
                locale: localeKey
            };
            jsonContent.i18nLocaleContentCandidates[localeKey] = localeJson;
        }
    });
    jsonContent.switchLocale = (locale) => {
        return {
            ...jsonContent,
            ...jsonContent.i18nLocaleContentCandidates[locale]
        };
    };
    return jsonContent.switchLocale(jsonContent.defaultLocale);
};

let localContent = false;
try {
    localContent = require('../build/content');
    localContent = localContent.default || localContent;
} catch (error) {
    // NOOP - surpress exception by intention.
}
if (localContent) {
    localContent = transformToJson(localContent);
}

export default (localContent ? {
    ...localContent
} : false);
