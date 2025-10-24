import "server-only"

const dictonaries = {
    es: import('../languagues/es.json').then(m => m.default),
    en: import('../languagues/en.json').then(m => m.default),
    br: import('../languagues/br.json').then(m => m.default),
}

export const getDictionary = async (locale: 'es' | 'en' | 'br') => {
  return dictonaries[locale];
}
