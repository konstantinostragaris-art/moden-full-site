import type { Config } from 'tailwindcss'
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{desert:{sand:'#EDE1D0',beige:'#F3E9DF',champagne:'#D8C1A3',brass:'#A7835D',stone:'#3A332B',white:'#FFFFFF'}},boxShadow:{soft:'0 10px 30px rgba(0,0,0,0.08)'},borderRadius:{'2xl':'1.25rem'}}},plugins:[]}
export default config
