
interface IThemes {
  defaultTheme: object
}

export interface ITheme {
  app: {
    primaryColor: string,
    fontColor: string,
    darkColor: string,
    lightColor: string,
    maxWidth: string,
    backgroundColor: string
  },
  form: {
    labelColor: string,
    inputColor: string,
    inputBackgroundColor: string,
    focusColor: string,
    failureColor: string,
    passiveColor: string,
    successColor: string
  },
  font: {
    family: string,
    light: string,
    regular: string,
    medium: string,
    bold: string
  }
}

/**
 * Default theme
 *
 * @return object
 */
const defaultTheme: ITheme = {
  app: {
    primaryColor: '#f59231',
    fontColor: '#3d3d3d',
    darkColor: '#231a15',
    lightColor: '#fff',
    maxWidth: '1000px',
    backgroundColor: '#fffcf8'
  },
  form: {
    labelColor: '#999',
    inputColor: '#000',
    inputBackgroundColor: '#fff',
    focusColor: '#999',
    failureColor: '#ccc',
    passiveColor: '#ccc',
    successColor: '#ccc'
  },
  font: {
    family: 'Krub, sans-serif;',
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700'
  }
};

const themes: {[index: string]: ITheme } = {
  defaultTheme
};

export default themes;
