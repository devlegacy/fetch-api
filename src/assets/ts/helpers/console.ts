const BG_GREEN = '#3dca77';
const BG_YELLOW = '#f09c32';
const BG_RED = '#bc3f32';

const logStyle = (bg: string) =>
  `color:#fff; background-color: ${bg}; font-weight: bolder; border-radius: 5px; padding: 2px;`;

const levelToColor = {
  log: logStyle(BG_GREEN),
  warn: logStyle(BG_YELLOW),
  error: logStyle(BG_RED),
};

const logType = (type = 'log', args: any) => {
  let title = args.length > 1 ? args.shift() : '[Dvx]:';
  console[type](`%c${title}`, levelToColor[type], ...args);
};

const c = console.log;

const consoleUserWarning = () => {
  c(
    `%c¡Alto! \n%c[Advertencia] - Esta característica del navegador es recomendada solo para desarrolladores`,
    'color:red; font-size: 60px; text-shadow: 0px 2px 3px #000;',
    'font-size: 35px;'
  );
};

const log = (...args: any) => {
  logType('log', args);
};

const warn = (...args: any) => {
  logType('warn', args);
};

const error = (...args: any) => {
  logType('error', args);
};

export { c, consoleUserWarning, log, warn, error };
