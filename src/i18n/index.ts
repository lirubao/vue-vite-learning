import {App} from "vue";
import {createI18n, I18n, I18nOptions} from "vue-i18n";

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions(): Promise<I18nOptions> {
    const locale = 'en'
    const defaultLocale = await import(`./lang/${locale}.ts`)
    const message = defaultLocale.default?.message ?? []
    return {
        legacy: false,
        messages: {
            [locale]: message
        },
        sync: true,
        silentFallbackWarn: true,
        missingWarn: false,
        silentTranslationWarn: true
    }
}

export async function setupI18n(app: App<Element>) {
    const options = await createI18nOptions()
    i18n = createI18n(options) as I18n
    app.use(i18n)
}