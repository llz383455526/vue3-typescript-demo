import { InjectionKey, AppConfig } from 'vue'
import { Config, globalPropertiesInterface } from './interface'

export const PROVIDE_INJECT_KEY_COUNT: InjectionKey<Config> = Symbol()
export const APP_CONFIG: InjectionKey<AppConfig> = Symbol()
