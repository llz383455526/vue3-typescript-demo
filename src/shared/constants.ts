import { InjectionKey } from 'vue'
import { Config } from './interface'

export const PROVIDE_INJECT_KEY_COUNT: InjectionKey<Config> = Symbol()
